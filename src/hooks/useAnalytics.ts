import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { DashboardData } from '../types/dashboard';
import { dashboardData as mockData } from '../data/mockData';

export function useAnalytics() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [metricsRes, regionalRes, paymentsRes, ordersRes] = await Promise.all([
          supabase.from('metrics').select('*').order('created_at', { ascending: false }),
          supabase.from('regional_data').select('*').order('sales', { ascending: false }),
          supabase.from('payment_methods').select('*').order('percentage', { ascending: false }),
          supabase.from('orders').select('*').order('order_date', { ascending: false }).limit(10),
        ]);

        if (metricsRes.error) throw new Error(`Metrics error: ${metricsRes.error.message}`);
        if (regionalRes.error) throw new Error(`Regional error: ${regionalRes.error.message}`);
        if (paymentsRes.error) throw new Error(`Payments error: ${paymentsRes.error.message}`);
        if (ordersRes.error) throw new Error(`Orders error: ${ordersRes.error.message}`);

        // If no data is returned, use mock data for development
        if (!metricsRes.data?.length) {
          console.warn('No data found in Supabase, using mock data');
          setData(mockData);
          return;
        }

        const dashboardData: DashboardData = {
          totalRevenue: {
            value: metricsRes.data.find(m => m.name === 'Total Revenue')?.value || 0,
            change: metricsRes.data.find(m => m.name === 'Total Revenue')?.change || 0,
            trend: (metricsRes.data.find(m => m.name === 'Total Revenue')?.trend || 'up') as 'up' | 'down',
          },
          totalOrders: {
            value: metricsRes.data.find(m => m.name === 'Total Orders')?.value || 0,
            change: metricsRes.data.find(m => m.name === 'Total Orders')?.change || 0,
            trend: (metricsRes.data.find(m => m.name === 'Total Orders')?.trend || 'up') as 'up' | 'down',
          },
          conversionRate: {
            value: metricsRes.data.find(m => m.name === 'Conversion Rate')?.value || 0,
            change: metricsRes.data.find(m => m.name === 'Conversion Rate')?.change || 0,
            trend: (metricsRes.data.find(m => m.name === 'Conversion Rate')?.trend || 'up') as 'up' | 'down',
          },
          averageOrderValue: {
            value: metricsRes.data.find(m => m.name === 'Average Order Value')?.value || 0,
            change: metricsRes.data.find(m => m.name === 'Average Order Value')?.change || 0,
            trend: (metricsRes.data.find(m => m.name === 'Average Order Value')?.trend || 'up') as 'up' | 'down',
          },
          regionalData: regionalRes.data?.map(item => ({
            state: item.state,
            sales: Number(item.sales),
            orders: Number(item.orders),
          })) || [],
          paymentMethods: paymentsRes.data?.map(item => ({
            method: item.method,
            percentage: Number(item.percentage),
            amount: Number(item.amount),
          })) || [],
          recentOrders: ordersRes.data?.map(order => ({
            id: order.order_id,
            customer: order.customer,
            amount: Number(order.amount),
            status: order.status,
            date: order.order_date,
          })) || [],
        };

        setData(dashboardData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
        // Fallback to mock data in case of error
        setData(mockData);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}