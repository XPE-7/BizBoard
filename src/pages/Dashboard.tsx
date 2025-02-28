import React from 'react';
import { LayoutDashboard, AlertCircle, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MetricCard } from '../components/MetricCard';
import { RegionalSales } from '../components/RegionalSales';
import { PaymentDistribution } from '../components/PaymentDistribution';
import { RecentOrders } from '../components/RecentOrders';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useAnalytics } from '../hooks/useAnalytics';

export function Dashboard() {
  const { data, loading, error } = useAnalytics();
  const navigate = useNavigate();

  if (loading) return <LoadingSpinner />;
  if (error) return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 max-w-md">
        <div className="flex items-center gap-2 text-red-500 mb-2">
          <AlertCircle className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Error</h2>
        </div>
        <p className="text-dark-300">{error}</p>
      </div>
    </div>
  );
  if (!data) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-dark-50">
      {/* Header */}
      <header className="bg-dark-800/50 backdrop-blur-sm border-b border-dark-700/50 sticky top-0 z-10">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-6 h-6 text-indigo-500" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                Analytics Dashboard
              </h1>
            </div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors border border-dark-700/50 hover:border-dark-600/50"
            >
              <LogOut className="w-4 h-4" />
              <span>Exit</span>
            </button>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Metrics Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={itemVariants}
          >
            <MetricCard
              title="Total Revenue"
              metric={data.totalRevenue}
            />
            <MetricCard
              title="Total Orders"
              metric={data.totalOrders}
              prefix=""
              suffix=" orders"
            />
            <MetricCard
              title="Conversion Rate"
              metric={data.conversionRate}
              prefix=""
              suffix="%"
            />
            <MetricCard
              title="Average Order Value"
              metric={data.averageOrderValue}
            />
          </motion.div>

          {/* Charts Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            <RegionalSales data={data.regionalData} />
            <PaymentDistribution data={data.paymentMethods} />
          </motion.div>

          {/* Recent Orders */}
          <motion.div variants={itemVariants}>
            <RecentOrders orders={data.recentOrders} />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}