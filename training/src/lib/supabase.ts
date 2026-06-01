import { createClient } from '@supabase/supabase-js';

// Strip any trailing path (e.g. /rest/v1/) — the client needs the bare origin
function normalizeUrl(url: string): string {
  try {
    const { origin } = new URL(url);
    return origin;
  } catch {
    return url;
  }
}

const rawUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const supabaseUrl = normalizeUrl(rawUrl);

if (!rawUrl) {
  console.warn('[WGA] VITE_SUPABASE_URL is not set — set it in .env or Netlify environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
