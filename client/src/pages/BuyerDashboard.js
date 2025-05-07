// src/pages/BuyerDashboard.js
import React, { useState } from 'react';

const BuyerDashboard = () => {
    const products = [
        { id: 1, name: 'Tomato', price: 20, quantity: 10 },
        { id: 2, name: 'Potato', price: 15, quantity: 5 },
    ];
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleBuyNow = () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        alert(`Total price: ${total}`);
    };

    return (
        <div className="dashboard">
            <h2>Buyer Dashboard</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ₹{product.price} per Kg</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div className="cart">
                <h3>Cart</h3>
                {cart.map((product, index) => (
                    <div key={index} className="cart-item">
                        <p>{product.name} - {product.quantity} Kg</p>
                    </div>
                ))}
                <button onClick={handleBuyNow}>Buy Now</button>
            </div>
        </div>
    );
};

export default BuyerDashboard;
