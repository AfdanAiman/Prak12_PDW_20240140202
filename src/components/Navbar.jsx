import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to:'/', label:'Home' },
  { to:'/services', label:'Services' },
  { to:'/work', label:'Work' },
  { to:'/about', label:'About' },
  { to:'/contact', label:'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 bg-void/95 backdrop-blur-2xl border-b border-border' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 bg-fire rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300" />
            <span className="relative text-white font-display font-black text-base z-10">N</span>
          </div>
          <span className="font-display font-black text-xl text-text tracking-tight">
            nex<span className="text-fire">ora</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center">
          {links.map(link => (
            <li key={link.to}>
              <Link to={link.to} className={`relative px-4 py-2 text-sm font-body font-medium transition-all duration-200 group ${
                location.pathname === link.to ? 'text-fire' : 'text-text-dim hover:text-text'
              }`}>
                {link.label}
                <span className={`absolute bottom-0 left-4 right-4 h-px bg-fire transition-transform origin-left duration-300 ${
                  location.pathname === link.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="btn-fire relative px-6 py-2.5 text-white font-display font-bold text-sm rounded-lg overflow-hidden">
            <span className="relative z-10">Start a Project →</span>
          </Link>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 space-y-1.5">
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-6 py-6 bg-deep border-t border-border space-y-1">
          {links.map(link => (
            <Link key={link.to} to={link.to} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              location.pathname === link.to ? 'text-fire bg-fire/10' : 'text-text-dim hover:text-text hover:bg-card'
            }`}>{link.label}</Link>
          ))}
          <Link to="/contact" className="btn-fire block mt-4 px-4 py-3 text-white text-sm font-bold rounded-lg text-center relative overflow-hidden">
            <span className="relative z-10">Start a Project →</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
