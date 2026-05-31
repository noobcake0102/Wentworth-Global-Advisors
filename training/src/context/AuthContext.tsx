/**
 * Mock auth context — mirrors the Supabase Auth API shape.
 * To swap in real Supabase auth, replace the localStorage operations
 * in signIn / signUp / signOut / updateProfile with the equivalent
 * supabase.auth.* calls and set `user` from supabase.auth.getUser().
 */
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

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
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, name: string) => Promise<{ error: string | null }>;
  signOut: () => void;
  updateProfile: (data: Partial<Pick<AuthUser, 'name' | 'title' | 'organization' | 'avatarColor'>>) => void;
}

const STORAGE_KEY = 'wga-auth';
const USERS_KEY = 'wga-users';

const AVATAR_COLORS = [
  '#c9a84c', '#6b8ed1', '#4caf82', '#9b6bbf', '#e05c5c', '#e8a84c',
];

function loadUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function loadUsers(): Record<string, { password: string; user: AuthUser }> {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveUser(user: AuthUser | null) {
  if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  else localStorage.removeItem(STORAGE_KEY);
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(loadUser);

  const signIn = useCallback(async (email: string, password: string) => {
    const users = loadUsers();
    const entry = users[email.toLowerCase()];
    if (!entry || entry.password !== password) {
      return { error: 'Invalid email or password.' };
    }
    saveUser(entry.user);
    setUser(entry.user);
    return { error: null };
  }, []);

  const signUp = useCallback(async (email: string, password: string, name: string) => {
    const users = loadUsers();
    if (users[email.toLowerCase()]) {
      return { error: 'An account with this email already exists.' };
    }
    const newUser: AuthUser = {
      id: crypto.randomUUID(),
      email: email.toLowerCase(),
      name: name.trim(),
      avatarColor: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)],
      joinedAt: new Date().toISOString(),
    };
    users[email.toLowerCase()] = { password, user: newUser };
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    saveUser(newUser);
    setUser(newUser);
    return { error: null };
  }, []);

  const signOut = useCallback(() => {
    saveUser(null);
    setUser(null);
  }, []);

  const updateProfile = useCallback((data: Partial<Pick<AuthUser, 'name' | 'title' | 'organization' | 'avatarColor'>>) => {
    setUser(prev => {
      if (!prev) return prev;
      const updated = { ...prev, ...data };
      const users = loadUsers();
      if (users[prev.email]) users[prev.email].user = updated;
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      saveUser(updated);
      return updated;
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
