'use client';
import { useState } from 'react';
import Link from 'next/link';
import CustomButton from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="bg-white border-b border-[#aeaeae] shadow-sm relative">
  <div className="container max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-xl font-bold" style={{ color: '#2A497C' }}>
          Global Learner Den
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center text-[#5F5B53]">
        <Link href="/" className="text-gray-600 hover:text-gray-800 font-medium">
          Home
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-800 font-medium">
          About
        </Link>
        <Link href="/testimonial" className="text-gray-600 hover:text-gray-800 font-medium">
          Testimonial
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-800 font-medium">
          Contact
        </Link>
        <div>
          <button className='px-6 py-2 font-medium rounded-3xl transition duration-300 ease-in-out bg-[#2A497C] text-[#fff]'>Book Demo</button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu Dropdown */}
    {isOpen && (
      <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 md:hidden">
        <div className="space-y-2 py-2">
          <Link
            href="/"
            className="block text-gray-600 hover:text-gray-800 px-3 py-2 font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-600 hover:text-gray-800 px-3 py-2 font-medium"
          >
            About
          </Link>
          <Link
            href="/testimonial"
            className="block text-gray-600 hover:text-gray-800 px-3 py-2 font-medium"
          >
            Testimonial
          </Link>
          <Link
            href="/contact"
            className="block text-gray-600 hover:text-gray-800 px-3 py-2 font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    )}
  </div>
</nav>

  );
}

