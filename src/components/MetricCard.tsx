import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { SalesMetric } from '../types/dashboard';

interface MetricCardProps {
  title: string;
  metric: SalesMetric;
  prefix?: string;
  suffix?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  metric,
  prefix = '₹',
  suffix,
}) => {
  const formatValue = (value: number): string => {
    if (value >= 10000000) {
      return `${(value / 10000000).toFixed(2)}Cr`;
    }
    if (value >= 100000) {
      return `${(value / 100000).toFixed(2)}L`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toLocaleString('en-IN');
  };

  return (
    <motion.div
      className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-dark-700/50 hover:border-indigo-500/30"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-dark-400 text-sm font-medium mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <motion.span
          className="text-2xl font-bold text-dark-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {prefix && <span className="text-dark-400">{prefix}</span>}
          {formatValue(metric.value)}
          {suffix && <span className="text-dark-400">{suffix}</span>}
        </motion.span>
        <motion.span
          className={`flex items-center text-sm ${
            metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
          }`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {metric.trend === 'up' ? (
            <ArrowUpIcon className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 mr-1" />
          )}
          {Math.abs(metric.change)}%
        </motion.span>
      </div>
    </motion.div>
  );
};