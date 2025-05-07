// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');  // You can set the role manually here for now or use some logic from backend

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check role and navigate accordingly
        if (role === 'seller') {
            navigate('/seller-dashboard');  // Navigate to seller dashboard
        } else if (role === 'buyer') {
            navigate('/buyer-dashboard');  // Navigate to buyer dashboard
        } else {
            alert('Invalid role or login details');
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">Select Role</option>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </select>
                <button type="submit">Login</button>
            </form>
            <p><center>Don't have an account? <a href="/signup">Sign up</a></center></p>
        </div>
    );
};

export default Login;
