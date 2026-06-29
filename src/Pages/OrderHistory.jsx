import { useEffect } from "react";
import { toast } from "react-toastify";
import { jsPDF } from "jspdf";
import { getOrders } from "../api/orderApi";
import "./OrderHistory.css";
function OrderHistory({
  orders,
  setOrders,
  cart,
  setCart,
}) {

  const orderAgain = (order) => {
    let updatedCart = [...cart];

(order.products || []).forEach((item) => {
        const existingItem = updatedCart.find(
        (cartItem) => cartItem.productId === item.productId
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
doc.text(`Invoice No: ${order._id ? order._id.slice(-6) : "------"}`, 20, 35);
doc.text(`Date: ${new Date(order.createdAt).toLocaleString()}`, 20, 45);
  doc.text("Customer Details", 20, 60);
doc.text(`Name: ${order.customerName}`, 20, 70);
doc.text(`Phone: ${order.phone}`, 20, 80);
doc.text(`Address: ${order.address}`, 20, 90);
  

  let y = 120;

  doc.text("Products", 20, y);
  y += 10;

(order.products || []).forEach((item) => {
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

doc.text(`Total Paid : ₹${order.totalAmount}`, 20, y);
  y += 20;

  doc.setFontSize(16);
  doc.text("Thank You For Shopping ❤️", 20, y);

doc.save(`Invoice-${order._id || "Order"}.pdf`);};
console.log("Orders:", orders);
useEffect(() => {
  loadOrders();
}, []);

const loadOrders = async () => {
  try {
    const response = await getOrders();
    setOrders(response.data);
  } catch (error) {
    console.error(error);
  }
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
key={order._id || Math.random()}           >

              <div className="order-header">

                <div>
<h3>
  Order #
  {order._id ? order._id.slice(-6) : "------"}
</h3>                  
<p>
  {order.createdAt
    ? new Date(order.createdAt).toLocaleString()
    : "Just Now"}
</p>                </div>

                <div className="status">

  {order.orderStatus === "Pending" && (
    <span>🟡 Pending</span>
  )}

  {order.orderStatus === "Processing" && (
    <span>🟠 Processing</span>
  )}

  {order.orderStatus === "Packed" && (
    <span>📦 Packed</span>
  )}

  {order.orderStatus === "Shipped" && (
    <span>🚚 Shipped</span>
  )}

  {order.orderStatus === "Delivered" && (
    <span>✅ Delivered</span>
  )}

</div>
              </div>

              <hr />

{(order.products || []).map((item) => (
                <div
                  className="order-item"
                  key={item.productId}
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

                <p>{order.customerName}</p>

                <p>{order.phone}</p>

                <p>{order.address}</p>

                

                <p>
                  Payment : {order.paymentMethod}
                </p>

              </div>

              <div className="order-total">

                <p>
                  Subtotal : ₹{order.totalAmount - 50}
                </p>

                <p>
                  Delivery : ₹50
                </p>

                <h2>
                  Total Paid : ₹{order.totalAmount}
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