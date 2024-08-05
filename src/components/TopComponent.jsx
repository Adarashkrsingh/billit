// src/components/TotalOrders.jsx
import React from 'react';

const TotalOrders = ({ total }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-white text-xl mb-4">Total Orders</h2>
            <p className="text-white text-3xl">{total}</p>
        </div>
    );
};

export default TotalOrders;
