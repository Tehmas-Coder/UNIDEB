import Link from "next/link";
import { HomePageData } from "../../../app/data.json";
import React from "react";

const StudyProgramsSmallScreen = () => {
  return (
    <div className="bg-[#155744] w-[100%] flex flex-col items-center justify-center mb-4 pt-[50px] pb-[100px] font-nunito lg:hidden">
      <h1 className="text-[#F5B418] font-bold lg:text-[50px] mb-[80px] px-5 md:text-[40px] text-[30px] font-nunito">
        Study Programs
      </h1>
      <div className="max-w-[1400px] flex gap-5 justify-around items-center w-[100%] flex-wrap px-5 sm:py-10">
        {HomePageData.StudyProgramData.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <div
                className="w-[200px] py-4 sm:px-3 hover:scale-110 transition bg-white flex flex-col items-center rounded-md"
                key={index}
              >
                <img
                  src={item.image}
                  alt={"image"}
                  width={200}
                  height={200}
                  className="h-[150px] hover:translate-y-[-30px] hover:scale-125 transition-transform duration-300 ease-in-out mb-5"
                />

                <h1 className="text-[20px] w-[90%] text-center ">
                  {item.title}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default StudyProgramsSmallScreen;
