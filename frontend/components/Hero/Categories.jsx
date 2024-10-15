import React from "react";
import icon1 from "../../public/icons/men.png";
import icon2 from "../../public/icons/automobile.png";
import icon3 from "../../public/icons/computer.webp";
import icon4 from "../../public/icons/machinery.png";
import icon5 from "../../public/icons/kitchen.png";
import icon6 from "../../public/icons/womens.png";
import icon7 from "../../public/icons/home.png";
import icon8 from "../../public/icons/babies.png";
import icon9 from "../../public/icons/sports.png";
import icon10 from "../../public/icons/accessories.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCoffee } from "@fortawesome/free-solid-svg-icons";
import categories from "../../public/data/navbar.json";
import Link from "next/link";
const Categories = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="flex items-center gap-3">
        <span className="font-semibold">Categories</span>{" "}
        <span className="text-sm font-medium">All Categories {">"}</span>
      </h2>
      <div className="space-y-3 flex flex-col mt-3 relative text-[#192A56] font-medium">
        {/* category */}
        {categories.map((category, idx) => (
          <Link
            href={category.href}
            key={idx}
            className="group/category flex gap-4 justify-between rounded-md  hover:bg-[#d3dae8] px-4 py-1  "
          >
            <div className="flex items-center gap-2">
              <Image
                src={category.icon}
                alt={category.label}
                height={20}
                width={20}
                className="h-[20px] w-[20px]"
              />
              <span className="font-semibold group-hover/category:translate-x-2 duration-200">
                {category.label}
              </span>
            </div>
            <span className="group-hover/category:rotate-90 duration-300">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
            {/* sub category */}
            <div className="hidden drop-shadow-lg group-hover/category:flex w-full absolute group-hover/category:flex-col left-1/2 rounded-md lg:left-full z-20  animate-fadeInUp group-hover/category:bg-white shadow-lg  ">
              {category.subNav.map((subCat, idx) => (
                <Link
                  key={idx}
                  href={subCat.href}
                  className="group/subcategory relative hover:bg-[#d3dae8] rounded-md px-4 py-1 "
                >
                  <div className=" flex justify-between hover:font-semibold">
                    <span className="text-sm group-hover/subcategory:translate-x-2 duration-200">
                      {subCat.label}
                    </span>
                    {subCat.subSubNav && (
                      <span className="group-hover/subcategory:rotate-90 duration-300">
                        <FontAwesomeIcon icon={faAngleRight} />
                      </span>
                    )}
                  </div>
                  {/* sub Sub Category */}
                  <div className="hidden drop-shadow-lg duration-300 group-hover/subcategory:flex w-[80%] lg:w-full absolute group-hover/subcategory:flex-col left-1/2 rounded-md lg:left-full z-30 top-1  group-hover/subcategory:bg-white shadow-lg animate-fadeInUp ">
                    {subCat.subSubNav?.map((subSubCat, idx) => (
                      <Link
                        key={idx}
                        href={subSubCat.href}
                        className="group/subsubcategory hover:bg-[#d3dae8] rounded-md hover:font-semibold px-4 py-1"
                      >
                        <div className=" flex justify-between">
                          <span className="text-sm group-hover/subsubcategory:translate-x-2 duration-200">
                            {subSubCat.label}
                          </span>
                          {/* <span className="group-hover/edit:rotate-90 duration-300">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </span> */}
                        </div>
                      </Link>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

// const categories = [
//   { id: 1, label: "Mens Fashion", icon: icon1, href: "#" },
//   { id: 2, label: "Automobile & Motorbike", icon: icon2, href: "#" },
//   { id: 3, label: "Computer & Accessories", icon: icon3, href: "#" },
//   { id: 4, label: "Machinery & Equipments", icon: icon4, href: "#" },
//   { id: 5, label: "Kitchen & Dining", icon: icon5, href: "#" },
//   { id: 6, label: "Women's Fashion", icon: icon6, href: "#" },
//   { id: 7, label: "TV & Home Appliances", icon: icon7, href: "#" },
//   { id: 8, label: "Babies & Toys", icon: icon8, href: "#" },
//   { id: 9, label: "Sports & Outdoor", icon: icon9, href: "#" },
//   { id: 9, label: "Watches & Accessories", icon: icon10, href: "#" },
// ];
