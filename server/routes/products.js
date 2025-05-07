const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add a new product
router.post('/add', async (req, res) => {
    try {
        const { productName, pricePerKg, quantity, sellerId } = req.body;
        const newProduct = new Product({ productName, pricePerKg, quantity, sellerId });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add product' });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find().populate('sellerId', 'name');
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

module.exports = router;
