import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({
  cart,
  wishlist,
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
  priceFilter,
  setPriceFilter,
}) {
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/dry-prawns">🦐 Dry Prawns</Link>

        <Link to="/dry-fish">🐟 Dry Fish</Link>

        <Link to="/squids-octopus">🦑 Squids & Octopus</Link>

        <Link to="/dry-crabs">🦀 Dry Crabs</Link>

        <Link to="/dry-shellfish">🐚 Dry Shellfish</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/checkout">Checkout</Link>

        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>

        <Link to="/wishlist">
          ❤️ Wishlist ({wishlist.length})
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;