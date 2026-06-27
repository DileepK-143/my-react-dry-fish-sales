import React from "react";
import "./Products.css";
import products from "../data/Products";
function Products({ cart, setCart }) {
 
  const addToCart = (product) => {
    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div className="products-page">

      <h1 className="products-title">
        🐟 Our Premium Dry Fish Collection
      </h1>

      <div className="products-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>

            <div className="product-image">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>

            <h3>{item.name}</h3>

            <p className="price">
              ₹{item.price}
            </p>

            <button
              className="cart-btn"
              onClick={() => addToCart(item)}
            >
              Add To Cart
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;