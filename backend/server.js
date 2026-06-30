const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");

dotenv.config();
console.log(process.env.MONGODB_URI);
// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Dry Seafood Backend API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});