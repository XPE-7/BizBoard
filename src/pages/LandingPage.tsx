import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, ShoppingBag, CreditCard } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
      title: 'Real-time Analytics',
      description: 'Monitor your business metrics in real-time with our advanced analytics dashboard.',
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-purple-500" />,
      title: 'Order Tracking',
      description: 'Keep track of all orders and their statuses with our comprehensive order management system.',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-blue-500" />,
      title: 'Payment Insights',
      description: 'Analyze payment methods and trends to optimize your payment processing strategy.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-6">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-8 h-8 text-indigo-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
              Analytics Pro
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <motion.section
          className="py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform Your Business with Real-time Analytics
          </motion.h1>
          <motion.p
            className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Get instant insights into your business performance with our powerful analytics dashboard.
            Make data-driven decisions and stay ahead of the competition.
          </motion.p>
          <motion.button
            onClick={() => navigate('/dashboard')}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Dashboard
          </motion.button>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-dark-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 text-center text-dark-400 border-t border-dark-800">
          <p>© 2025 Analytics Pro. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}