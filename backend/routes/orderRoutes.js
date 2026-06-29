const express = require("express");

const router = express.Router();

const {
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

// Get All Orders
router.get("/", getOrders);

// Add New Order
router.post("/", addOrder);

// Update Order
router.put("/:id", updateOrder);

// Delete Order
router.delete("/:id", deleteOrder);

module.exports = router;