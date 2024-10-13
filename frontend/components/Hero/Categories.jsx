import Link from "next/link";
import navItems from "../../public/data/navbar";

const Categories = () => {
  return (
    <nav className="bg-white shadow-md sm:flex w-[24%] justify-start items-start rounded-md hidden">
      <ul className="flex flex-col justify-center gap-1 py-2 px-1 w-full">
        <div className="pl-2 flex gap-10 mb-4">
          <span className="lg:text-lg font-semibold">Categories</span>
          <span className="lg:text-sm lg:flex items-center hidden">
            All Categories {" >"}
          </span>
        </div>
        {navItems.map((navItem, index) => (
          <span
            key={index}
            className="relative group/nav hover:bg-[#192A56] rounded-sm my-1 transition-all duration-500 ease-in"
          >
            <Link
              href={navItem.href}
              className="py-2 text-xs flex duration-500 ease-in-out md:text-sm md:px-1 xl:px-2 text-gray-600 group-hover/nav:text-white justify-between"
            >
              <span>{navItem.label}</span>
              <span>&#x25B8;</span>
            </Link>
            {/* Submenu always on the right */}
            <div className="absolute z-50 bg-white shadow rounded-lg w-[200px] top-[0%] left-[100%] hidden group-hover/nav:flex flex-col animate-fadeInUp">
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
                    <span>&#x25B8;</span>
                  </Link>
                  {/* Sub-submenu always on the right */}
                  {subNavItem.subSubNav && (
                    <div className="absolute z-50 bg-white text-secondary shadow-lg rounded-md w-[200px] top-0 left-[100%] hidden group-hover/subnav:flex flex-col animate-fadeInUp">
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
        ))}
      </ul>
    </nav>
  );
};

export default Categories;