import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-6 relative shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="md:text-xl sm:text-sm font-bold tracking-wide">
          <Link to="/">Miss Beauty Pageantry</Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><Link to="/" className="hover:text-coral transition-colors">Home</Link></li>
          <li><a href="/#about" className="hover:text-coral transition-colors">About</a></li>
          <li><a href="/#contestants" className="hover:text-coral transition-colors">Contestants</a></li>
          <li><Link to="/vote" className="hover:text-coral transition-colors">Votes</Link></li>
          <li><a href="#footer" className="hover:text-coral transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav Links Dropdown */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-6 space-y-4 shadow-lg border-t border-gray-700">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-coral transition-colors">Home</Link></li>
          <li><a href="/#about" onClick={() => setIsOpen(false)} className="hover:text-coral transition-colors">About</a></li>
          <li><a href="/#contestants" onClick={() => setIsOpen(false)} className="hover:text-coral transition-colors">Contestants</a></li>
          <li><Link to="/vote" onClick={() => setIsOpen(false)} className="hover:text-coral transition-colors">Votes</Link></li>
          <li><a href="#footer" onClick={() => setIsOpen(false)} className="hover:text-coral transition-colors">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Header;