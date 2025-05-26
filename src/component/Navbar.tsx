'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { useGetContactUsQuery } from '../../slices/contactForm';
import { setContact } from '../../slices/contactForm';
const profileIcon = '/images/profile_icon.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false)
  const currentPath = usePathname(); // Get the current route
  const router = useRouter()

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
  const logOut = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('login');
      router.push('/');
    }
  }
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const loginStatus = localStorage.getItem('login');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  if (isLoggedIn === null) return null;
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
              className={`font-medium relative ${currentPath === '/' ? 'text-[#2A497C] font-bold' : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              <span className="relative">
                <span
                  className={`${currentPath === '/' ? 'underline decoration-2 decoration-[#2A497C]' : ''
                    }`}
                >
                  H
                </span>
                ome
              </span>
            </Link>

            <Link
              href="/about"
              className={`font-medium relative ${currentPath === '/about' ? 'text-[#2A497C] font-bold' : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              <span className="relative">
                <span
                  className={`${currentPath === '/about' ? 'underline decoration-2 decoration-[#2A497C]' : ''
                    }`}
                >
                  A
                </span>
                bout
              </span>
            </Link>

            <Link
              href="/testimonial"
              className={`font-medium relative ${currentPath === '/testimonial' ? 'text-[#2A497C] font-bold' : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              <span className="relative">
                <span
                  className={`${currentPath === '/testimonial' ? 'underline decoration-2 decoration-[#2A497C]' : ''
                    }`}
                >
                  T
                </span>
                estimonial
              </span>
            </Link>
            <Link
              href="/quiz"
              className={`font-medium relative ${currentPath === '/contact' ? 'text-[#2A497C] font-bold' : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              <span className="relative">
                <span
                  className={`${currentPath === '/quiz' ? 'underline decoration-2 decoration-[#2A497C]' : ''
                    }`}
                >
                  Q
                </span>
                uiz
              </span>
            </Link>
            <Link
              href="/contact"
              className={`font-medium relative ${currentPath === '/contact' ? 'text-[#2A497C] font-bold' : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              <span className="relative">
                <span
                  className={`${currentPath === '/contact' ? 'underline decoration-2 decoration-[#2A497C]' : ''
                    }`}
                >
                  C
                </span>
                ontact
              </span>
            </Link>
            {isLoggedIn ? (
              <div className="relative">
                {/* Trigger */}
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => setUserDropdown(!userDropdown)}
                >
                  <img className="w-[50px] h-[50px]" src={profileIcon} alt="profileIcon" />
                  <div>
                    <span className="text-[#2E2E48] font-semibold">Ali Raza</span>
                    <p className="text-sm font-normal text-[#808080]">Student</p>
                  </div>
                  <div>
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 1.5L7 7.5L1 1.5" stroke="#33363F" />
                    </svg>
                  </div>
                </div>

                {/* Dropdown Menu */}
                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                    <ul className="py-2 text-sm text-gray-700">
                      <li className="mx-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-[#E3E3E3]">
                        <Link className="block w-full" href="/profile">Profile</Link>
                      </li>
                      <li className="mx-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-[#E3E3E3]">
                        <Link className="block w-full" href="/userReport">Report</Link>
                      </li>
                      <li className="mx-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-[#E3E3E3]">
                        Downloads
                      </li>
                      <li className="mx-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-[#E3E3E3]" onClick={logOut}>
                        Log Out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="bg-[#2A497C] text-white px-7 py-2 rounded-full">
                <button>Login</button>
              </Link>
            )}
            {/* <div>
          <button className='px-6 py-2 font-medium rounded-3xl transition duration-300 ease-in-out bg-[#2A497C] text-[#fff]'>Book Demo</button>
        </div> */}
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
                className={`${currentPath === '/'
                  ? 'text-[#2A497C] font-bold'
                  : 'text-gray-600 hover:text-gray-800'
                  } block px-3 py-2 font-medium`}
                onClick={() => setIsOpen(false)} // Close the menu on click
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${currentPath === '/about'
                  ? 'text-[#2A497C] font-bold'
                  : 'text-gray-600 hover:text-gray-800'
                  } block px-3 py-2 font-medium`}
                onClick={() => setIsOpen(false)} // Close the menu on click
              >
                About
              </Link>
              <Link
                href="/testimonial"
                className={`${currentPath === '/testimonial'
                  ? 'text-[#2A497C] font-bold'
                  : 'text-gray-600 hover:text-gray-800'
                  } block px-3 py-2 font-medium`}
                onClick={() => setIsOpen(false)} // Close the menu on click
              >
                Testimonial
              </Link>
              <Link
                href="/contact"
                className={`${currentPath === '/contact'
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
