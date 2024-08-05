// src/components/ActivityLog.jsx
import React from 'react';

const activities = [
    { id: 1, timestamp: '2024-08-01 14:32', description: 'Order #123 was created' },
    { id: 2, timestamp: '2024-08-02 09:15', description: 'Order #124 was paid' },
    { id: 3, timestamp: '2024-08-03 16:45', description: 'Order #125 status updated to overdue' },
];

const ActivityLog = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-white text-xl mb-4">Activity Log</h2>
            <ul className="space-y-2">
                {activities.map(activity => (
                    <li key={activity.id} className="bg-gray-900 p-2 rounded-lg">
                        <p className="text-gray-400 text-sm">{activity.timestamp}</p>
                        <p className="text-white">{activity.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityLog;
