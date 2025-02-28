import { DashboardData } from '../types/dashboard';

export const dashboardData: DashboardData = {
  totalRevenue: {
    value: 12458900,
    change: 12.5,
    trend: 'up',
  },
  totalOrders: {
    value: 1245,
    change: 8.3,
    trend: 'up',
  },
  conversionRate: {
    value: 3.2,
    change: -0.5,
    trend: 'down',
  },
  averageOrderValue: {
    value: 9999,
    change: 4.2,
    trend: 'up',
  },
  regionalData: [
    { state: 'Maharashtra', sales: 3245000, orders: 325 },
    { state: 'Delhi', sales: 2890000, orders: 289 },
    { state: 'Karnataka', sales: 2456000, orders: 245 },
    { state: 'Tamil Nadu', sales: 2123000, orders: 212 },
    { state: 'Gujarat', sales: 1987000, orders: 198 },
  ],
  paymentMethods: [
    { method: 'UPI', percentage: 45, amount: 5606505 },
    { method: 'Cards', percentage: 30, amount: 3737670 },
    { method: 'Net Banking', percentage: 15, amount: 1868835 },
    { method: 'Wallets', percentage: 10, amount: 1245890 },
  ],
  recentOrders: [
    {
      id: 'ORD001',
      customer: 'Priya Sharma',
      amount: 12999,
      status: 'Delivered',
      date: '2024-03-15',
    },
    {
      id: 'ORD002',
      customer: 'Rahul Patel',
      amount: 8499,
      status: 'Processing',
      date: '2024-03-15',
    },
    {
      id: 'ORD003',
      customer: 'Anita Desai',
      amount: 15999,
      status: 'Shipped',
      date: '2024-03-14',
    },
    {
      id: 'ORD004',
      customer: 'Vikram Singh',
      amount: 6999,
      status: 'Delivered',
      date: '2024-03-14',
    },
  ],
};