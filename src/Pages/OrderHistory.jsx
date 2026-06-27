import "./OrderHistory.css";
import { toast } from "react-toastify";
import { jsPDF } from "jspdf";
function OrderHistory({
  orders,
  cart,
  setCart,
}) {

  const orderAgain = (order) => {
    let updatedCart = [...cart];

    order.items.forEach((item) => {
      const existingItem = updatedCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        updatedCart.push({
          ...item,
        });
      }
    });

    setCart(updatedCart);

    toast.success("🛒 Items added to Cart!");
  };
  const downloadInvoice = (order) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Kakinada Dry Seafood", 20, 20);

  doc.setFontSize(12);
  doc.text(`Invoice No: ${order.id}`, 20, 35);
  doc.text(`Date: ${new Date(order.date).toLocaleString()}`, 20, 45);

  doc.text("Customer Details", 20, 60);
  doc.text(`Name: ${order.customer.name}`, 20, 70);
  doc.text(`Phone: ${order.customer.phone}`, 20, 80);
  doc.text(`Address: ${order.customer.address}`, 20, 90);
  doc.text(
    `City: ${order.customer.city} - ${order.customer.pincode}`,
    20,
    100
  );

  let y = 120;

  doc.text("Products", 20, y);
  y += 10;

  order.items.forEach((item) => {
    doc.text(
      `${item.name}  x${item.quantity}   ₹${item.price * item.quantity}`,
      20,
      y
    );

    y += 10;
  });

  y += 10;

  doc.text(`Delivery Charge : ₹50`, 20, y);

  y += 10;

  doc.text(`Total Paid : ₹${order.total}`, 20, y);

  y += 20;

  doc.setFontSize(16);
  doc.text("Thank You For Shopping ❤️", 20, y);

  doc.save(`Invoice-${order.id}.pdf`);
};

  return (
    <div className="order-history-page">

      <h1>📦 My Orders</h1>

      {orders.length === 0 ? (

        <div className="empty-orders">
          <h2>No Orders Yet 😔</h2>
          <p>Your placed orders will appear here.</p>
        </div>

      ) : (

        orders
          .slice()
          .reverse()
          .map((order) => (

            <div
              className="order-card"
              key={order.id}
            >

              <div className="order-header">

                <div>
                  <h3>Order #{order.id}</h3>
                  <p>{new Date(order.date).toLocaleString()}</p>
                </div>

                <div className="status">

  {order.status === "Processing" && (
    <span>🟡 Processing</span>
  )}

  {order.status === "Packed" && (
    <span>📦 Packed</span>
  )}

  {order.status === "Shipped" && (
    <span>🚚 Shipped</span>
  )}

  {order.status === "Delivered" && (
    <span>✅ Delivered</span>
  )}

</div>

              </div>

              <hr />

              {order.items.map((item) => (

                <div
                  className="order-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="order-info">

                    <h4>{item.name}</h4>

                    <p>
                      Quantity : {item.quantity}
                    </p>

                    <p>
                      ₹{item.price * item.quantity}
                    </p>

                  </div>

                </div>

              ))}

              <hr />

              <div className="customer-details">

                <h4>Delivery Address</h4>

                <p>{order.customer.name}</p>

                <p>{order.customer.phone}</p>

                <p>{order.customer.address}</p>

                <p>
                  {order.customer.city} - {order.customer.pincode}
                </p>

                <p>
                  Payment : {order.customer.payment}
                </p>

              </div>

              <div className="order-total">

                <p>
                  Subtotal : ₹{order.total - 50}
                </p>

                <p>
                  Delivery : ₹50
                </p>

                <h2>
                  Total Paid : ₹{order.total}
                </h2>

                <button
                  className="order-again-btn"
                  onClick={() => orderAgain(order)}
                >
                  🛒 Order Again
                </button>
                <button
  className="invoice-btn"
  onClick={() => downloadInvoice(order)}
>
  📄 Download Invoice
</button>

              </div>

            </div>

          ))

      )}

    </div>
  );
}

export default OrderHistory;