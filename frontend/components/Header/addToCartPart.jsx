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
      <Link href="#" className="flex flex-col items-center gap-2 lg:flex-row">
        <div>
          <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />
        </div>
        <div className="text-white">
          <p className="relative font-semibold text-2xs md:text-sm w-fit">
            Cart
            <span className="absolute grid w-5 h-5 text-xs font-bold text-red-100 bg-red-600 rounded-full -top-2 -right-5 place-items-center">
              {/* {items.length} */}
            </span>
          </p>
          <p className="text-xs mt-[-1px] hidden lg:block">Add items</p>
        </div>
      </Link>
    </div>
  );
};

export default AddToCartPart;
