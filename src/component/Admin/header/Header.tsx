// components/Navbar.tsx
import Link from "next/link";
import { Bell, Settings } from "lucide-react";
import Image from "next/image";
import Menu from "./Menu";

const AdminHeader = () => {
  const saransh = "/images/Saransh.png";

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

            {/* User Profile */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={saransh} // Replace with actual user avatar path
                  alt="User Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-sm text-right">
                <p className="text-gray-800 font-medium leading-4">Saransh</p>
                <p className="text-gray-500 text-xs">Admin</p>
              </div>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
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
