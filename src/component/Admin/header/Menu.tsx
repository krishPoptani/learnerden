"use client";
import React from "react";
import { menu } from "./menuMapping";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Optional, just for cleaner class merging

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="bg-footer-gradient py-4">
      <div className="flex items-center gap-[26px] max-w-7xl mx-auto pl-5 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {menu?.superadmin?.map((item, index) => {
          const isActive = item.route && pathname === `/superadmin${item.route}`;
          return (
            <div key={index} className="relative cursor-pointer group">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-[10px]">
                  {item.route ? (
                    <Link href={`/superadmin${item.route}`}>
                      <span
                        className={clsx(
                          "text-[16px] font-medium block",
                          isActive ? "text-[#A097FF]" : "text-white"
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <span className="text-white font-medium text-[16px] block">
                      {item.label}
                    </span>
                  )}
                </div>

                {/* Dropdown on hover */}
                {item?.submenu && (
                  <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[230px] z-10 rounded-[6px] bg-white shadow-md max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-[500px]">
                    {item.submenu.map((subMenu, subIndex) => {
                      const isSubActive =
                        pathname === `/superadmin${subMenu.route}`;
                      return (
                        <Link
                          href={`/superadmin${subMenu.route}`}
                          key={subIndex}
                        >
                          <div
                            className={clsx(
                              "px-4 py-3 border-b last:border-b-0 text-sm flex items-center gap-2 hover:bg-gray-100",
                              isSubActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-black"
                            )}
                          >
                            <span>{subMenu.label}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

// import React from "react";
// import { menu } from "./menuMapping";

// const Menu = () => {
//   return (
//     <div className="bg-footer-gradient py-4">
//       <div className="flex items-center gap-[26px] max-w-7xl mx-auto pl-5 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
//         {menu?.superadmin?.map((item, index) => (
//           <div key={index} className="relative cursor-pointer">
//             {/* Apply group here */}
//             <div className="flex flex-col items-center group">
//               <div className="flex items-center gap-[10px]">
//                 {/* Icon placeholder: {item.icon} */}
//                 <span className="text-white font-medium text-[16px] block">
//                   {item.label}
//                 </span>
//               </div>

//               {/* Dropdown on hover */}
//               {item?.submenu && (
//                 <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[230px] z-[999] rounded-[6px] bg-white shadow-md max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-[500px]">
//                   {item.submenu.map((subMenu, subIndex) => (
//                     <div
//                       key={subIndex}
//                       className="px-4 py-3 border-b last:border-b-0 hover:bg-gray-100 text-black text-sm flex items-center gap-2"
//                     >
//                       <span>{subMenu.label}</span>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;
