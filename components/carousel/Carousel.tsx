"use client";
import React from "react";
import { Carousel } from "antd";
import { HomePageData } from "../../app/data.json";

const contentStyle: React.CSSProperties = {
  height: "288px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselComp = () => {
  return (
    <div className="lg:hidden text-center mt-14">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#114c3a] font-bold mb-10">
        Campus Life
      </h1>
      <div className="w-full bg-black">
        <Carousel autoplay className="h-72">
          {HomePageData.CarouselDataSmall.map((path, index) => (
            <div key={index}>
              <h3 style={contentStyle}>
                <img src={path} alt={`Image ${index + 1}`} />
              </h3>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComp;
