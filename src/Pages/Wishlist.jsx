import "./Wishlist.css";
import { toast } from "react-toastify";

function Wishlist({ wishlist, setWishlist, cart, setCart }) {

const removeFromWishlist = (id, showToast = true) => {
  const updatedWishlist = wishlist.filter(
    (item) => item.id !== id
  );

  setWishlist(updatedWishlist);

  if (showToast) {
    toast.error("Removed from Wishlist 💔");
  }
};

  const moveToCart = (item) => {

    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {

      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);

    }

    removeFromWishlist(item.id);

toast.success("Added to Cart 🛒");  };

  return (
    <div className="wishlist-page">

      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (

        <div className="empty-wishlist">

          <h2>Your Wishlist is Empty</h2>

          <p>
            Save your favourite dry seafood products here ❤️
          </p>

        </div>

      ) : (

        <div className="wishlist-container">

          {wishlist.map((item) => (

            <div className="wishlist-card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="wishlist-info">

                <h2>{item.name}</h2>

                <h3>₹{item.price}/kg</h3>

                <p>
                  Premium Quality Dry Seafood
                </p>

                <div className="wishlist-buttons">

                  <button
                    className="cart-btn"
                    onClick={() => moveToCart(item)}
                  >
                    🛒 Move To Cart
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    🗑 Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;