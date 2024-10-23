"use client";
import Image from "next/image";
import React from "react";
import banner1 from "../../public/img/Display/left.png";
import banner2 from "../../public/img/Display/right1.png";
import banner3 from "../../public/img/Display/right2.png";
import banner4 from "../../public/img/Display/left2.png";
import Categories from "./Categories";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import products from "../../public/data/product.json";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-10 py-8 gap-5 lg:mx-auto">
        <div className="lg:col-span-3  hidden lg:block">
          <Categories />
        </div>
        <div className="col-span-10 lg:col-span-7 ">
          <div>
            <Swiper
              style={{
                // "--swiper-navigation-color": "#192a56",
                "--swiper-navigation-size": "30px",
              }}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="h-[200px] md:h-[300px] lg:h-[400px] "
            >
              <SwiperSlide>
                <Image
                  src={banner1}
                  width={800}
                  height={400}
                  alt="Banner1"
                  className="w-full h-full rounded-lg object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={banner2}
                  width={800}
                  height={400}
                  alt="Banner1"
                  className="w-full h-full rounded-lg object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={banner3}
                  width={800}
                  height={400}
                  alt="Banner1"
                  className="w-full h-full rounded-lg object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={banner4}
                  width={800}
                  height={400}
                  alt="Banner1"
                  className="w-full h-full rounded-lg object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* products navigation */}
          <div className="mt-5">
            <Swiper
              style={{
                // "--swiper-navigation-color": "#192a56",
                "--swiper-navigation-size": "30px",
              }}
              spaceBetween={20}
              centeredSlides={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // slidesPerView={8}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                375: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
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
              className=" "
            >
              {products?.map((product) => (
                <SwiperSlide>
                  <div className="rounded-md">
                    <Image
                      src={product.image}
                      width={800}
                      height={400}
                      alt="Banner1"
                      className=" h-[100px] object-cover object-center rounded-md"
                    />
                    {/* <span>
                    <small className="text-[10px]">{product.name}</small>
                  </span> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* features items  */}
      <div>
        <h1 className="text-xl font-bold text-[#192A56] font-oswald uppercase">
          Features
        </h1>
        <div className="flex flex-col  md:flex-row gap-5 justify-between mt-4 lg:mt-6">
          {features.map((feature) => (
            <div>
              <Image
                src={feature.image}
                alt="feature image"
                width={500}
                height={300}
                className="rounded-lg h-[150px] lg:h-[200px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

const features = [
  { image: "/img/banner1.jpg" },
  { image: "/img/banner4.jpg" },
  { image: "/img/banner5.jpg" },
];
