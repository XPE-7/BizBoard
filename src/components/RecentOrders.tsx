import React from 'react';
import { motion } from 'framer-motion';
import { PackageIcon } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  amount: number;
  status: string;
  date: string;
}

interface RecentOrdersProps {
  orders: Order[];
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'delivered':
      return 'bg-green-900 text-green-300';
    case 'processing':
      return 'bg-yellow-900 text-yellow-300';
    case 'shipped':
      return 'bg-blue-900 text-blue-300';
    default:
      return 'bg-dark-700 text-dark-300';
  }
};

export const RecentOrders: React.FC<RecentOrdersProps> = ({ orders }) => {
  return (
    <motion.div
      className="bg-dark-800 rounded-xl p-6 shadow-lg border border-dark-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <PackageIcon className="w-5 h-5 text-dark-400" />
        <h3 className="text-dark-50 font-semibold">Recent Orders</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-sm text-dark-400">
              <th className="pb-4">Order ID</th>
              <th className="pb-4">Customer</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Date</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders.map((order, index) => (
              <motion.tr
                key={order.id}
                className="border-t border-dark-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <td className="py-4 text-indigo-400 font-medium">
                  {order.id}
                </td>
                <td className="py-4 text-dark-50">{order.customer}</td>
                <td className="py-4 text-dark-50">
                  ₹{order.amount.toLocaleString('en-IN')}
                </td>
                <td className="py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4 text-dark-400">
                  {new Date(order.date).toLocaleDateString('en-IN')}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};