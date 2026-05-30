import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function WGALogo() {
  return (
    <svg width="220" height="48" viewBox="0 0 340 72" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 8)">
        <polygon points="0,0 13,0 27,42 41,8 48,8 35,50 19,50 0,0" fill="#c9a84c"/>
        <polygon points="22,0 35,0 56,50 49,50 35,14 22,0" fill="#e2c47a" opacity="0.6"/>
        <line x1="70" y1="0" x2="70" y2="50" stroke="#c9a84c" strokeWidth="0.75" opacity="0.4"/>
        <text x="82" y="32" fontFamily="Georgia, serif" fontSize="28" fontWeight="400" letterSpacing="3" fill="#ffffff">WENTWORTH</text>
        <text x="83" y="48" fontFamily="Helvetica, Arial, sans-serif" fontSize="9.5" fontWeight="300" letterSpacing="5.5" fill="#c9a84c">GLOBAL ADVISORS</text>
      </g>
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLink = (to: string, label: string) => {
    const active = location.pathname === to || location.pathname.startsWith(to + '/');
    return (
      <Link
        to={to}
        className={`font-sans text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-sm transition-all duration-200
          ${active ? 'text-gold' : 'text-muted hover:text-ink'}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-400
      ${scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-border-gold shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center gap-6">
        <Link to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          <WGALogo />
        </Link>
        <div className="ml-auto flex items-center gap-1">
          {navLink('/courses', 'Courses')}
          {navLink('/dashboard', 'Dashboard')}
        </div>
      </div>
    </header>
  );
}
