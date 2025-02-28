/*
  # Add E-commerce Sample Dataset

  1. Sample Data
    - Updates metrics with real e-commerce data
    - Adds regional sales data across India
    - Updates payment method statistics
    - Adds more detailed order information
*/

-- Update Metrics with more realistic e-commerce data
INSERT INTO metrics (name, value, change, trend) VALUES
  ('Total Revenue', 28567400, 15.8, 'up'),
  ('Total Orders', 3456, 12.4, 'up'),
  ('Conversion Rate', 4.8, 0.8, 'up'),
  ('Average Order Value', 8266, 2.9, 'up');

-- Update Regional Data with more comprehensive coverage
INSERT INTO regional_data (state, sales, orders) VALUES
  ('Maharashtra', 6789000, 845),
  ('Delhi NCR', 5678000, 723),
  ('Karnataka', 4567000, 589),
  ('Tamil Nadu', 4123000, 534),
  ('Gujarat', 3987000, 498),
  ('West Bengal', 3456000, 432),
  ('Telangana', 3234000, 398),
  ('Kerala', 2987000, 367);

-- Update Payment Methods with current market trends
INSERT INTO payment_methods (method, percentage, amount) VALUES
  ('UPI', 52, 14855048),
  ('Cards', 28, 7998872),
  ('Net Banking', 12, 3428088),
  ('Wallets', 8, 2285392);

-- Add more detailed order data
INSERT INTO orders (order_id, customer, amount, status, order_date) VALUES
  ('ORD7845', 'Arjun Mehta', 24999, 'Delivered', NOW() - INTERVAL '1 hour'),
  ('ORD7844', 'Sneha Reddy', 18499, 'Processing', NOW() - INTERVAL '2 hours'),
  ('ORD7843', 'Raj Malhotra', 32999, 'Shipped', NOW() - INTERVAL '4 hours'),
  ('ORD7842', 'Priya Sharma', 15999, 'Delivered', NOW() - INTERVAL '6 hours'),
  ('ORD7841', 'Karthik Iyer', 9999, 'Processing', NOW() - INTERVAL '8 hours'),
  ('ORD7840', 'Zara Khan', 27999, 'Shipped', NOW() - INTERVAL '10 hours'),
  ('ORD7839', 'Aisha Patel', 21499, 'Delivered', NOW() - INTERVAL '12 hours'),
  ('ORD7838', 'Vikram Singh', 12999, 'Processing', NOW() - INTERVAL '14 hours'),
  ('ORD7837', 'Neha Gupta', 36999, 'Shipped', NOW() - INTERVAL '16 hours'),
  ('ORD7836', 'Rohan Kumar', 8499, 'Delivered', NOW() - INTERVAL '18 hours');