"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../../public/data/product";
import Link from "next/link";
import ProductCard from "./ProductCard";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductContainer = () => {
  return (
    <>
      <div className=" lg:mx-[10rem] mx-auto mt-5">
        <h3 className=" text-secondary text-center mb-5 uppercase text-3xl font-bold font-oswald ">
          Collection Name
        </h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full !pb-10"
        >
          {products.map((product) => (
            <>
              <SwiperSlide>
                <Link href={`/product-info/${product.id}`} key={product.id}>
                  <ProductCard product={product} />
                </Link>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default ProductContainer;
