import React from "react";
import Categories from "./Categories";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import Carousel from "./Carousel";

const Hero = () => {
  const banners = [
    { src: "/img/banner3.jpg", alt: "Banner1", text: "This is banner 1" },
    { src: "/img/banner3.jpg", alt: "Banner2", text: "This is banner 2" },
    { src: "/img/banner3.jpg", alt: "Banner3", text: "This is banner 3" },
    { src: "/img/banner3.jpg", alt: "Banner4", text: "This is banner 4" },
    { src: "/img/banner3.jpg", alt: "Banner5", text: "This is banner 5" },
    { src: "/img/banner3.jpg", alt: "Banner3", text: "This is banner 3" },
    { src: "/img/banner3.jpg", alt: "Banner4", text: "This is banner 4" },
    { src: "/img/banner3.jpg", alt: "Banner1", text: "This is banner 1" },
    { src: "/img/banner3.jpg", alt: "Banner2", text: "This is banner 2" },
  ];
  const rowImage = [
    { src: "/img/banner3.jpg", alt: "Banner1", text: "This is banner 1" },
    { src: "/img/banner1.jpg", alt: "Banner2", text: "This is banner 2" },
    { src: "/img/banner2.jpg", alt: "Banner3", text: "This is banner 3" },
  ];

  return (
    <section className="lg:mx-[5rem] md:py-4 flex flex-col gap-5">
      <div className="flex gap-3">
        <Categories />
        <div className="flex flex-col gap-2 overflow-hidden bg-transparent w-full">
          {/* Carousel Component */}
          <Carousel banners={banners} />
          {/* ImageSlider Component */}
          <ImageSlider banners={banners} />
        </div>
      </div>
      <div className="lg:flex flex-row justify-between  min-h-[200px]">
        {rowImage.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={400}
              className="lg:min-w-[380px] w-full max-h-[170px] lg:object-cover min-h-[200px] md:min-h-[400px] lg:min-h-[200px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
