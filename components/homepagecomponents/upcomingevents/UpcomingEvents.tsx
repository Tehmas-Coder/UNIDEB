import DiscoverUD from "@/components/newcomponents/discoverUD/DiscoverUD";
import Link from "next/link";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HomePageData } from "../../../app/data.json";

const UpcomingEvents = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative hidden lg:block">
      <div
        className="bg-cover h-[1300px] opacity-20"
        style={{
          backgroundImage: `url(${"https://d1gns46gm3ntni.cloudfront.net/institutes/institute12952/1.jpg"})`,
        }}
      ></div>

      <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[560px] centered-axis-xy w-full hidden lg:block px-20">
        <div className="">
          <h1 className=" text-5xl text-[#114c3a] font-bold text-center">
            Upcoming Events
          </h1>
        </div>
        <div className="flex justify-around h-[500px]">
          {HomePageData.EventsData.map((event, index) => (
            <div
              key={index}
              className={`mt-20 bg-[#114c3a] h-[160px] hover:h-[350px]  w-[330px] duration-700 overflow-hidden group `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex">
                <div className="h-[60%] w-[70px] bg-[#F5B418] text-center flex items-end">
                  <div className="flex-1">
                    <p className="text-[#114c3a] font-bold">{event.date}</p>
                    <p className="text-2xl text-white font-bold">
                      {event.month}
                    </p>
                    <p className="bg-[#114c3a] h-1" />
                    <p className="bg-[#F5B418] py-1">{event.year}</p>
                  </div>
                </div>
                <div className="m-2 w-full h-[110px]">
                  <div className="bg-[#F5B418] w-3/5 text-center font-bold">
                    <h1 className="px-1 py-1">{event.location}</h1>
                  </div>
                  <div className="mt-4 text-white font-bold text-[16px]">
                    <h1>{event.title}</h1>
                    <p className="text-sm italic group-hover:block hidden w-[220px] transition-all text-gray-300 duration-700 mt-4">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-14">
          <Link href="/events/">
            <button className="text-xl font-bold border-2 p-4 rounded-2xl bg-[#F5B418] hover:bg-[#114c3a] transition-all duration-300 hover:text-white">
              Explore Events
            </button>
          </Link>
        </div>
        {/* --------------------------------------------------------DISCOVER UD------------------------------------------------------- */}
        <div className="w-[70%] ml-[15%]">
          <div className="flex justify-center items-center mb-10">
            <h1 className="text-5xl font-bold text-center text-[#114c3a]">
              Discover
            </h1>
            <p className="text-7xl text-center text-red-800 mx-6">
              <FaLocationDot />
            </p>
            <h1 className="text-5xl font-bold text-center text-[#114c3a]">
              University of Debrecen
            </h1>
          </div>
          <DiscoverUD />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
