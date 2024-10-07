"use client";
import React, { useState } from "react";
import eventsdata from "../eventspagecomponent/eventsdata.json";

const Card = () => {
  const [pageState, setPageState] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);

  function changeState(index: number) {
    setHoveredIndex(index);
  }

  function returnState() {
    setHoveredIndex(null);
  }

  function setPage() {
    setPageState(true);
  }

  function reSetPage() {
    setPageState(false);
  }

  return (
    <>
      {!pageState ? (
        <div className="w-full">
          <div className="cursor-pointer md:flex md:flex-wrap w-full">
            {eventsdata.data.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => changeState(index)}
                onMouseLeave={returnState}
                onClick={() => {
                  setCurrentEventIndex(index);
                  setPage();
                }}
                className="flex md:w-1/3 lg:w-1/4 my-4 group"
              >
                <div
                  className={`w-20 sm:w-[140px] xl:w-[75px] h-20 sm:h-[75px] ${
                    hoveredIndex === index
                      ? "bg-[rgba(245,180,24,1)] rotate-x-180 scale-x-[-1] transition-transform"
                      : "bg-[#114c3a]"
                  } `}
                >
                  <div className="text-white flex text-sm xl:text-md justify-center items-center w-full h-full group-hover:rotate-x-180 group-hover:scale-x-[-1] duration-200 transition-transform">
                    <span className="font-bold mr-1">{item.date}</span>
                    {item.month}
                  </div>
                </div>
                <div className="px-2 w-64 flex items-center bg-white">
                  <div className="text-sm xl:text-md">
                    <p>
                      {item.year} {item.city}, {item.country}
                    </p>
                    <p>{item.days}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex w-full">
          <div className="hidden md:block cursor-pointer overflow-scroll h-screen w-full md:2/6 lg:w-1/4 ">
            {eventsdata.data.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => changeState(index)}
                onMouseLeave={returnState}
                onClick={() => setCurrentEventIndex(index)}
                className="flex w-full md:full lg:w-full my-4 group"
              >
                <div
                  className={`w-20 sm:w-[94px] xl:w-16 h-20 sm:h-16 ${
                    hoveredIndex === index
                      ? "bg-[rgba(245,180,24,1)] rotate-x-180 scale-x-[-1] transition-transform"
                      : "bg-[#114c3a]"
                  } `}
                >
                  <div className="text-white flex text-sm xl:text-md justify-center items-center w-full h-full group-hover:rotate-x-180 group-hover:scale-x-[-1] duration-200 transition-transform">
                    <span className="font-bold mr-1">{item.date}</span>
                    {item.month}
                  </div>
                </div>
                <div className="px-2 w-64 flex items-center bg-white">
                  <div className="text-sm xl:text-md">
                    <p>
                      {item.year} {item.city}, {item.country}
                    </p>
                    <p>{item.days}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" md:ml-6 md:w-4/6 lg:w-3/4">
            <h1 className="md:text-4xl text-2xl underline underline-offset-8 text-[#114c3a]">
              {eventsdata.data[currentEventIndex].title}
            </h1>

            <div className="flex justify-between mt-10 mb-10 text-sm text-gray-600">
              <div>
                <p className="font-bold mb-2 text-[#114c3a]">
                  Date(s) and Venue:
                </p>
                <p>{eventsdata.data[currentEventIndex].time}</p>
                <p>
                  {eventsdata.data[currentEventIndex].date}{" "}
                  {eventsdata.data[currentEventIndex].month}{" "}
                  {eventsdata.data[currentEventIndex].year}
                </p>
                <p>
                  {eventsdata.data[currentEventIndex].city},{" "}
                  {eventsdata.data[currentEventIndex].country}
                </p>
              </div>
              <div>
                <p
                  className="md:w-32 cursor-pointer text-[rgba(245,180,24,1)] underline underline-offset-4"
                  onClick={reSetPage}
                >
                  More Events
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              {eventsdata.data[currentEventIndex].images.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  className="lg:w-1/3 w-full p-1 h-56 object-cover"
                />
              ))}
            </div>

            <div className="mt-10 w-full">
              <iframe
                className="lg:w-2/3 w-full rounded-lg aspect-video"
                src={eventsdata.data[currentEventIndex].video}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
