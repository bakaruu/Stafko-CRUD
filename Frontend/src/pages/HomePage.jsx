import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogOff = () => {
        // Delete the JWT token here
        localStorage.removeItem('token');
        // Redirect to the login page
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple home page.</p>
            <button onClick={handleLogOff}>Log Off</button>
        </div>
    );
};

export default HomePage;