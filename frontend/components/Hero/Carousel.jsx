"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Carousel = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[500px]">
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={banner.src}
              alt={banner.alt}
              width={1200}
              height={600}
              className="object-contain w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={handlePrev}
        className="absolute flex justify-center items-center left-9 top-1/2 transform -translate-y-1/2 bg-white  text-black h-[2rem] w-[2rem] rounded-full text-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute flex justify-center items-center right-9 top-1/2 transform -translate-y-1/2 bg-white  text-black h-[2rem] w-[2rem] rounded-full text-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:flex gap-2 hidden">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-yellow-300" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
