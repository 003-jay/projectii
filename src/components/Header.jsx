import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    const updatePendingCount = () => {
      const pending = JSON.parse(localStorage.getItem('pendingEvents') || '[]');
      setPendingCount(pending.length);
    };

    updatePendingCount();
    
    // Listen for storage changes
    window.addEventListener('storage', updatePendingCount);
    
    // Check every 5 seconds for updates
    const interval = setInterval(updatePendingCount, 5000);
    
    return () => {
      window.removeEventListener('storage', updatePendingCount);
      clearInterval(interval);
    };
  }, []);

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive
        ? 'text-sky-600'
        : 'text-slate-700 hover:text-sky-600 hover:bg-slate-100/60'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <NavLink to="/" className="text-2xl font-extrabold text-slate-900">
              Bitxbase
            </NavLink>
            <span className="hidden sm:inline text-sm text-slate-500 font-medium">
              Events Hub
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/home" className={linkClass}>
              Explore
            </NavLink>
            <NavLink to="/practice" className={linkClass}>
              Events
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/addevent" className={linkClass}>
              Add Event
            </NavLink>
            <NavLink to="/pendingevents" className={`${linkClass} relative`}>
              Admin Panel
              {pendingCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {pendingCount}
                </span>
              )}
            </NavLink>
            <NavLink to="/manageevents" className={linkClass}>
              Manage Events
            </NavLink>
          </nav>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu (fixed width + clean look) */}
      {open && (
        <div className="md:hidden w-full absolute left-0 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-lg animate-fadeIn z-50">
          <div className="flex flex-col items-center py-2 space-y-1">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
              Home
            </NavLink>
            <NavLink
              to="/home"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Explore
            </NavLink>
            <NavLink
              to="/practice"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Events
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              About
            </NavLink>
            <NavLink
              to="/addevent"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Add Event
            </NavLink>
            <NavLink
              to="/pendingevents"
              onClick={() => setOpen(false)}
              className={`${linkClass} relative`}
            >
              Admin Panel
              {pendingCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {pendingCount}
                </span>
              )}
            </NavLink>
            <NavLink
              to="/manageevents"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Manage Events
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
