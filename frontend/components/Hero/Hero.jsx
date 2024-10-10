import Image from "next/image";
import React from "react";
import banner1 from "../../public/img/Display/left.png";
import banner2 from "../../public/img/Display/right1.png";
import banner3 from "../../public/img/Display/right2.png";
import Categories from "./Categories";

const Hero = () => {
  return (
    <section className="container grid grid-cols-10 py-8 gap-5 mx-auto">
      <div className="lg:col-span-3  hidden lg:block">
        <Categories />
      </div>
      <div class="col-span-10 lg:col-span-7 grid grid-cols-8 gap-5">
        <div class="lg:row-span-2 col-span-8">
          <Image
            src={banner1}
            width={800}
            height={400}
            alt="Banner1"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div class="relative col-span-2 flex rounded-md">
          <Image
            src={banner2}
            width={800}
            height={400}
            alt="Banner1"
            className="w-full h-full rounded-md"
          />
        </div>
        <div class="col-span-2 relative flex ">
          <Image
            src={banner3}
            width={800}
            height={400}
            alt="Banner1"
            className="w-full h-full rounded-md"
          />
        </div>
        <div class="col-span-2 relative flex ">
          <Image
            src={banner3}
            width={800}
            height={400}
            alt="Banner1"
            className="w-full h-full rounded-md"
          />
        </div>
        <div class="col-span-2 relative flex">
          <Image
            src={banner3}
            width={800}
            height={400}
            alt="Banner1"
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
      <div className="col-span-10 lg:col-span-3 lg:hidden">
        <Categories />
      </div>
    </section>
  );
};

export default Hero;
