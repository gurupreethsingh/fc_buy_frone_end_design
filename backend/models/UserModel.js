const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    dateOfBirth: { type: Date },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    avatar: { type: String, default: 'default-avatar.png' },
    role: { type: String, enum: ['customer', 'admin', 'vendor'], default: 'customer' },
    addresses: [{
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String },
        isDefault: { type: Boolean, default: false },
    }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    cart: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Linked to Product
        quantity: { type: Number, default: 1 },
    }],
    orders: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Linked to Product
        quantity: { type: Number, default: 1 },
        orderDate: { type: Date, default: Date.now }
    }],
    paymentMethods: [{
        cardType: { type: String, enum: ['visa', 'mastercard', 'paypal', 'amex'] },
        cardNumber: { type: String },
        expiryDate: { type: String },
        cardHolderName: { type: String },
        isDefault: { type: Boolean, default: false }
    }],
    notifications: [{
        message: { type: String },
        read: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now }
    }],
    accountStatus: { type: String, enum: ['active', 'inactive', 'suspended'], default: 'active' },
    emailVerified: { type: Boolean, default: false },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', userSchema);
