// src/utils/supabaseClient.js

import { createClient } from "@supabase/supabase-js";

// Supabase client utility (Không dùng "use client" ở đây)
// Supabase JS v2 trả về client có phương thức .from(), .channel(), v.v.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in environment"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
