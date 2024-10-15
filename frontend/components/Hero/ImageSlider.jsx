"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const ImageSlider = ({ banners }) => {
  const scrollableRef = useRef(null); // Ref to the scrollable container
  const [showArrows, setShowArrows] = useState(true); // State to control the visibility of arrows

  useEffect(() => {
    const handleResize = () => {
      if (scrollableRef.current) {
        const isOverflowing =
          scrollableRef.current.scrollWidth > scrollableRef.current.clientWidth;
        setShowArrows(isOverflowing);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [banners]); // Run effect when banners change

  return (
    <div className="relative ">

      <div
        className="flex gap-2 justify-between overflow-x-auto hide-scrollbar scrollable-container "
        ref={scrollableRef}
        >
        {banners.map((banner, index) => (
          <button
          key={index}
          className="bg-white shadow-lg px-1 flex flex-col justify-center items-center max-h-32 mb-2 min-w-[8rem] max-w-[8rem] rounded-lg"
          >
            <div className="overflow-hidden">
              <Image
                src={banner.src}
                width={800}
                height={400}
                alt={banner.alt}
                className="w-32 h-32 object-contain transform transition-transform duration-300 hover:scale-110"
                />
            </div>
            <span className="text-xs">{banner.text}</span>
          </button>
        ))}
      </div>

        {/* Left Arrow */}
        {showArrows && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() =>
                scrollableRef.current.scrollBy({ left: -200, behavior: "smooth" })
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        )}
      {/* Right Arrow */}
      {showArrows && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 hover:text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() =>
              scrollableRef.current.scrollBy({ left: 200, behavior: "smooth" })
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
