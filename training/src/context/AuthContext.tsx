import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import type { Session, User } from '@supabase/supabase-js';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  avatarColor: string;
  joinedAt: string;
  title?: string;
  organization?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, name: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<Pick<AuthUser, 'name' | 'title' | 'organization' | 'avatarColor'>>) => Promise<void>;
}

const AVATAR_COLORS = [
  '#c9a84c', '#6b8ed1', '#4caf82', '#9b6bbf', '#e05c5c', '#e8a84c',
];

function randomAvatarColor() {
  return AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
}

function buildAuthUser(sbUser: User): AuthUser {
  const m = sbUser.user_metadata ?? {};
  return {
    id: sbUser.id,
    email: sbUser.email ?? '',
    name: (m.name as string) ?? sbUser.email?.split('@')[0] ?? 'Learner',
    avatarColor: (m.avatar_color as string) ?? randomAvatarColor(),
    joinedAt: (m.joined_at as string) ?? sbUser.created_at,
    title: m.title as string | undefined,
    organization: m.organization as string | undefined,
  };
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const s = data.session;
      setSession(s);
      setUser(s?.user ? buildAuthUser(s.user) : null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ? buildAuthUser(s.user) : null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return { error: null };
  }, []);

  const signUp = useCallback(async (email: string, password: string, name: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          avatar_color: randomAvatarColor(),
          joined_at: new Date().toISOString(),
        },
      },
    });
    if (error) return { error: error.message };
    return { error: null };
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  const updateProfile = useCallback(async (data: Partial<Pick<AuthUser, 'name' | 'title' | 'organization' | 'avatarColor'>>) => {
    const metaUpdate: Record<string, unknown> = {};
    if (data.name !== undefined) metaUpdate.name = data.name;
    if (data.title !== undefined) metaUpdate.title = data.title;
    if (data.organization !== undefined) metaUpdate.organization = data.organization;
    if (data.avatarColor !== undefined) metaUpdate.avatar_color = data.avatarColor;

    const { data: updated, error } = await supabase.auth.updateUser({ data: metaUpdate });
    if (!error && updated.user) setUser(buildAuthUser(updated.user));
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
