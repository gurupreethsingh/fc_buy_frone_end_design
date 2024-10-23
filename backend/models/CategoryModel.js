const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // Name of the category, must be unique
    description: { type: String }, // Optional description of the category
    parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null }, // For hierarchical category structure
    image: { type: String }, // Category image URL or path
    featured: { type: Boolean, default: false }, // Whether the category is featured
    active: { type: Boolean, default: true }, // Whether the category is active
    subCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }], // Subcategories for hierarchical structure
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] // Products associated with the category
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);