import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600' : 'text-slate-700 hover:text-slate-900'}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <NavLink to="/" className="text-xl font-bold text-slate-900">Bitxbase</NavLink>
            <span className="text-sm text-slate-500">Events Hub</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={linkClass}>Home</NavLink>
             <NavLink to="/home" className={linkClass}>Explore</NavLink>
            <NavLink to="/practice" className={linkClass}>Event</NavLink>
            <NavLink to="/practice#gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/addevent" className={linkClass}>AddEvent</NavLink>
            
          </nav>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(v => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden duration-300 bg-white/80 backdrop-blur-sm border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
             <NavLink to="/home" onClick={() => setOpen(false)} className={linkClass}>Explore</NavLink>
             <NavLink to="/practice" onClick={() => setOpen(false)} className={linkClass}>Events</NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)} className={linkClass}>Gallery</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About</NavLink>
            <NavLink to="/addevent" onClick={() => setOpen(false)} className={linkClass}>AddEvent</NavLink>
            
          </div>
        </div>
      )}
    </header>
  );
}
