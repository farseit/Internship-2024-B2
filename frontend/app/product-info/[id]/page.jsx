"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCartShopping,
  faGift,
  faUser,
  faSignOutAlt,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { Rate } from "antd";

export default function ProductPage() {
  //dummy data 
  const images = [
    { id: 1, src: "/img/Product/watch/watch1.jpg" },
    { id: 2, src: "/img/Product/watch/watch2.jpg" },
    { id: 3, src: "/img/Product/watch/watch3.jpg" },
    { id: 4, src: "/img/Product/watch/watch4.jpg" },
  ];
  const icons = [
    { id: 1, src: "/img/icons/social/facebook.png" },
    { id: 2, src: "/img/icons/social/google.png" },
    { id: 3, src: "/img/icons/social/instagram.png" },
    { id: 4, src: "/img/icons/social/twitter.png" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].src); // Default to the last image

  //magnifying prop
  const magnifierHeight = 300;
  const magnifieWidth = 300;
  const zoomLevel = 2;
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);

  //daynamic id
  const params = useParams();
  const { id } = params;

  return (
    <div className=" flex items-center justify-center lg:h-[800px] mb-20 mx-auto container">
      <div className="lg:flex gap-2 px-2 sm:p-0">
        <div className="image-holder flex flex-col gap-3 ">
          {/* main image box */}
          <div className="main-image relative max-w-[520px] rounded-lg overflow-hidden bg-slate-500">
            <Image
              src={selectedImage}
              alt="alt"
              width={1800}
              height={1800}
              className="object-cover max-h-[650px] "
              onMouseEnter={(e) => {
                const elem = e.currentTarget;
                const { width, height } = elem.getBoundingClientRect();
                setImgWidth(width);
                setImgHeight(height);
                setShowMagnifier(true);
              }}
              onMouseMove={(e) => {
                const elem = e.currentTarget;
                const { top, left } = elem.getBoundingClientRect();
                const x = e.pageX - left - window.scrollX;
                const y = e.pageY - top - window.scrollY;
                setXY([x, y]);
              }}
              onMouseLeave={() => {
                setShowMagnifier(false);
              }}
            />
            {showMagnifier && (
              <div
                className="absolute lg:block hidden pointer-events-none border border-gray-200 bg-white rounded-full"
                style={{
                  height: `${magnifierHeight}px`,
                  width: `${magnifieWidth}px`,
                  top: `${y - magnifierHeight / 2}px`,
                  left: `${x - magnifieWidth / 2}px`,
                  backgroundImage: `url('${selectedImage}')`,
                  backgroundSize: `${imgWidth * zoomLevel}px ${
                    imgHeight * zoomLevel
                  }px`,
                  backgroundPositionX: `${
                    -x * zoomLevel + magnifieWidth / 2
                  }px`,
                  backgroundPositionY: `${
                    -y * zoomLevel + magnifierHeight / 2
                  }px`,
                }}
              />
            )}
          </div>
          <div className=" absolute translate-y-10 flex items-center justify-center text-white font-bold w-12 h-12 bg-primary rounded-full">
            New
          </div>
          {/* image selector */}
          <button className="flex justify-between">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                onClick={() => setSelectedImage(image.src)}
                alt={`Product ${index + 1}`}
                width={400}
                height={400}
                className={`rounded-lg object-cover w-[22%] min-h-[100px] max-h-[100px] bg-white border-2 hover:border-2  border-gray-400/20 hover:border-yellow-400 ${
                  selectedImage === image.src
                    ? "border-yellow-400 border-2 "
                    : "border-gray-400/20"
                }`}
              />
            ))}
          </button>
        </div>
        <div className="info-holder flex flex-col gap-8 mt-4 lg:mt-0 bg-slate-400/10 p-5 rounded-lg lg:min-w-[550px] max-w-[550px]">
          <div>
            <h1 className="text-xl font-semibold ">
              Apple 42 mm Smart Watches
            </h1>
            <span className="text-[0.9rem] text-gray-400">Smart Watches</span>
          </div>
          <div className="flex justify-between lg:items-center">
            <div>
              <Rate disabled defaultValue={4} />
              <div className="flex gap-2 items-center">
                <span className="text-xs">3 Reviews</span>
                <button type="button" className="text-[0.8rem] font-bold">
                  Add Your Reviews
                </button>
              </div>
            </div>
            <div className="flex md:gap-2 font-semibold md:text-[0.9rem] text-xs">
              <span className="px-3 lg:py-2 rounded-full flex items-center justify-center">
                Availablity
              </span>
              <span className="px-3 lg:py-2 bg-primary text-white rounded-full flex items-center justify-center">
                In stock
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm pl-1">82 Available</span>
            <span className="text-2xl font-semibold text-yellow-500">
              $1,500.00
            </span>
          </div>
          <div className="text-sm flex flex-col gap-2">
            <span className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              facere illo maxime ab quisquam. Fugiat, quaerat reiciendis
              architecto quam perferendis illo rem officia quo. Necessitatibus
              expedita veniam quo dolore ex.
            </span>
            <span>
              <span className="font-bold ">SKU:</span> PWT116896718
            </span>
          </div>
          <div className="flex justify-between max-w-[22rem]">
            <select className="mt-1 shadow-sm px-6 py-3 text-xs md:text-base font-semibold border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-full">
              <option>Select Color</option>
              <option>Red</option>
              <option>Black</option>
              <option>Pink</option>
              <option>Gray</option>
            </select>
            <div className="mt-1 shadow-sm flex items-center gap-10 font-semibold bg-white text-xs md:text-base rounded-full">
              <button className=" px-3 py-1 border-r text-lg">-</button>
              <span>0</span>
              <button className=" px-3 py-1 border-l text-lg">+</button>
            </div>
          </div>
          <div className="flex gap-8">
            <button className="bg-primary shadow-sm text-white font-bold md:px-12 px-3 text-sm md:text-base py-2 rounded-full">
              Add to Cart
            </button>
            <button>
              <FontAwesomeIcon icon={faSyncAlt} className="w-5 h-5 mr-2" />
              Compare
            </button>
            <button>
              <FontAwesomeIcon icon={faHeart} className="w-5 h-5 mr-2" />
              Wishlist
            </button>
          </div>
          <div className="mt-10 flex gap-5">
            <span className="font-bold">Share</span>
            <div className="flex gap-8">
              {icons.map((icon, index) => {
                return (
                  
                  <Link href={"/"}>
                    <Image src={icon.src} alt="alt" width={20} height={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
