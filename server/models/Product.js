const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    pricePerKg: Number,
    quantity: Number,
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Product', productSchema);
