import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
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

          <Link to="/products" className="card-link">
            <div className="card">
              <span className="badge">⭐ Best Seller</span>

              <div className="card-img">
                <img
                  src="/images/dry-prawns.jpeg"
                  alt="Dry Prawns"
                />
              </div>

              <p>Dry Prawns</p>
            </div>
          </Link>

          <Link to="/products" className="card-link">
            <div className="card">
              <span className="badge">🔥 Popular</span>

              <div className="card-img">
                <img
                  src="/images/anchovies.jpeg"
                  alt="Anchovies"
                />
              </div>

              <p>Anchovies</p>
            </div>
          </Link>

          <Link to="/products" className="card-link">
            <div className="card">
              <span className="badge">🐟 Fresh Stock</span>

              <div className="card-img">
                <img
                  src="/images/ribbon-fish.jpeg"
                  alt="Ribbon Fish"
                />
              </div>

              <p>Ribbon Fish</p>
            </div>
          </Link>

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