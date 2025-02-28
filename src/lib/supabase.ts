import { createClient } from '@supabase/supabase-js';
import { dashboardData } from '../data/mockData';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client that returns mock data
const mockClient = {
  from: () => ({
    select: () => ({
      order: () => ({
        limit: () => Promise.resolve({ data: [], error: null }),
        ascending: () => Promise.resolve({ data: [], error: null }),
        descending: () => Promise.resolve({ data: [], error: null })
      }),
      ascending: () => Promise.resolve({ data: [], error: null }),
      descending: () => Promise.resolve({ data: [], error: null })
    })
  })
};

// Validate environment variables and create appropriate client
const createSupabaseClient = () => {
  if (!supabaseUrl || supabaseUrl === 'your_project_url' || 
      !supabaseAnonKey || supabaseAnonKey === 'your_anon_key') {
    console.warn('Supabase credentials not properly configured, using mock data');
    return mockClient;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();