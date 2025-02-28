/*
  # Initial Schema Setup for E-commerce Analytics Dashboard

  1. New Tables
    - metrics
      - id (uuid, primary key)
      - name (text)
      - value (numeric)
      - change (numeric)
      - trend (text)
      - created_at (timestamp)
    
    - regional_data
      - id (uuid, primary key)
      - state (text)
      - sales (numeric)
      - orders (integer)
      - created_at (timestamp)
    
    - payment_methods
      - id (uuid, primary key)
      - method (text)
      - percentage (numeric)
      - amount (numeric)
      - created_at (timestamp)
    
    - orders
      - id (uuid, primary key)
      - order_id (text)
      - customer (text)
      - amount (numeric)
      - status (text)
      - order_date (timestamp)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read data
*/

-- Metrics Table
CREATE TABLE IF NOT EXISTS metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  value numeric NOT NULL,
  change numeric NOT NULL,
  trend text NOT NULL CHECK (trend IN ('up', 'down')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read metrics"
  ON metrics FOR SELECT
  TO authenticated
  USING (true);

-- Regional Data Table
CREATE TABLE IF NOT EXISTS regional_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  state text NOT NULL,
  sales numeric NOT NULL,
  orders integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE regional_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read regional data"
  ON regional_data FOR SELECT
  TO authenticated
  USING (true);

-- Payment Methods Table
CREATE TABLE IF NOT EXISTS payment_methods (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  method text NOT NULL,
  percentage numeric NOT NULL,
  amount numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE payment_methods ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read payment methods"
  ON payment_methods FOR SELECT
  TO authenticated
  USING (true);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id text NOT NULL UNIQUE,
  customer text NOT NULL,
  amount numeric NOT NULL,
  status text NOT NULL,
  order_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read orders"
  ON orders FOR SELECT
  TO authenticated
  USING (true);