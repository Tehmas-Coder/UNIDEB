import React, { Component } from "react";
import { HomePageData } from "../../../app/data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const DeadlinesCarousel = () => {
  return (
    <div className="w-full h-full">
      <Carousel
        className="h-52"
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
      >
        <div className="flex flex-col justify-center items-center">
          <img src="/22.png" alt="Slide 1" />
          <div className="absolute top-10">
            <p className="text-center text-white text-2xl font-bold w-28">
              <span className="font-bold text-6xl">
                {HomePageData.Deadlines[0].date}
              </span>{" "}
              {HomePageData.Deadlines[0].month}
            </p>
          </div>
          <div className="absolute bottom-24">
            <p className="w-56 text-center text-red-600 font-bold text-2xl">
              <span className="font-bold text-6xl">
                {HomePageData.Deadlines[0].discipline}
              </span>{" "}
              {HomePageData.Deadlines[0].program}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src="/22.png" alt="Slide 1" />
          <div className="absolute top-10">
            <p className="text-center text-white text-2xl font-bold w-28">
              <span className="font-bold text-6xl">
                {HomePageData.Deadlines[1].date}
              </span>{" "}
              {HomePageData.Deadlines[1].month}
            </p>
          </div>
          <div className="absolute bottom-24">
            <p className="w-56 text-center text-red-600 font-bold text-2xl">
              <span className="font-bold text-4xl">
                {HomePageData.Deadlines[1].discipline}
              </span>{" "}
              {HomePageData.Deadlines[1].program}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src="/22.png" alt="Slide 1" />
          <div className="absolute top-10">
            <p className="text-center text-white text-2xl font-bold w-28">
              <span className="font-bold text-6xl">
                {HomePageData.Deadlines[2].date}
              </span>{" "}
              {HomePageData.Deadlines[2].month}
            </p>
          </div>
          <div className="absolute bottom-24">
            <p className="w-56 text-center text-red-600 font-bold text-2xl">
              <span className="font-bold text-4xl">
                {HomePageData.Deadlines[2].discipline}
              </span>{" "}
              {HomePageData.Deadlines[2].program}
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default DeadlinesCarousel;
