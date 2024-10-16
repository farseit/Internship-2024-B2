import React from "react";
import headerNavItems from "../../public/data/headernav.json";
import Link from "next/link";

function HeaderNavbar() {
  return (
    <nav className="bg-[#f5f6fa] drop-shadow-md w-full md:flex justify-center py-3 hidden">
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
  );
}

export default HeaderNavbar;
