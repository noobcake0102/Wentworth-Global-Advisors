import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function WGALogo() {
  return (
    <div className="flex items-center gap-4">
      <svg width="48" height="48" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0, 4)">
          <polygon points="0,0 10,0 21,34 32,6 38,6 27,40 15,40 0,0" fill="#c9a84c"/>
          <polygon points="17,0 27,0 43,40 38,40 27,11 17,0" fill="#e2c47a" opacity="0.6"/>
        </g>
      </svg>
      <div>
        <div className="flex items-center gap-2">
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 400, letterSpacing: '2px', color: '#ffffff' }}>WENTWORTH</span>
        </div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '8px', fontWeight: 400, letterSpacing: '4px', color: '#c9a84c', textTransform: 'uppercase' }}>
          OPERATIONS INSTITUTE
        </div>
      </div>
    </div>
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
