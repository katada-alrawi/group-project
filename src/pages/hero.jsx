import React from "react";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.jpg";
const carouselImages = [hero5, hero6, hero7, hero8];
export default function Hero() {
  return (
    <div className="flex gap-4 h-[200px]  w-full">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className=" basis-1/4 "
        >
        <img
        width={500}
        height={500}
            src={image}
            className="w-full h-full object-cover rounded"
          />
        </div>
      ))}
    </div>
  )
}