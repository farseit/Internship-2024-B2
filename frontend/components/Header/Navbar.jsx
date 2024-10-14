import Link from "next/link";
import navItems from "../../public/data/navbar";

const Navbar = () => {
  return (
    <nav className="bg-[#f5f6fa] hidden drop-shadow-md w-full py-4  lg:flex lg:justify-center">
      <ul className="hidden lg:flex justify-center gap-1">
        {/* {navItems.map((navItem, index) => (
          <span
            key={index}
            className="relative group/nav px-4 py-1 hover:bg-[#d3dae8]"
          >
            <Link
              href={navItem.href}
              className="block text-sm font-semibold uppercase duration-300 md:text-sm md:px-1 xl:px-2 text-[#192A56] hover:text-[#130b2efa]"
            >
              {navItem.label}
            </Link>
            <div className="absolute z-50 bg-white shadow rounded-b w-[200px] top-[90%] hidden group-hover/nav:flex flex-col animate-fadeInUp left-0">
              {navItem.subNav.map((subNavItem, subIndex) => (
                <span
                  key={subIndex}
                  className="relative transition-all rounded text-secondary group/subnav hover:bg-primary hover:text-white"
                >
                  <Link
                    href={subNavItem.href}
                    className="text-sm px-4 py-1 flex items-center justify-between duration-300 hover:pl-6"
                  >
                    <span>{subNavItem.label}</span>
                  </Link>
                  {subNavItem.subSubNav && (
                    <div className="absolute z-50 bg-white text-secondary shadow rounded-md w-[200px] top-1 left-[90%] hidden group-hover/subnav:flex flex-col animate-fadeInUp">
                      {subNavItem.subSubNav.map(
                        (subSubNavItem, subSubIndex) => (
                          <span
                            key={subSubIndex}
                            className="relative transition-all rounded hover:bg-primary hover:text-white"
                          >
                            <Link
                              href={subSubNavItem.href}
                              className="text-sm px-4 py-1 flex items-center justify-between duration-300 hover:pl-6"
                            >
                              <span>{subSubNavItem.label}</span>
                            </Link>
                          </span>
                        )
                      )}
                    </div>
                  )}
                </span>
              ))}
            </div>
          </span>
        ))} */}
      </ul>
    </nav>
  );
};

export default Navbar;
