// src/components/DashboardOverview.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardOverview = ({ totalSales, totalOrders, averageOrderValue }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-white text-xl mb-4">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg">
                    <h3 className="text-gray-400 text-lg">Total Sales</h3>
                    <p className="text-white text-2xl">{totalSales}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                    <h3 className="text-gray-400 text-lg">Total Orders</h3>
                    <p className="text-white text-2xl">{totalOrders}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                    <h3 className="text-gray-400 text-lg">Average Order Value</h3>
                    <p className="text-white text-2xl">{averageOrderValue}</p>
                </div>
            </div>
            <button onClick={() => navigate('/neworder')} className='rounded-lg mt-10 p-2 bg-blue-700 hover:bg-blue-900'>Create new order</button>
        </div>
    );
};

export default DashboardOverview;
