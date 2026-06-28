import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2>🐟 Kakinada Dry Seafood</h2>
          <p>
            Premium quality dry seafood delivered fresh across India.
          </p>

          <p>
            We provide the finest dry fish, prawns, crabs, shellfish and
            seafood directly from Kakinada.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>🏠 Home</li>
            <li>🛍 Products</li>
            <li>❤️ Wishlist</li>
            <li>🛒 Cart</li>
            <li>📦 My Orders</li>
            <li>📞 Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Categories</h3>

          <ul>
            <li>🐟 Dry Fish</li>
            <li>🦐 Dry Prawns</li>
            <li>🦀 Dry Crabs</li>
            <li>🦑 Squids & Octopus</li>
            <li>🐚 Dry Shellfish</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>📍 Kakinada, Andhra Pradesh</p>

          <p>📞 +91 9876543210</p>

          <p>📧 support@dryseafood.com</p>

          <p>🕒 Mon - Sun : 8:00 AM - 8:00 PM</p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2026 Kakinada Dry Seafood. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by ❤️ Dileep Kamadi
        </p>
      </div>

    </footer>
  );
}

export default Footer;