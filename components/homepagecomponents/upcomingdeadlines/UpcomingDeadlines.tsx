import Link from "next/link";
import React from "react";
import DeadlinesCarousel from "@/components/newcomponents/deadlinecarousel/DeadlinesCarousel";

const UpcomingDeadlines = () => {
  return (
    <div className="ml-2 md:ml-10 flex justify-between items-center px-5 lg:px-36 lg:mb-20 lg:mt-32 ">
      <div className="my-8 lg:my-0">
        <h1 className="text-3xl lg:text-5xl font-bold my-3 text-[#155744]">
          Upcoming
        </h1>
        <h1 className="text-5xl lg:text-7xl font-bold my-3 text-red-700">
          Deadlines
        </h1>
        <div className="lg:w-96 md:w-[50vh] my-3">
          Don&apos;t miss out on the chance to support your academic journey and
          turn your aspirations into reality.
        </div>
        <div className="flex justify-start">
          <Link href={"/deadlines"}>
            <button className="text-white lg:text-[#155744] bg-[#155744] lg:bg-white border-2 lg:border-[1px] mt-3 border-[#155744] font-bold md:font-normal text-2xl lg:text-lg py-3 md:py-2 px-12 md:px-8 rounded hover:bg-[#155744] hover:text-white hover:text-bold transition-all duration-500">
              Explore
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="h-80 relative mt-10 hidden md:block">
            <div>
              <img src="/time_moving_fast.gif" alt=""></img>
            </div>
          </div> */}

      <div className="w-[500px] h-[400px] hidden lg:block">
        <DeadlinesCarousel />
      </div>
    </div>
  );
};

export default UpcomingDeadlines;
