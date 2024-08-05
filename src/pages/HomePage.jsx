import React, { useState } from 'react';
import TotalOrders from '../components/TopComponent'
import OrdersChart from '../components/OrdersChart'
import NewOrderForm from '../components/NewOrderForm';
import RecentOrdersTable from '../components/recentOrders';
import DashboardOverview from '../components/dashBoardOverView';
import SearchAndFilter from '../components/SearchFiletr';
import Pagination from '../components/Pagination';
import Notification from '../components/Notifications';
import UserProfile from '../components/userProfile';
import ActivityLog from '../components/ActivityLog';
import OrderDetailsModal from '../components/OrderDetailModel';

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


const HomePage = () => {
  // const totalOrders = 1278;
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(orders.length / 10); // Example pagination logic
  const totalOrders = orders.length;
  const totalSales = '$1234.56'; // Example total sales
  const averageOrderValue = '$50.00'; // Example average order value

  const handleSearch = (query) => {
      setSearchQuery(query);
  };

  const handlePageChange = (page) => {
      setCurrentPage(page);
  };

  const handleOrderClick = (order) => {
      setSelectedOrder(order);
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedOrder(null);
  };

  return (
      <div className="bg-black min-h-screen p-8 space-y-6">
          {/* <NewOrderForm /> */}
          <DashboardOverview
              totalSales={totalSales}
              totalOrders={totalOrders}
              averageOrderValue={averageOrderValue}
          />
          <SearchAndFilter onSearch={handleSearch} />
          <OrdersChart />
          <TotalOrders total={totalOrders} />
          <RecentOrdersTable />
          <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
          />
          <Notification message="Order has been updated successfully!" type="success" />
          <UserProfile user={{ name: 'Admin', email: 'admin@example.com', role: 'Administrator' }} />
          <ActivityLog />
          {selectedOrder && (
              <OrderDetailsModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  order={selectedOrder}
              />
          )}
      </div>
  );
};

export default HomePage