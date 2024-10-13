"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


import { useAppSelector } from "@/lib/features/hooks";

const AddToCartPart = () => {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <div>
      <Link href="#" className="flex flex-col items-center gap-1 lg:flex-row">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 6h10m-4-6v-4h6M7 3h6v4H7z" />
          </svg>
        </div>
        <div className="text-white">
          <p className="relative font-semibold text-2xs md:text-sm w-fit">
            <span className="absolute grid w-5 h-5 text-xs font-bold text-red-100 bg-orange-400 rounded-full -top-2 -right-5 place-items-center">
              {/* {items.length} */}0
            </span>
          </p>
          <p className="text-xs pt-4 mt-[-1px] hidden lg:block">Add items</p>
        </div>
      </Link>
    </div>
  );
};

export default AddToCartPart;
