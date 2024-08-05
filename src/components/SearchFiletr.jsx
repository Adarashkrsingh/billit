// src/components/SearchAndFilter.jsx
import React, { useState } from 'react';

const SearchAndFilter = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
            <h2 className="text-white text-xl mb-4">Search and Filter Orders</h2>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search by payer name or amount"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                />
                <button
                    onClick={handleSearch}
                    className="ml-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchAndFilter;
