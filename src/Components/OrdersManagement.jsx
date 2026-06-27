import "./OrdersManagement.css";

function OrdersManagement({
  orders = [],
  setOrders,
}) {
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

              <tr key={order.id}>

                <td>#{order.id}</td>

                <td>{order.customer.name}</td>

                <td>₹{order.total}</td>

                <td>

<select
  value={order.status}
  onChange={(e) => {
    const updatedOrders = orders.map((o) =>
      o.id === order.id
        ? {
            ...o,
            status: e.target.value,
          }
        : o
    );

    setOrders(updatedOrders);
  }}
>
  <option value="Processing">🟡 Processing</option>
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