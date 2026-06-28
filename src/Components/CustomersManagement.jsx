import { useMemo, useState } from "react";
import "./CustomersManagement.css";

function CustomersManagement({ orders = [] }) {
  const [search, setSearch] = useState("");
const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customers = useMemo(() => {
    const grouped = {};

    orders.forEach((order) => {
      const phone = order.customer.phone;

      if (!grouped[phone]) {
       grouped[phone] = {
  name: order.customer.name,
  phone: order.customer.phone,
  city: order.customer.city,
  totalOrders: 0,
  totalSpent: 0,
  lastOrder: order.date,
  orders: [],   // NEW
};
      }

      grouped[phone].totalOrders += 1;
      grouped[phone].totalSpent += order.total;
      grouped[phone].orders.push(order);

      if (
        new Date(order.date) >
        new Date(grouped[phone].lastOrder)
      ) {
        grouped[phone].lastOrder = order.date;
      }
    });

    return Object.values(grouped);
  }, [orders]);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.phone.includes(search)
  );
  console.log("Orders:", orders);
console.log("Customers:", customers);

  return (
    <div className="customers-management">

      <div className="customers-header">

        <h2>👥 Customers Management</h2>

        <input
          type="text"
          placeholder="Search Customer..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
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
            <th>City</th>
            <th>Orders</th>
            <th>Total Spent</th>
            <th>Last Order</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {filteredCustomers.length === 0 ? (

            <tr>

              <td colSpan="6">
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
                  {new Date(
                    customer.lastOrder
                  ).toLocaleDateString()}
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
      <p><strong>City:</strong> {selectedCustomer.city}</p>
      <p><strong>Total Orders:</strong> {selectedCustomer.totalOrders}</p>
      <p><strong>Total Spent:</strong> ₹{selectedCustomer.totalSpent}</p>
      <p>
        <strong>Last Order:</strong>{" "}
        {new Date(selectedCustomer.lastOrder).toLocaleString()}
      </p>
<hr />

<h3>📦 Order History</h3>

{selectedCustomer.orders.map((order, index) => (
  <div
    key={index}
    className="order-history-card"
  >
    <p>
      <strong>Order:</strong> #{index + 1}
    </p>

    <p>
      <strong>Amount:</strong> ₹{order.total}
    </p>

    <p>
      <strong>Status:</strong> {order.status}
    </p>

    <p>
      <strong>Date:</strong>{" "}
      {new Date(order.date).toLocaleDateString()}
    </p>
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