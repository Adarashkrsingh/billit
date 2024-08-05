// src/components/OrderDetailsModal.jsx
import React from 'react';
import { Dialog } from '@headlessui/react';

const OrderDetailsModal = ({ isOpen, onClose, order }) => {
    if (!order) return null;

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex items-center justify-center z-50">
            <Dialog.Panel className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <Dialog.Title className="text-white text-xl mb-4">Order Details</Dialog.Title>
                <div className="space-y-4">
                    <p><strong>Payer:</strong> {order.payer}</p>
                    <p><strong>Amount:</strong> {order.amount}</p>
                    <p><strong>Date:</strong> {order.date}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Description:</strong> {order.description || 'N/A'}</p>
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                >
                    Close
                </button>
            </Dialog.Panel>
        </Dialog>
    );
};

export default OrderDetailsModal;
