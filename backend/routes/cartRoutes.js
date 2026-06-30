const express = require("express");

const router = express.Router();

const {
  getCart,
  addToCart,
  updateCart,
  removeCartItem,
} = require("../controllers/cartController");

// Get Cart
router.get("/:userId", getCart);

// Add To Cart
router.post("/", addToCart);

// Update Cart Quantity
router.put("/:id", updateCart);

// Remove Cart Item
router.delete("/:id", removeCartItem);

module.exports = router;