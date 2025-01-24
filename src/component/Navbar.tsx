'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { useGetContactUsQuery } from '../../slices/contactForm';
import { setContact } from '../../slices/contactForm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = usePathname(); // Get the current route


  // Fetch contact data if not already available in the store
  const { data, isLoading, isError } = useGetContactUsQuery();

  // Get the dispatch function and the current contact state from Redux
  const dispatch = useDispatch();

  // Update Redux store when new data is fetched
  useEffect(() => {
    if (data) {
      dispatch(setContact(data)); // Store the fetched data in Redux
    }
  }, [data, dispatch]); 

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
<Link
  href="/"
  className={`font-medium relative ${
    currentPath === '/' ? 'text-[#2A497C] font-bold' : 'text-gray-600 hover:text-gray-800'
  }`}
>
  <span className="relative">
    <span
      className={`${
        currentPath === '/' ? 'underline decoration-2 decoration-[#2A497C]' : ''
      }`}
    >
      H
    </span>
    ome
  </span>
</Link>

<Link
  href="/about"
  className={`font-medium relative ${
    currentPath === '/about' ? 'text-[#2A497C] font-bold' : 'text-gray-600 hover:text-gray-800'
  }`}
>
  <span className="relative">
    <span
      className={`${
        currentPath === '/about' ? 'underline decoration-2 decoration-[#2A497C]' : ''
      }`}
    >
      A
    </span>
    bout
  </span>
</Link>

<Link
  href="/testimonial"
  className={`font-medium relative ${
    currentPath === '/testimonial' ? 'text-[#2A497C] font-bold' : 'text-gray-600 hover:text-gray-800'
  }`}
>
  <span className="relative">
    <span
      className={`${
        currentPath === '/testimonial' ? 'underline decoration-2 decoration-[#2A497C]' : ''
      }`}
    >
      T
    </span>
    estimonial
  </span>
</Link>

<Link
  href="/contact"
  className={`font-medium relative ${
    currentPath === '/contact' ? 'text-[#2A497C] font-bold' : 'text-gray-600 hover:text-gray-800'
  }`}
>
  <span className="relative">
    <span
      className={`${
        currentPath === '/contact' ? 'underline decoration-2 decoration-[#2A497C]' : ''
      }`}
    >
      C
    </span>
    ontact
  </span>
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
        className={`${
          currentPath === '/'
            ? 'text-[#2A497C] font-bold'
            : 'text-gray-600 hover:text-gray-800'
        } block px-3 py-2 font-medium`}
        onClick={() => setIsOpen(false)} // Close the menu on click
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${
          currentPath === '/about'
            ? 'text-[#2A497C] font-bold'
            : 'text-gray-600 hover:text-gray-800'
        } block px-3 py-2 font-medium`}
        onClick={() => setIsOpen(false)} // Close the menu on click
      >
        About
      </Link>
      <Link
        href="/testimonial"
        className={`${
          currentPath === '/testimonial'
            ? 'text-[#2A497C] font-bold'
            : 'text-gray-600 hover:text-gray-800'
        } block px-3 py-2 font-medium`}
        onClick={() => setIsOpen(false)} // Close the menu on click
      >
        Testimonial
      </Link>
      <Link
        href="/contact"
        className={`${
          currentPath === '/contact'
            ? 'text-[#2A497C] font-bold'
            : 'text-gray-600 hover:text-gray-800'
        } block px-3 py-2 font-medium`}
        onClick={() => setIsOpen(false)} // Close the menu on click
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
