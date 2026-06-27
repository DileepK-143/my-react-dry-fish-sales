import React, { useState } from "react";
import "./DryPrawns.css";
import { useNavigate } from "react-router-dom";
import products from "../data/Products";

function DryFish({
  cart,
  setCart,
  searchQuery,
 
})  {
 const fish = products.filter(
  (product) => product.category === "fish"
);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const itemsPerPage = 4;
  const filteredItems = fish.filter((item) =>
  item.name
    .toLowerCase()
    .includes((searchQuery || "").toLowerCase())
);

let sortedItems = [...filteredItems];

// Price Filter
if (priceFilter === "0-500") {
  sortedItems = sortedItems.filter(
    (item) => item.price <= 500
  );
}

if (priceFilter === "501-1000") {
  sortedItems = sortedItems.filter(
    (item) =>
      item.price > 500 &&
      item.price <= 1000
  );
}

if (priceFilter === "1001-1500") {
  sortedItems = sortedItems.filter(
    (item) =>
      item.price > 1000 &&
      item.price <= 1500
  );
}

// Sort
if (sortOption === "lowToHigh") {
  sortedItems.sort((a, b) => a.price - b.price);
}

if (sortOption === "highToLow") {
  sortedItems.sort((a, b) => b.price - a.price);
}

if (sortOption === "nameAZ") {
  sortedItems.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

if (sortOption === "nameZA") {
  sortedItems.sort((a, b) =>
    b.name.localeCompare(a.name)
  );
}
const currentItems = sortedItems.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

const totalPages = Math.ceil(
  sortedItems.length / itemsPerPage
);

   const addToCart = (item) => {
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
};

  return (
    <div className="prawns-page">
      <div className="overlay"></div>

      <div className="hero-section">
        <h1 className="main-title">🐟 Premium Dry Fish</h1>
        <div className="filter-sort-bar">

  <select
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
  >
    <option value="">Sort By</option>
    <option value="lowToHigh">
      Price: Low → High
    </option>
    <option value="highToLow">
      Price: High → Low
    </option>
    <option value="nameAZ">
      Name: A → Z
    </option>
    <option value="nameZA">
      Name: Z → A
    </option>
  </select>

  <select
    value={priceFilter}
    onChange={(e) => setPriceFilter(e.target.value)}
  >
    <option value="">All Prices</option>
    <option value="0-500">
      ₹0 - ₹500
    </option>
    <option value="501-1000">
      ₹501 - ₹1000
    </option>
    <option value="1001-1500">
      ₹1001 - ₹1500
    </option>
  </select>

</div>
        <p className="tagline">Fresh From Kakinada Coast</p>

        <div className="catering-cards">
          {currentItems.map((item) => (
            <div className="card" key={item.id}>
              <span className="badge">{item.badge}</span>

              <div
  className="card-img"
  onClick={() =>
    navigate("/product-details", {
      state: item,
    })
  }
>
  <img src={item.image} alt={item.name} />
</div>

<h3
  onClick={() =>
    navigate("/product-details", {
      state: item,
    })
  }
  style={{ cursor: "pointer" }}
>
  {item.name}
</h3>              <p className="price">{item.price}</p>

               <button
               className="view-more"
                onClick={() => addToCart(item)}
              >
              Add To Cart
              </button>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          <span>Page {currentPage} of {totalPages}</span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default DryFish;