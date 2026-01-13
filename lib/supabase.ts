import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bspkzmkopbkovtauwicc.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_AQdrZi9InkpfHMriPe96kw_MMzXWSK9'

// Not: Production'da .env.local dosyasından okumalı
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

