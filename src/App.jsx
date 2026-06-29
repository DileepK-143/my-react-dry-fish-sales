import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import OrderHistory from "./Pages/OrderHistory";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import DryPrawns from "./Pages/DryPrawns";
import DryFish from "./Pages/DryFish";
import SquidsOctopus from "./Pages/SquidOctopus";
import DryCrabs from "./Pages/DryCrabs";
import DryShellFish from "./Pages/DryShellFish";
import ProductDetails from "./Pages/ProductDetails";
import Wishlist from "./Pages/Wishlist";
import Admin from "./Pages/Admin";
import { getOrders } from "./api/orderApi";


function App() {
const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});  
const [wishlist, setWishlist] = useState(() => {
  const savedWishlist = localStorage.getItem("wishlist");
  return savedWishlist ? JSON.parse(savedWishlist) : [];
});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
const [orders, setOrders] = useState([]);
  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
useEffect(() => {
  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );
}, [wishlist]);
useEffect(() => {
  loadOrders();
}, []);

const loadOrders = async () => {
  try {
    const response = await getOrders();
    setOrders(response.data);
  } catch (error) {
    console.error("Failed to load orders:", error);
  }
};



  return (
    <BrowserRouter>
<Navbar
  cart={cart}
  wishlist={wishlist}
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  sortOption={sortOption}
  setSortOption={setSortOption}
  priceFilter={priceFilter}
  setPriceFilter={setPriceFilter}
/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products" element={<Products cart={cart} setCart={setCart}/>}
        />

        <Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      setCart={setCart}
    />
  }
/>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
<Route
  path="/admin"
  element={
    <Admin
      orders={orders}
      setOrders={setOrders}
      cart={cart}
      setCart={setCart}
    />
  }
/><Route
  path="/checkout"
  element={
    <Checkout
      cart={cart}
      setCart={setCart}
      orders={orders}
      setOrders={setOrders}
    />
  }
/>
<Route
  path="/dry-prawns"
  element={
    <DryPrawns
      cart={cart}
      setCart={setCart}
      searchQuery={searchQuery}
      sortOption={sortOption}
    />
  }
/>

<Route
  path="/dry-fish"
  element={
    <DryFish
      cart={cart}
      setCart={setCart}
      searchQuery={searchQuery}
      sortOption={sortOption}
    />
  }
/>

<Route
  path="/dry-crabs"
  element={
    <DryCrabs
      cart={cart}
      setCart={setCart}
      searchQuery={searchQuery}
      sortOption={sortOption}
    />
  }
/>

<Route
  path="/squids-octopus"
  element={
    <SquidsOctopus
      cart={cart}
      setCart={setCart}
      searchQuery={searchQuery}
      sortOption={sortOption}
    />
    
  }
/>

<Route
  path="/dry-shellfish"
  element={
    <DryShellFish
      cart={cart}
      setCart={setCart}
      searchQuery={searchQuery}
      sortOption={sortOption}
    />
  }
/>
<Route
  path="/product-details"
  element={
    <ProductDetails
      cart={cart}
      setCart={setCart}
      wishlist={wishlist}
      setWishlist={setWishlist}
    />
    
  }
/>
<Route
  path="/wishlist"
  element={
    <Wishlist
      wishlist={wishlist}
      setWishlist={setWishlist}
      cart={cart}
      setCart={setCart}
    />
  }
  
/>
<Route
  path="/orders"
  element={
  <OrderHistory
  orders={orders}
  setOrders={setOrders}
  cart={cart}
  setCart={setCart}
/>
  }
/>
      </Routes>
<ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="colored"
/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;