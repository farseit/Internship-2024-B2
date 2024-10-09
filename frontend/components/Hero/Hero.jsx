import Image from "next/image";
import React from "react";
import banner1 from "../../public/img/Display/left.png";
import banner2 from "../../public/img/Display/right1.png";
import banner3 from "../../public/img/Display/right2.png";

const Hero = () => {
  return (
    <section className="container py-8 mx-auto">
      <div class="grid grid-cols-2 lg:grid-cols-10 gap-3 lg:gap-6">
        <div class="lg:row-span-2 col-span-2 lg:col-span-7">
          <Image
            src={banner1}
            width={800}
            height={400}
            alt="Banner1"
            className="w-full h-full"
          />
        </div>
        <div class="lg:col-span-3 relative flex">
          <Image
            src={banner2}
            width={800}
            height={400}
            alt="Banner1"
            className="w-full h-full"
          />
        </div>
        <div class="lg:col-span-3 relative flex">
          <Image
            src={banner3}
            width={800}
            height={400}
            alt="Banner1"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
