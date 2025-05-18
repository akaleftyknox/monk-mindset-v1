import 'react-native-url-polyfill/auto';                   // fixes URL class on Hermes
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';      // Supabase JS client

const supabaseUrl  = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnon = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnon, {
  auth: { storage: AsyncStorage },                        // mobile-friendly token store
}); 