const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const { protect, admin } = require('../middlewares/authMiddleware');

// Create a new product (Admin only)
router.post('/', protect, admin, createProduct);

// Get all products (public)
router.get('/', getAllProducts);

// Get a single product by ID (public)
router.get('/:id', getProductById);

// Update a product (Admin only)
router.put('/:id', protect, admin, updateProduct);

// Delete a product (Admin only)
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
