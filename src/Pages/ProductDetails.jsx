import { useState } from "react";
import "./ProductDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import products from "../data/products";
import { toast } from "react-toastify";

function ProductDetails({
  cart,
  setCart,
  wishlist,
  setWishlist
}) {  
  const { state } = useLocation();
  const navigate = useNavigate();
  const item = state;

if (!item) {
  return (
    <h2 style={{ textAlign: "center" }}>
      Product Not Found
    </h2>
  );
}

const relatedProducts = products
  .filter(
    (product) =>
      product.category === item.category &&
      product.id !== item.id
  )
  .slice(0, 4);
  console.log("Current Product:", item);
console.log("All Products:", products);
console.log("Related Products:", relatedProducts);

  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
              }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: quantity,
        },
      ]);
    }

    // Reset quantity after adding
    setQuantity(1);

toast.success(`${item.name} added to cart! 🛒`);  };
  const buyNow = () => {

  const existingItem = cart.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItem) {

    setCart(
      cart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + quantity,
            }
          : cartItem
      )
    );

  } else {

    setCart([
      ...cart,
      {
        ...item,
        quantity: quantity,
      },
    ]);

  }

  navigate("/checkout");
};
  const addToWishlist = () => {

  const alreadyExists = wishlist.find(
    (product) => product.id === item.id
  );

  if (alreadyExists) {
toast.info("Already in Wishlist ❤️");    return;
  }

  setWishlist([
    ...wishlist,
    item
  ]);

toast.success("Added to Wishlist ❤️");};
const reviews = [
  {
    id: 1,
    name: "Ramesh",
    rating: 5,
    comment: "Excellent quality. Very fresh and clean.",
  },
  {
    id: 2,
    name: "Priya",
    rating: 4,
    comment: "Packing was very good. Worth buying.",
  },
  {
    id: 3,
    name: "Suresh",
    rating: 5,
    comment: "Premium quality dry fish. Highly recommended.",
  },
];

  return (
    <div className="details-page">
      <div className="details-card">

 <div className="image-container">

  <img
    src={item.image}
    alt={item.name}
    className="details-image"
  />

  <div className="zoom-text">
    🔍 Hover to Zoom
  </div>

</div>

        <div className="details-info">

          <h1>{item.name}</h1>

          <h2>₹{item.price}/kg</h2>

          <p>
            Fresh Premium Quality Dry Seafood directly
            collected from Kakinada Coast.
          </p>

          <p><b>Weight :</b> 1 Kg</p>

          <p><b>Availability :</b> In Stock</p>

          <p>⭐⭐⭐⭐⭐ (4.9)</p>

          {/* Quantity Selector */}

          <div className="quantity-section">

            <h3>Quantity</h3>

            <div className="quantity-box">

              <button onClick={decreaseQuantity}>
                -
              </button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity}>
                +
              </button>

            </div>

          </div>
<button
  className="wishlist-btn"
  onClick={addToWishlist}
>
  ❤️ Add to Wishlist
</button>
          <button
            className="buy-btn"
            onClick={addToCart}
          >
            🛒 Add To Cart
          </button>
          <button
  className="buy-now-btn"
  onClick={buyNow}
>
  ⚡ Buy Now
</button>

        </div>

      </div>
      <div className="reviews-section">

  <h2>⭐ Customer Reviews</h2>

  {reviews.map((review) => (

    <div className="review-card" key={review.id}>

      <h3>{review.name}</h3>

      <p className="rating">
        {"⭐".repeat(review.rating)}
      </p>

      <p>{review.comment}</p>

    </div>

  ))}

</div>
<h2 className="related-title">
  🔥 Related Products
</h2>

<div className="related-products">

  {relatedProducts.map((product) => (

    <div className="related-card" key={product.id}>

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}/kg</p>

      <button
        onClick={() =>
          navigate("/product-details", {
            state: product,
          })
        }
      >
        View Details
      </button>

    </div>

  ))}

</div>
    </div>
  );
}

export default ProductDetails;