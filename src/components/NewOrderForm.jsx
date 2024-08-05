// src/components/NewOrderForm.jsx
import React, { useState } from 'react';

const NewOrderForm = () => {
    const [order, setOrder] = useState({ item: '', quantity: 0, price: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle order submission logic here
        console.log('Order Submitted:', order);
    };

    return (
        <div className='w-full h-screen flex justify-center items-center'>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-white text-xl mb-4">Add New Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-300 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        // value={'name'}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-300 mb-1">Item</label>
                    <input
                        type="text"
                        name="item"
                        value={order.item}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-300 mb-1">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={order.quantity}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-300 mb-1">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={order.price}
                        onChange={handleChange}
                        className="w-full p-2 rounded-lg border border-gray-600 bg-gray-900 text-white"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
        </div>
    );
};

export default NewOrderForm;
