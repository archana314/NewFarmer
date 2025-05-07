const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // To load environment variables from .env file

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

const app = express();
const port = 5000;

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Routes
app.use('/api/auth', userRoutes);  // Routes for user authentication
app.use('/api/products', productRoutes);  // Routes for products

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(port, () => console.log(`Server running on port ${port}`));
    })
    .catch((err) => {
        console.error('MongoDB connection failed:', err);
    });
