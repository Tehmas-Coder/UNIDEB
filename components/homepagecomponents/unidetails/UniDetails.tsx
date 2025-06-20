import React from "react";
import { HomePageData } from "../../../app/data.json";
import Link from "next/link";

const UniDetails = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center md:px-32">
      <h1 className="text-white text-md lg:text-2xl font-bold mb-4 px-5">
        {HomePageData.UniDetails.rank}
      </h1>
      <h1 className="text-white text-md lg:text-xl w-[435px] font-normal mb-4 px-5 ">
        {HomePageData.UniDetails.desc}
      </h1>
      <h1
        className="text-white text-[30px] md:text-[40px] lg:text-5xl font-bold md:mb-[70px] max-w-lg px-5"
        style={{ lineHeight: "40px" }}
      >
        {HomePageData.UniDetails.admissionsOpen} <br />
        <span className="text-md lg:text-2xl font-normal">
          For February 2026 Intake
        </span>
      </h1>
      <div className="">
        <Link
          href="https://akconsultants.agentcisapp.com/online-form/university-of-debrecen"
          target="_blank"
        >
          <button className="bg-[#F5B418] text-white px-[60px] ml-6 font-bold border-[#F5B418] py-4 rounded-3xl hover:bg-transparent hover:text-[#F5B418] hover:border hover:border-white transition duration-300">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UniDetails;
