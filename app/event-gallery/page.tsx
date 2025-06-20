"use client";
import React, { useState } from "react";
import type { CollapseProps } from "antd";
import { Collapse, Image } from "antd";
import EventGalleryCarousel from "@/components/common/eventGalleryCarousel/EventGalleryCarousel";
import eventsPageData from "../eventsPageData.json";

const Page = () => {
  const { Panel } = Collapse;

  return (
    <>
      <div className="flex flex-col items-center mb-2 px-12">
        <h1 className="lg:text-[50px] text-[35px] font-bold text-[#F5B418] my-10">
          Events Gallery
        </h1>
      </div>

      <div>
        <Collapse defaultActiveKey={["1"]} ghost>
          <Panel
            className="text-lg font-nunito font-bold text-[#155744]"
            header="Education Expo"
            key="1"
          >
            <div className="grid grid-cols-4 gap-4 w-[90%]">
              {eventsPageData?.data?.imagesExpo.map((imgObj, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer transform-gpu transition-transform hover:scale-105 overflow-hidden"
                >
                  <img
                    src={imgObj.image_url}
                    className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-60"
                    alt={`image ${index + 1}`}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center animate-in zoom-in-100 slide-in-from-bottom opacity-0 hover:opacity-100 transition-all duration-300"
                    style={{ background: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <p className="text-white text-center animate-in zoom-in">
                      {imgObj.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
          <Panel
            className="text-lg font-nunito font-bold text-[#155744]"
            header="Info Day"
            key="2"
          >
            <div className="grid grid-cols-4 gap-4 w-[90%]">
              {eventsPageData?.data?.imagesInfo.map((imgObj, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer transform-gpu transition-transform hover:scale-105 overflow-hidden"
                >
                  <img
                    src={imgObj.image_url}
                    className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-60"
                    alt={`image ${index + 1}`}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center animate-in zoom-in-100 slide-in-from-bottom opacity-0 hover:opacity-100 transition-all duration-300"
                    style={{ background: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <p className="text-white text-center animate-in zoom-in">
                      {imgObj.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel
            className="text-lg font-nunito font-bold text-[#155744]"
            header="Team Events"
            key="3"
          >
            <div className="grid grid-cols-4 gap-4 w-[90%]">
              {eventsPageData?.data?.imagesEvents.map((imgObj, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer transform-gpu transition-transform hover:scale-105 overflow-hidden"
                >
                  <img
                    src={imgObj.image_url}
                    className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-60"
                    alt={`image ${index + 1}`}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center animate-in zoom-in-100 slide-in-from-bottom opacity-0 hover:opacity-100 transition-all duration-300"
                    style={{ background: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <p className="text-white text-center animate-in zoom-in">
                      {imgObj.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default Page;
