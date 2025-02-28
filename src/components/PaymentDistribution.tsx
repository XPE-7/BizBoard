import React from 'react';
import { motion } from 'framer-motion';
import { PaymentMethod } from '../types/dashboard';
import {
  IndianRupeeIcon,
  CreditCardIcon,
  SmartphoneIcon,
  WalletIcon,
} from 'lucide-react';

interface PaymentDistributionProps {
  data: PaymentMethod[];
}

const getIcon = (method: string) => {
  switch (method) {
    case 'UPI':
      return <SmartphoneIcon className="w-5 h-5" />;
    case 'Cards':
      return <CreditCardIcon className="w-5 h-5" />;
    case 'Net Banking':
      return <IndianRupeeIcon className="w-5 h-5" />;
    case 'Wallets':
      return <WalletIcon className="w-5 h-5" />;
    default:
      return null;
  }
};

export const PaymentDistribution: React.FC<PaymentDistributionProps> = ({
  data,
}) => {
  return (
    <motion.div
      className="bg-dark-800 rounded-xl p-6 shadow-lg border border-dark-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-dark-50 font-semibold mb-4">Payment Methods</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div
            key={item.method}
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-2 bg-dark-700 rounded-lg text-indigo-500">
              {getIcon(item.method)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-dark-50">
                  {item.method}
                </span>
                <span className="text-sm text-dark-400">{item.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-dark-700 rounded-full">
                <motion.div
                  className="h-full bg-indigo-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};