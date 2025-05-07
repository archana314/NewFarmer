const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    password: String,
    role: { type: String, enum: ['buyer', 'seller', 'admin'], default: 'buyer' }
});

module.exports = mongoose.model('User', userSchema);
