// src/pages/AdminDashboard.js
import React from 'react';

const AdminDashboard = () => {
    const products = [
        { id: 1, name: 'Tomato', price: 20, quantity: 10 },
        { id: 2, name: 'Potato', price: 15, quantity: 5 },
    ];

    return (
        <div className="dashboard">
            <h2>Admin Dashboard</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ₹{product.price} per Kg</p>
                        <p>Available Quantity: {product.quantity} Kg</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
