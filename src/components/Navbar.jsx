// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <Link to="/" className="text-xl font-bold hover:text-gray-200">Green Campus</Link>
                <Link to="/plant-tree" className="hover:text-gray-200">Plant a Tree</Link>
                <Link to="/track-progress" className="hover:text-gray-200">Track Progress</Link>
                <Link to="/profile" className="hover:text-gray-200">Profile</Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/login" className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200">Login</Link>
                <Link to="/signup" className="bg-green-500 px-4 py-2 rounded hover:bg-green-400">Signup</Link>
            </div>
        </nav>
    );
};

export default Navbar;