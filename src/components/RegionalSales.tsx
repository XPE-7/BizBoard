import React from 'react';
import { motion } from 'framer-motion';
import { RegionalData } from '../types/dashboard';

interface RegionalSalesProps {
  data: RegionalData[];
}

export const RegionalSales: React.FC<RegionalSalesProps> = ({ data }) => {
  const maxSales = Math.max(...data.map((item) => item.sales));

  return (
    <motion.div
      className="bg-dark-800 rounded-xl p-6 shadow-lg border border-dark-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-dark-50 font-semibold mb-4">Regional Performance</h3>
      <div className="space-y-4">
        {data.map((region, index) => (
          <div key={region.state}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-dark-300">{region.state}</span>
              <span className="font-medium text-dark-50">
                ₹{(region.sales / 100000).toFixed(2)}L
              </span>
            </div>
            <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-indigo-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(region.sales / maxSales) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};