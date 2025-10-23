import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Ikon (MenuIcon dan CloseIcon) tidak berubah
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'PRODUK', path: '/produk' },
    { label: 'BERITA', path: '/berita' },
    { label: 'LOWONGAN', path: '/lowongan' },
    { label: 'INFORMASI', path: '/informasi' },
    { label: 'LAPORAN', path: '/laporan' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src="banner3.jpg" alt="Bank AKP Logo" className="h-10" />
        </Link>

        {/* Navigasi Desktop */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              // GANTI hover:text-blue-700 -> hover:text-teal-700
              className="text-gray-600 hover:text-teal-700 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Tombol Menu Seluler */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Menu Seluler */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.label}
                // GANTI hover:text-blue-700 -> hover:text-teal-700
                className="block text-gray-600 hover:text-teal-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;