// components/Navbar.tsx
"use client";
import Link from "next/link";
import { Bell, Settings } from "lucide-react";
import Image from "next/image";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/utils/user.util";
import { useRouter } from "next/navigation";
const profileIcon = '/images/profile_icon.png'

const AdminHeader = () => {
  const saransh = "/images/Saransh.png";
  const [userDropdown, setUserDropdown] = useState(false)
  const [user,setUser]=useState<any>(null)
  useEffect(() => {
    const userData = getUserInfo();
    setUser(userData);
  }, []);
    const router = useRouter()
  const logOut = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('UserInfo');
      router.push('/');
    }
  }
  return ( 
    <>
      <nav className="bg-white border-b border-[#aeaeae] shadow-sm relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-xl font-bold"
                style={{ color: "#2A497C" }}
              >
                Global Learner Den
              </Link>
            </div>
            {/* Right section */}
            <div className="flex items-center gap-6">
              {/* Settings Icon */}
              <button className="text-gray-600 hover:text-gray-800">
                <Settings size={20} />
              </button>

              {/* Notification Icon with Badge */}
              <button className="relative text-gray-600 hover:text-gray-800">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  1
                </span>
              </button>

             
              <div className="relative">
                {/* Trigger */}
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => setUserDropdown(!userDropdown)}
                >
                  <img className="w-[50px] h-[50px]" src={profileIcon} alt="profileIcon" />
                  <div>
                    <span className="text-[#2E2E48] font-semibold">{user?.name}</span>
                    <p className="text-sm font-normal text-[#808080] capitalize">{user?.role?.name}</p>
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
                      <li className="mx-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-[#E3E3E3]" onClick={logOut}>
                        Log Out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Menu />
    </>
  );
};

export default AdminHeader;
