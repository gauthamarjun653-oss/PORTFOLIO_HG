-- ================================================
-- Supabase SQL Setup for S. Harish Gautham Portfolio
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor)
-- ================================================

-- Queries table: stores public questions
CREATE TABLE IF NOT EXISTS queries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  question TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Visitors table: stores authenticated visitor logs
CREATE TABLE IF NOT EXISTS visitors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  gmail TEXT NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  visited_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

-- Policies: Allow anyone to insert (public-facing)
CREATE POLICY "Anyone can insert queries" ON queries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can insert visitors" ON visitors
  FOR INSERT WITH CHECK (true);

-- Optional: Allow authenticated users to read their own visitor record
CREATE POLICY "Users can read own visitor record" ON visitors
  FOR SELECT USING (auth.jwt() ->> 'email' = gmail);
