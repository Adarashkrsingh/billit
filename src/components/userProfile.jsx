// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-white text-xl mb-4">User Profile</h2>
            <div className="space-y-4">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
            </div>
        </div>
    );
};

export default UserProfile;
