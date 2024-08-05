// src/components/Notification.jsx
import React from 'react';

const Notification = ({ message, type }) => {
    const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';

    return (
        <div className={`p-4 mb-4 rounded-lg ${bgColor}`}>
            <p className="text-white">{message}</p>
        </div>
    );
};

export default Notification;
