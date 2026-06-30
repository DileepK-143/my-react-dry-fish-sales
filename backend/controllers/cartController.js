const Cart = require("../models/Cart");

// Get User Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ user: req.params.userId })
      .populate("product");

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add To Cart
const addToCart = async (req, res) => {
  try {
    const { user, product, quantity } = req.body;

    const existingItem = await Cart.findOne({
      user,
      product,
    });

    if (existingItem) {
      existingItem.quantity += quantity;

      await existingItem.save();

      return res.status(200).json(existingItem);
    }

    const cartItem = new Cart({
      user,
      product,
      quantity,
    });

    const savedItem = await cartItem.save();

    res.status(201).json(savedItem);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Quantity
const updateCart = async (req, res) => {
  try {
    const updatedItem = await Cart.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedItem);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Remove Item
const removeCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Item removed from cart",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCart,
  addToCart,
  updateCart,
  removeCartItem,
};