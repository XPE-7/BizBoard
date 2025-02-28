export interface SalesMetric {
  value: number;
  change: number;
  trend: 'up' | 'down';
}

export interface RegionalData {
  state: string;
  sales: number;
  orders: number;
}

export interface PaymentMethod {
  method: string;
  percentage: number;
  amount: number;
}

export interface DashboardData {
  totalRevenue: SalesMetric;
  totalOrders: SalesMetric;
  conversionRate: SalesMetric;
  averageOrderValue: SalesMetric;
  regionalData: RegionalData[];
  paymentMethods: PaymentMethod[];
  recentOrders: Array<{
    id: string;
    customer: string;
    amount: number;
    status: string;
    date: string;
  }>;
}