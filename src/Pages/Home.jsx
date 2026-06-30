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

        <Link to="/products">
          <button className="view-more glow-button">
            Shop Now
          </button>
        </Link>

{/* Featured Products */}

<section className="featured-section">

  <h2 className="section-title">
    ⭐ Featured Products
  </h2>

  <div className="featured-grid">

    {products.map((item) => (

      <Link
        key={item._id}
        to="/product-details"
        state={item}
        className="card-link"
      >

        <div className="card">

          <div className="card-img">
            <img
              src={item.image}
              alt={item.name}
            />
          </div>

          <h3>{item.name}</h3>

          <p className="price">
            ₹{item.price}
          </p>

        </div>

      </Link>

    ))}

  </div>

</section>

{/* Categories */}

<section className="categories-section">

  <h2 className="section-title">
    Shop By Category
  </h2>

  <div className="category-grid">

    <Link to="/dry-prawns" className="category-card">
      🦐
      <h3>Dry Prawns</h3>
    </Link>

    <Link to="/dry-fish" className="category-card">
      🐟
      <h3>Dry Fish</h3>
    </Link>

    <Link to="/dry-crabs" className="category-card">
      🦀
      <h3>Dry Crabs</h3>
    </Link>

    <Link to="/squids-octopus" className="category-card">
      🦑
      <h3>Squids & Octopus</h3>
    </Link>

    <Link to="/dry-shellfish" className="category-card">
      🐚
      <h3>Shellfish</h3>
    </Link>

  </div>

</section>

{/* Why Choose Us */}

<section className="why-us">

  <h2 className="section-title">
    Why Choose Us?
  </h2>

  <div className="why-grid">

    <div className="why-card">
      🚚
      <h3>Fast Delivery</h3>
      <p>Quick delivery across India.</p>
    </div>

    <div className="why-card">
      ⭐
      <h3>Premium Quality</h3>
      <p>Best quality dry seafood.</p>
    </div>

    <div className="why-card">
      🐟
      <h3>Fresh Stock</h3>
      <p>Direct from Kakinada coast.</p>
    </div>

    <div className="why-card">
      💳
      <h3>Secure Payment</h3>
      <p>100% Safe Payments.</p>
    </div>

  </div>

</section>
      </div>
    </div>
  );
}

export default Home;