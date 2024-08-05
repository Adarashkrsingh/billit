// src/components/RecentOrdersTable.jsx
import React from 'react';

// Sample data
const orders = [
    { id: 1, payer: 'Aarav Patel', amount: '$120.00', date: '2024-08-01', status: 'Paid' },
    { id: 2, payer: 'Ishita Sharma', amount: '$85.50', date: '2024-08-02', status: 'Pending' },
    { id: 3, payer: 'Rohan Kumar', amount: '$45.75', date: '2024-08-03', status: 'Paid' },
    { id: 4, payer: 'Ananya Gupta', amount: '$200.00', date: '2024-08-04', status: 'Overdue' },
    { id: 5, payer: 'Vivaan Singh', amount: '$78.25', date: '2024-08-05', status: 'Paid' },
    { id: 6, payer: 'Diya Mehta', amount: '$92.00', date: '2024-08-06', status: 'Pending' },
    { id: 7, payer: 'Aditya Joshi', amount: '$56.40', date: '2024-08-07', status: 'Paid' },
    { id: 8, payer: 'Saanvi Reddy', amount: '$310.90', date: '2024-08-08', status: 'Overdue' },
    { id: 9, payer: 'Kabir Verma', amount: '$99.99', date: '2024-08-09', status: 'Paid' },
    { id: 10, payer: 'Kriti Agarwal', amount: '$135.60', date: '2024-08-10', status: 'Pending' },
    { id: 11, payer: 'Arjun Nair', amount: '$77.30', date: '2024-08-11', status: 'Paid' },
    { id: 12, payer: 'Mira Singh', amount: '$120.50', date: '2024-08-12', status: 'Overdue' },
    { id: 13, payer: 'Rajesh Rao', amount: '$65.85', date: '2024-08-13', status: 'Paid' },
    { id: 14, payer: 'Neha Sinha', amount: '$110.00', date: '2024-08-14', status: 'Pending' },
    { id: 15, payer: 'Arnav Shah', amount: '$95.20', date: '2024-08-15', status: 'Paid' },
    { id: 16, payer: 'Tanvi Kapoor', amount: '$150.00', date: '2024-08-16', status: 'Overdue' },
    { id: 17, payer: 'Ravi Desai', amount: '$87.40', date: '2024-08-17', status: 'Paid' },
    { id: 18, payer: 'Pooja Bhatt', amount: '$110.75', date: '2024-08-18', status: 'Pending' },
    { id: 19, payer: 'Karan Kumar', amount: '$99.90', date: '2024-08-19', status: 'Paid' },
    { id: 20, payer: 'Simran Dhillon', amount: '$135.30', date: '2024-08-20', status: 'Overdue' },
];


const RecentOrdersTable = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-white text-xl mb-4">Recent Orders</h2>
            <table className="min-w-full bg-gray-900 text-white border border-gray-700 rounded-lg">
                <thead>
                    <tr className="border-b border-gray-700">
                        <th className="py-2 px-4 text-left">Payer's Name</th>
                        <th className="py-2 px-4 text-left">Amount</th>
                        <th className="py-2 px-4 text-left">Date</th>
                        <th className="py-2 px-4 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-b border-gray-700">
                            <td className="py-2 px-4">{order.payer}</td>
                            <td className="py-2 px-4">{order.amount}</td>
                            <td className="py-2 px-4">{order.date}</td>
                            <td className={`py-2 px-4 ${order.status === 'Paid' ? 'text-green-500' : order.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                                {order.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentOrdersTable;
