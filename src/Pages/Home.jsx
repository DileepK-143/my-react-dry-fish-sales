import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { getProducts } from "../api/productApi";

function Home() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  loadProducts();
}, []);

const loadProducts = async () => {
  try {
    const response = await getProducts();
    setProducts(response.data.slice(0, 3));
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="home-page">
      <div className="overlay"></div>

      {/* LOGIN / REGISTER */}
      <div className="auth-buttons">
        <Link to="/login">
          <button className="auth-btn login-btn">Login</button>
        </Link>

        <Link to="/register">
          <button className="auth-btn register-btn">Register</button>
        </Link>
      </div>

      <div className="hero-section fade-in">
        <h1 className="main-title">
          🐟 Kakinada Dry Fish Market
        </h1>

        <p className="tagline">
          Premium Quality Dry Fish Direct From Kakinada Coast
        </p>

        <p>
          Fresh • Hygienic • Wholesale & Retail • Fast Delivery
        </p>

        {/* PRODUCT CARDS */}
   <div className="catering-cards">

  {products.map((item) => (

    <Link
      key={item._id}
      to="/product-details"
      state={item}
      className="card-link"
    >

      <div className="card">

        {item.badge && (
          <span className="badge">
            {item.badge}
          </span>
        )}

        <div className="card-img">
          <img
            src={item.image}
            alt={item.name}
          />
        </div>

        <p>{item.name}</p>

      </div>

    </Link>

  ))}

</div>
        <Link to="/products">
          <button className="view-more glow-button">
            Shop Now
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Home;