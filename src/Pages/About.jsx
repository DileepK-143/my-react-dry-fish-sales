import React from "react";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px",
        background: "#f5f7fa",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#0d3b66",
            marginBottom: "20px",
          }}
        >
          🐟 About Kakinada Dry Fish Market
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            textAlign: "justify",
          }}
        >
          Welcome to Kakinada Dry Fish Market, your trusted destination for
          premium quality dry fish products sourced directly from the coastal
          regions of Kakinada, Andhra Pradesh.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            textAlign: "justify",
          }}
        >
          We specialize in supplying high-quality dry prawns, anchovies,
          ribbon fish, and other seafood products. Every product is carefully
          selected, hygienically processed, and packed to maintain freshness
          and authentic taste.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            textAlign: "justify",
          }}
        >
          Our mission is to connect seafood lovers across India with the rich
          flavors of Kakinada's traditional dry fish industry while ensuring
          quality, affordability, and customer satisfaction.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div>
            <h2>⭐ Quality</h2>
            <p>Premium Grade Products</p>
          </div>

          <div>
            <h2>🚚 Delivery</h2>
            <p>Fast Shipping Across India</p>
          </div>

          <div>
            <h2>🤝 Trust</h2>
            <p>Reliable Customer Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;