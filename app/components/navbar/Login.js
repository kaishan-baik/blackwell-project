'use client';
import { useState } from 'react';

import Link from 'next/link';
export default function Login() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Show dropdown on mouse enter
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  // Hide dropdown on mouse leave
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center">
      <Link
        href="/register"
        className="bg-gradient-to-b from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-3xl mr-4 transition duration-300"
      >
        REGISTER NOW
      </Link>

      {/* User Profile / Login Dropdown */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center justify-center w-10 h-10 border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 text-gray-600 transition-colors duration-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <Link
              href="/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
