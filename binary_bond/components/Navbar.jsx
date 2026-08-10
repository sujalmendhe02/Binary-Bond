import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '/logo-removebg-preview.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Pricing', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 lg:px-12 py-3.5 flex justify-between items-center shadow-sm">

      {/* Brand Logo & Name */}
      <a href="#home" className="flex items-center gap-3 group no-underline">
        <div className="relative w-15 h-15 flex items-center justify-center overflow-hidden">
          <img
            src={logoImg}
            alt="Binary Bond"
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="font-black text-sm sm:text-base tracking-tight text-gray-900 leading-none">
            BINARY BOND
          </span>

          <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-blue mt-1 leading-none">
            Digital Agency
          </span>
        </div>
      </a>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest text-text-muted font-bold">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-blue transition-colors duration-200">
            {item}
          </a>
        ))}
      </div>

      {/* Right side: Build Your Vision (always visible) + Hamburger (mobile only) */}
      <div className="flex items-center gap-3">

        <a
          href="https://ig.me/m/binary.bond"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-blue hover:bg-blue-700 text-white px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer no-underline shadow-md shadow-blue-500/20"
        >
          Build Your Vision
        </a>

        {/* Hamburger Button - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu - only nav links now */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-md flex flex-col items-center py-6 gap-5">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-widest text-text-muted font-bold hover:text-brand-blue transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}