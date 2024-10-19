"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./imageGallery.css";

const ImageGallery = ({ image, productName, images }) => {
  const [showImage, setShowImage] = useState("");

  // image zooming
  useEffect(() => {
    let imageZoom = document.getElementById("imageZoom");
    imageZoom.addEventListener("mousemove", (event) => {
      imageZoom.style.setProperty("--display", "block");
      let pointer = {
        x: (event.offsetX * 100) / imageZoom.offsetWidth,
        y: (event.offsetY * 100) / imageZoom.offsetHeight,
      };
      imageZoom.style.setProperty("--zoomX", `${pointer.x}%`);
      imageZoom.style.setProperty("--zoomY", `${pointer.y}%`);
    });

    imageZoom.addEventListener("mouseout", (event) => {
      imageZoom.style.setProperty("--display", "none");
    });
  }, []);

  const styles = {
    "--url": `url(${showImage ? showImage.image : image})`,
    "--zoomX": "0%",
    "--zoomY": "0%",
    "--display": "none",
  };

  return (
    <div className="flex md:flex-row-reverse flex-col lg:flex-col gap-5 mt-5">
      <div id="imageZoom" style={styles}>
        <Image
          src={showImage ? showImage.image : image}
          alt={productName}
          height={400}
          width={400}
          className="inline"
        />
      </div>
      <div className="flex flex-row md:flex-col lg:flex-row gap-5 mt-4 md:mt-0 lg:mt-4">
        {images?.map((img) => (
          <div key={img.id} className="flex-1">
            <Image
              onClick={() => setShowImage(img)}
              src={img.image}
              alt="Product Image"
              height={100}
              width={100}
              className={`h-[100px] w-full flex-grow object-cover ${
                img?.id === showImage?.id &&
                "border p-1 border-[#192a56] duration-200"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
