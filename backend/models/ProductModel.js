const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: { type: Number },
    discount: { type: Number },
    stock: { type: Number, required: true },
    sku: { type: String },
    // sku field in the schema represents the Stock Keeping Unit (SKU) of a product. It's a unique identifier or code that is used by businesses, particularly in e-commerce or retail, to track and manage inventory.
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }], // Linked to Category
    images: [{ type: String }],
    brand: { type: String },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
    featured: { type: Boolean, default: false },
    newArrival: { type: Boolean, default: false },
    tags: [{ type: String }],
    weight: { type: Number },  // In kg
    dimensions: {
        length: { type: Number },  // In cm
        width: { type: Number },   // In cm
        height: { type: Number },  // In cm
    },
    ratings: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Linked to User
        rating: { type: Number, min: 1, max: 5 },
        comment: { type: String }
    }],
    averageRating: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    isPublished: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
