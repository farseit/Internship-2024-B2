"use client";
import React, { useCallback, useEffect, useState } from "react";
import ImageGallery from "@/components/ProductImageGallery/ImageGallery";
import { FetchProductById } from "@/lib/FetchProduct";

const ProductInfo = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const data = await FetchProductById(id);
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // discount calculation
  const discountedPrice = product.price - product.price * (45 / 100);

  return (
    <div className="bg-white mb-28 lg:mb-6 h-fit">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 flex flex-col gap-3">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery image={product.image} productName={product.name} />
          {/* Details pan */}
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {product.category}
              </span>
              <h2 className="text-2xl font-bold text-[rgba(0,0,0,0.5)] lg:text-3xl">
                {product.name}
              </h2>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2 ">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ৳{new Intl.NumberFormat().format(discountedPrice)}
                </span>
                <span className="mb-0.5 text-red-700 line-through">
                  ৳{product.price}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="flex flex-col gap-2 mb-4 text-[rgba(0,0,0,0.5)]">
              <div className="flex items-center  lg:w-[60%] w-full">
                <p className="w-[50%] font-semibold tracking-wide">
                  Availability
                </p>
                <p className="w-[50%] text-green-500 font-bold tracking-wider">
                  <span className="text-black pr-2">:</span>
                  In Stock
                </p>
              </div>

              <div className="flex items-center  lg:w-[60%] w-full">
                <p className="w-[50%] font-semibold tracking-wide">Brand</p>
                <p className="w-[50%] text-green-500 font-bold tracking-wider">
                  <span className="text-black pr-2">:</span> None
                </p>
              </div>

              <div className="flex items-center  lg:w-[60%] w-full">
                <p className="w-[50%] font-semibold tracking-wide">QTY</p>
                <p className="w-[50%] text-green-500 font-bold tracking-wide">
                  <span className="text-black pr-2">:</span> 30
                </p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <button className="bg-blue-600 px-4 py-2 text-white rounded-md font-semibold hover:bg-[blue]">
                Add To Cart
              </button>

              <button className="bg-white text-black border-2 px-4 py-2 rounded-md font-semibold hover:bg-slate-200">
                Checkout Now
              </button>
            </div>

            <div
              className="mt-12 text-base text-gray-500 tracking-wide"
              dangerouslySetInnerHTML={{ __html: product.desc }}
            />
          </div>
        </div>
        <div className="">
          <button className="border-[rgba(0,0,255,0.5)] border-2 px-4 py-2 text-[blue] rounded-md font-semibold">
            Add Review & Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
