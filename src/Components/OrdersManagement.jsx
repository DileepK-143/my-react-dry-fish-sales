import "./OrdersManagement.css";
import { updateOrder } from "../api/orderApi";

function OrdersManagement({
  orders = [],
  setOrders,
}) {

  const handleStatusChange = async (order, status) => {
    try {
      const response = await updateOrder(order._id, {
        ...order,
        orderStatus: status,
      });

      setOrders((prev) =>
        prev.map((o) =>
          o._id === order._id ? response.data : o
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="orders-management">

      <h2>🛒 Orders Management</h2>

      {orders.length === 0 ? (

        <h3>No Orders Found</h3>

      ) : (

        <table>

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (

              <tr key={order._id}>

                <td>#{order._id.slice(-6)}</td>

                <td>{order.customerName}</td>

                <td>₹{order.totalAmount}</td>

                <td>

                  <select
                    value={order.orderStatus}
                    onChange={(e) =>
                      handleStatusChange(
                        order,
                        e.target.value
                      )
                    }
                  >
                    <option value="Pending">🟡 Pending</option>
                    <option value="Processing">🟠 Processing</option>
                    <option value="Packed">📦 Packed</option>
                    <option value="Shipped">🚚 Shipped</option>
                    <option value="Delivered">✅ Delivered</option>
                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default OrdersManagement;