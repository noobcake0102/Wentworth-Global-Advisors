import { useState, type FormEvent } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function WGALogo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="52" height="52" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0, 4)">
          <polygon points="0,0 10,0 21,34 32,6 38,6 27,40 15,40 0,0" fill="#c9a84c"/>
          <polygon points="17,0 27,0 43,40 38,40 27,11 17,0" fill="#e2c47a" opacity="0.6"/>
        </g>
      </svg>
      <div className="text-center">
        <div style={{ fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: 400, letterSpacing: '3px', color: '#f0ece6' }}>WENTWORTH</div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '7.5px', fontWeight: 400, letterSpacing: '4px', color: '#c9a84c', textTransform: 'uppercase' }}>OPERATIONS ACADEMY</div>
      </div>
    </div>
  );
}

export function LoginPage() {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? '/dashboard';
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (mode === 'signup') {
      const result = await signUp(email, password, name);
      setLoading(false);
      if (result.error) { setError(result.error); return; }
      setConfirmationSent(true);
    } else {
      const result = await signIn(email, password);
      setLoading(false);
      if (result.error) { setError(result.error); return; }
      navigate(from, { replace: true });
    }
  };

  const inputClass = `w-full bg-surface border border-border-gold rounded px-4 py-3 text-ink text-sm
    placeholder:text-muted/50 focus:outline-none focus:border-gold/60 transition-colors`;

  if (confirmationSent) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm text-center">
          <div className="mb-8 flex justify-center"><WGALogo /></div>
          <div className="bg-card border border-border-gold rounded-lg p-8">
            <div style={{ fontSize: 36, marginBottom: 12 }}>✉️</div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: '#f0ece6', marginBottom: 8 }}>Check your email</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#9ca3af', lineHeight: 1.6 }}>
              We sent a confirmation link to <strong style={{ color: '#c9a84c' }}>{email}</strong>. Click the link to activate your account, then come back to sign in.
            </p>
            <button
              onClick={() => { setConfirmationSent(false); setMode('signin'); }}
              className="mt-6 w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-gold/20 transition-all duration-200"
            >
              Back to Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,168,76,0.06)_0%,transparent_65%)]" />
      </div>

      <div className="w-full max-w-sm relative">
        <div className="mb-10 flex justify-center">
          <Link to="/courses"><WGALogo /></Link>
        </div>

        <div className="bg-card border border-border-gold rounded-lg p-8">
          <h1 className="font-serif text-2xl text-ink mb-1">
            {mode === 'signin' ? 'Sign in' : 'Create account'}
          </h1>
          <p className="text-muted text-sm mb-6">
            {mode === 'signin'
              ? 'Continue your learning journey.'
              : 'Join the Wentworth Operations Academy.'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-sans font-medium tracking-widest uppercase text-muted mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Alex Johnson"
                  required
                  className={inputClass}
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-sans font-medium tracking-widest uppercase text-muted mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-sans font-medium tracking-widest uppercase text-muted mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className={inputClass}
              />
            </div>

            {error && (
              <p className="text-sm text-[#e05c5c] bg-[#e05c5c]/10 border border-[#e05c5c]/30 rounded px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase
                px-6 py-3 rounded hover:bg-gold/20 transition-all duration-200 disabled:opacity-50 mt-2"
            >
              {loading ? 'Please wait…' : mode === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border-gold text-center">
            <p className="text-muted text-sm">
              {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); }}
                className="text-gold hover:text-gold/80 transition-colors"
              >
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>

        <p className="text-center text-muted/40 text-xs mt-6">
          © {new Date().getFullYear()} Wentworth Global Advisors
        </p>
      </div>
    </div>
  );
}
