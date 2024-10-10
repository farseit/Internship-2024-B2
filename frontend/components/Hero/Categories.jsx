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

const Categories = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="flex items-center gap-3">
        <span className="font-semibold">Categories</span>{" "}
        <span className="text-sm font-medium">All Categories {">"}</span>
      </h2>
      <div className="space-y-3 flex flex-col mt-3">
        {categories.map((category) => (
          <button key={category.id}>
            <div className="flex items-center gap-2">
              <Image
                src={category.icon}
                alt={category.label}
                height={20}
                width={20}
              />
              <span className="font-medium">{category.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;

const categories = [
  { id: 1, label: "Mens Fashion", icon: icon1, href: "#" },
  { id: 2, label: "Automobile & Motorbike", icon: icon2, href: "#" },
  { id: 3, label: "Computer & Accessories", icon: icon3, href: "#" },
  { id: 4, label: "Machinery & Equipments", icon: icon4, href: "#" },
  { id: 5, label: "Kitchen & Dining", icon: icon5, href: "#" },
  { id: 6, label: "Women's Fashion", icon: icon6, href: "#" },
  { id: 7, label: "TV & Home Appliances", icon: icon7, href: "#" },
  { id: 8, label: "Babies & Toys", icon: icon8, href: "#" },
  { id: 9, label: "Sports & Outdoor", icon: icon9, href: "#" },
  { id: 9, label: "Watches & Accessories", icon: icon10, href: "#" },
];

console.log(categories);
