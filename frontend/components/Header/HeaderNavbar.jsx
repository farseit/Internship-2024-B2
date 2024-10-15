"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import headerNavItems from "../../public/data/headernav.json";
import Link from "next/link";

function HeaderNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Button to open drawer */}
      <button
        onClick={toggleDrawer}
        className="flex flex-col items-center justify-center w-16 text-3xl h-7 md:text-4xl lg:hidden"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Drawer - shown conditionally */}
      {isDrawerOpen && (
        <nav className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-80">
            <button
              onClick={toggleDrawer}
              className="text-right text-gray-500 text-xl mb-4"
            >
              &times; {/* Close button */}
            </button>
            <ul className="flex flex-col gap-4 font-semibold">
              {headerNavItems.map((navItem, index) => (
                <li key={index} className="relative group/nav transition-all">
                  <Link
                    href={navItem.href}
                    className="block text-sm font-semibold uppercase text-gray-600 hover:bg-[#192A56] hover:text-white rounded-sm py-2 px-4"
                    onClick={toggleDrawer} // Close drawer when clicking a link
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* Regular navbar for larger screens */}
      <nav className="bg-[#f5f6fa] drop-shadow-md w-full md:flex justify-center py-3 hidden lg:block">
        <ul className="flex justify-center gap-4 font-semibold">
          {headerNavItems.map((navItem, index) => (
            <li
              key={index}
              className="relative group/nav transition-all duration-500 ease-in"
            >
              <Link
                href={navItem.href}
                className="block text-sm font-semibold uppercase md:text-[0.82rem] md:px-1 xl:px-2 text-gray-600 hover:bg-[#192A56] hover:text-white rounded-sm py-2 px-4"
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HeaderNavbar;