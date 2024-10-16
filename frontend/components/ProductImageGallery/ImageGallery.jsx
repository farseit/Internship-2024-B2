"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./imageGallery.css";

const ImageGallery = ({ image, productName }) => {
  const [zoom, setZoom] = useState();
  useEffect(() => {
    let imageZoom = document
      .getElementById("imageZoom")
      .addEventListener("mousemove", (event) => {
        // imageZoom.style.setProperty("--display", "block");
        let pointer = {
          x: event.offsetX,
          y: event.offsetY,
        };
        console.log(pointer);
      });
  }, []);

  const styles = {
    "--url": `url(${image})`,
    "--zoomX": `${"0%"}`,
    "--zoomY": `0%`,
    "--display": `block`,
  };
  return (
    <div id="imageZoom" style={styles}>
      <Image src={image} alt={productName} height={500} width={500} />
    </div>
  );
};

export default ImageGallery;
