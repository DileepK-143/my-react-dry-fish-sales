import "./Cart.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Cart({ cart, setCart }) {

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

 const decreaseQuantity = (id) => {
  const item = cart.find((item) => item.id === id);

  if (item.quantity === 1) {
    toast.error("Item removed from cart 🗑️");
  }

  setCart(
    cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

 const removeItem = (id) => {
  setCart(cart.filter((item) => item.id !== id));

  toast.error("Item removed from cart 🗑️");
};

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1 className="cart-title">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="empty-cart">

          <h2>Your Cart is Empty 😔</h2>

          <Link to="/products">
            <button className="continue-btn">
              Continue Shopping
            </button>
          </Link>

        </div>
      ) : (
        <>
          <div className="cart-container">

            {cart.map((item) => (

              <div className="cart-card" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-details">

                  <h2>{item.name}</h2>

                  <p>₹{item.price}/kg</p>

                  <div className="quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  <h3>
                    ₹{item.price * item.quantity}
                  </h3>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>
              Total : ₹{totalPrice}
            </h2>

            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed To Checkout
              </button>
            </Link>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;