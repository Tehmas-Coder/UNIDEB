import React from "react";
import { HomePageData } from "../../../app/data.json";

const UniversityOverview = () => {
  return (
    <div className="my-10 mx-10 md:mx-0">
      <div className=" bg-[#114c3ae5] shadow-[0px_20px_20px_10px_#2d3748] h-4 hidden lg:block" />
      <div className="md:flex md:px-4 md:justify-between  lg:justify-around items-center lg:h-52 lg:py-10 lg:px-40 bg-[#114c3a]">
        <div className="text-center py-10 lg:py-0">
          <h1 className="lg:text-6xl text-5xl text-[#F5B418] font-bold">
            {HomePageData.Overview.students}
          </h1>
          <p className="lg:text-xl md:text-lg text-white">Total Students</p>
        </div>

        <div className="text-center py-10 lg:py-0">
          <h1 className="lg:text-6xl text-5xl text-[#F5B418] font-bold">
            {HomePageData.Overview.international}
          </h1>
          <p className="lg:text-xl md:text-lg text-white">
            International Students
          </p>
        </div>

        <div className="text-center py-10 lg:py-0">
          <h1 className="lg:text-6xl text-5xl text-[#F5B418] font-bold">
            {HomePageData.Overview.faculties}
          </h1>
          <p className="lg:text-xl md:text-lg text-white">Faculties</p>
        </div>

        <div className="text-center py-10 lg:py-0">
          <h1 className="lg:text-6xl text-5xl text-[#F5B418] font-bold">
            {HomePageData.Overview.campuses}
          </h1>
          <p className="lg:text-xl md:text-lg text-white">Campuses</p>
        </div>
      </div>
      <div className="bg-[#114c3ae5] h-4 shadow-lg hidden lg:block" />
    </div>
  );
};

export default UniversityOverview;
