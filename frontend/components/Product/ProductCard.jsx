import React from "react";
import Image from "next/image";
import { useAppDispatch } from "@/lib/features/hooks";
import { add } from "@/lib/features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (productId) => {
    dispatch(add(productId));
  };
  return (
    <div className="relative flex flex-col justify-between h-full overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg group">
      <div className="absolute top-0 left-0 z-40 w-16 h-16">
        <div className="absolute transform -rotate-45 bg-[#192a56] text-center text-white font-semibold py-1 left-[-55px] top-[20px] w-[170px] text-xs">
          {product.offer} % OFF
        </div>
      </div>

      <div className="z-30">
        <div className="overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="object-cover w-full aspect-[4/5] group-hover:scale-105 transition-all duration-300 "
          />
        </div>
        <div className="p-2 space-y-1.5 overflow-hidden">
          <h2 className="leading-tight text-center capitalize truncate text-lg font-oswald">
            {product.name}
          </h2>
          <div className="flex justify-center gap-1 flex-nowrap md:gap-3">
            <p className="flex justify-center gap-1 text-xs text-red-500 line-through flex-nowrap font-lato md:text-base">
              <span className="mr-0.5">৳</span>
              {new Intl.NumberFormat().format(product.price)}
            </p>
            <p className="flex justify-center gap-1 text-xs flex-nowrap font-lato md:text-base">
              <span className="mr-0.5">৳</span>
              {new Intl.NumberFormat().format(product.discountedPrice)}
            </p>
          </div>
          <div className="flex justify-center gap-1.5">
            <button className="rounded-md bg-[#192a56] px-1 py-1 basis-1/2 text-[10px] capitalize text-white md:px-2 md:text-xs">
              Buy Now
            </button>
            <button
              className="rounded-md border border-[#192a56] basis-1/2 px-1 py-1 text-[10px] capitalize text-[#192a56] md:px-2 md:text-xs"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
