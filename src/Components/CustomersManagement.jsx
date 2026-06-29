import { useMemo, useState } from "react";
import "./CustomersManagement.css";

function CustomersManagement({ orders = [] }) {
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customers = useMemo(() => {
    const grouped = {};

    orders.forEach((order) => {
      const phone = order.phone;

      if (!grouped[phone]) {
        grouped[phone] = {
          name: order.customerName,
          phone: order.phone,
          city: order.address,
          totalOrders: 0,
          totalSpent: 0,
          lastOrder: order.createdAt,
          orders: [],
        };
      }

      grouped[phone].totalOrders += 1;
      grouped[phone].totalSpent += order.totalAmount;
      grouped[phone].orders.push(order);

      if (
        new Date(order.createdAt) >
        new Date(grouped[phone].lastOrder)
      ) {
        grouped[phone].lastOrder = order.createdAt;
      }
    });

    return Object.values(grouped);
  }, [orders]);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.phone.includes(search)
  );

  return (
    <div className="customers-management">

      <div className="customers-header">
        <h2>👥 Customers Management</h2>

        <input
          type="text"
          placeholder="Search Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="customer-card">
        <h3>Total Customers</h3>
        <p>{customers.length}</p>
      </div>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Orders</th>
            <th>Total Spent</th>
            <th>Last Order</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredCustomers.length === 0 ? (
            <tr>
              <td colSpan="7">
                No Customers Found
              </td>
            </tr>
          ) : (
            filteredCustomers.map((customer) => (
              <tr key={customer.phone}>

                <td>{customer.name}</td>

                <td>{customer.phone}</td>

                <td>{customer.city}</td>

                <td>{customer.totalOrders}</td>

                <td>₹{customer.totalSpent}</td>

                <td>
                  {new Date(customer.lastOrder).toLocaleDateString()}
                </td>

                <td>
                  <button
                    className="view-btn"
                    onClick={() => setSelectedCustomer(customer)}
                  >
                    👁 View
                  </button>
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

      {selectedCustomer && (
        <div className="customer-popup-overlay">

          <div className="customer-popup">

            <h2>👤 Customer Details</h2>

            <p><strong>Name:</strong> {selectedCustomer.name}</p>

            <p><strong>Phone:</strong> {selectedCustomer.phone}</p>

            <p><strong>Address:</strong> {selectedCustomer.city}</p>

            <p><strong>Total Orders:</strong> {selectedCustomer.totalOrders}</p>

            <p><strong>Total Spent:</strong> ₹{selectedCustomer.totalSpent}</p>

            <p>
              <strong>Last Order:</strong>{" "}
              {new Date(selectedCustomer.lastOrder).toLocaleString()}
            </p>

            <hr />

            <h3>📦 Order History</h3>

            {selectedCustomer.orders.map((order, index) => (

              <div key={order._id} className="order-history-card">

                <h4>Order #{index + 1}</h4>

                <p><strong>Amount:</strong> ₹{order.totalAmount}</p>

                <p><strong>Status:</strong> {order.orderStatus}</p>

                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>

                <h5>Items</h5>

                <ul className="customer-items-list">

                  {order.products.map((item) => (

                    <li key={item.productId}>
                      🐟 {item.name} × {item.quantity}
                      {" "}₹{item.price}
                    </li>

                  ))}

                </ul>

              </div>

            ))}

            <button
              className="close-btn"
              onClick={() => setSelectedCustomer(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default CustomersManagement;