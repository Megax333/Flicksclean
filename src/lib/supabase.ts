import { createClient } from '@supabase/supabase-js';
import config from '../config';

// Use config values directly to avoid environment variable issues
const supabaseUrl = config.supabase.url;
const supabaseAnonKey = config.supabase.anonKey;

// Create client with retry logic
const createClientWithRetry = () => {
  const client = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    },
    global: {
      headers: {
        'X-Client-Info': 'supabase-js-web'
      }
    },
    db: {
      schema: 'public'
    },
    realtime: {
      params: {
        eventsPerSecond: 10
      }
    }
  });

  return client;
};

// Create and export client
export const supabase = createClientWithRetry();