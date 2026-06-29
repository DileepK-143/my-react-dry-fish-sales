import "./RecentOrders.css";

function RecentOrders({ orders }) {
  return (
    <div className="recent-orders">
      <h2>📋 Recent Orders</h2>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {orders
              .slice()
              .reverse()
              .slice(0, 5)
              .map((order) => (
                <tr key={order._id}>
                  <td>#{order._id.slice(-6)}</td>

                  <td>{order.customerName}</td>

                  <td>{order.orderStatus}</td>

                  <td>₹{order.totalAmount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RecentOrders;