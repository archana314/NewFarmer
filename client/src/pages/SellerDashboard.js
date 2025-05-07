// src/pages/SellerDashboard.js
import React, { useState } from 'react';
const sellerId = 'SELLER123'
const SellerDashboard = () => {
    const [productName, setProductName] = useState('');
    const [pricePerKg, setPricePerKg] = useState('');
    const [quantity, setQuantity] = useState('');
    //const [sellerId, setSellerId] = useState('SELLER123'); // static for now
    const [successMessage, setSuccessMessage] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();
    
        // Simulate product addition
        console.log({
            productName,
            pricePerKg,
            quantity,
            sellerId,
        });

        // Clear form and show success message
        setProductName('');
        setPricePerKg('');
        setQuantity('');
        setSuccessMessage('✅ Product added successfully!');

        // Optionally, hide the message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="dashboard">
            <h2>Seller Dashboard</h2>
            <form onSubmit={handleAddProduct}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price per Kg"
                    value={pricePerKg}
                    onChange={(e) => setPricePerKg(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Quantity (Kg)"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <input
                    type="text"
                    value={sellerId}
                    readOnly
                />
                <button type="submit">Add Product</button>
            </form>
            {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
        </div>
    );
};

export default SellerDashboard;
