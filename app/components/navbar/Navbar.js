'use client';
import { useState } from 'react';
import Image from 'next/image';
import Timer from './Timer';
import Login from './Login';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="w-full h-20 text-white flex items-center justify-between px-8 md:px-12 font-thin font-stretch-condensed pt-2 fixed z-40"
        style={{ backgroundColor: '#112A4D' }}
      >
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-8">
            <Image
              src="/images/blackwell-logo.png"
              alt="Blackwell logo"
              width={100}
              height={60}
            />
          </div>
        </div>

        {/* Desktop View - Show Timer and Login directly */}
        <div className="hidden md:flex md:items-center md:justify-end md:space-x-8 w-full">
          <Timer />
          <Login />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // Close (X) icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu - Slides down when open */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-20 left-0 right-0 z-30 p-4 flex flex-col items-center space-y-6 shadow-lg"
          style={{ backgroundColor: '#112A4D' }}
        >
          <div className="w-full">
            <Timer />
          </div>
          <div className="w-full">
            <Login />
          </div>
        </div>
      )}
    </>
  );
}
