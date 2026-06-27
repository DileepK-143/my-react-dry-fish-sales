import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Checkout.css";

function Checkout({
  cart,
  setCart,
  orders,
  setOrders,
}) {   console.log("Checkout cart:", cart);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });
  const [coupon, setCoupon] = useState("");
const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const totalPrice = (cart || []).reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

  const deliveryCharge = totalPrice > 0 ? 50 : 0;
const grandTotal =
  totalPrice + deliveryCharge - discount;
  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };
const applyCoupon = () => {
  const code = coupon.trim().toUpperCase();

  if (code === "WELCOME10") {
    setDiscount(totalPrice * 0.1);
    toast.success("🎉 WELCOME10 Applied! 10% Discount");
  } 
  else if (code === "SAVE200" && totalPrice >= 2000) {
    setDiscount(200);
    toast.success("🎉 SAVE200 Applied!");
  } 
  else if (code === "FREESHIP") {
    setDiscount(50);
    toast.success("🚚 Free Delivery Applied!");
  } 
  else {
    setDiscount(0);
    toast.error("❌ Invalid Coupon Code");
  }
};

const placeOrder = () => {
  if (cart.length === 0) {
    toast.error("Your cart is empty!");
    return;
  }

  if (
    !customer.name ||
    !customer.phone ||
    !customer.address ||
    !customer.city ||
    !customer.pincode
  ) {
    toast.error("Please fill all the details.");
    return;
  }

  const newOrder = {
    id: Date.now(),
    customer: { ...customer },
    items: cart.map((item) => ({ ...item })),
    total: grandTotal,
    date: new Date().toISOString(),
    status: "Processing",
  };

  setOrders((prevOrders) => [...prevOrders, newOrder]);

  setCart([]);

  toast.success("🎉 Order Placed Successfully!");

  setTimeout(() => {
    navigate("/orders");
  }, 1500);
};
  return (
    <div className="checkout-page">

      <div className="checkout-form">

        <h1>📦 Checkout</h1>

        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={customer.name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
        />

        <textarea
          placeholder="Delivery Address"
          name="address"
          value={customer.address}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="City"
          name="city"
          value={customer.city}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Pincode"
          name="pincode"
          value={customer.pincode}
          onChange={handleChange}
        />

        <select
          name="payment"
          value={customer.payment}
          onChange={handleChange}
        >
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
        </select>

      </div>

      <div className="order-summary">

        <h2>🛒 Order Summary</h2>

        {(cart || []).map((item) => (
          <div className="summary-item" key={item.id}>
            <span>
              {item.name} × {item.quantity}
            </span>

            <span>
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}

        <hr />
<div className="coupon-section">

  <input
    type="text"
    placeholder="Enter Coupon Code"
    value={coupon}
    onChange={(e) => setCoupon(e.target.value)}
  />

  <button onClick={applyCoupon}>
    Apply
  </button>

</div>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>₹{totalPrice}</span>
        </div>
        {discount > 0 && (
  <div className="summary-item">
    <span>Discount</span>
    <span>- ₹{discount}</span>
  </div>
)}

        <div className="summary-item">
          <span>Delivery</span>
          <span>₹{deliveryCharge}</span>
        </div>

        <div className="summary-item total">
          <span>Total</span>
          <span>₹{grandTotal}</span>
        </div>

        <button
          className="place-order-btn"
          onClick={placeOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;