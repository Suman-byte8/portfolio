import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['HOME', 'ABOUT', 'WORKS', 'CONTACT'];

  return (
    <header className="w-full  text-white shadow">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo + Brand */}
        <Link to="/home" className="flex items-center gap-3">
          <div className="w-6 h-6 text-white">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_330)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_330">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">Suman's Portfolio</h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 font-semibold text-md">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="relative group hover:text-xl transition-all duration-300"
            >
              {link}
              <div className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-6 pb-6 animate-slide-down">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white font-medium hover:text-gray-300 transition-all"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
