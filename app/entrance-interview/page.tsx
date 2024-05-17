import React from "react";
import data from "../data.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UD Entrance Interview Preparation Guideline",
  description:
    "University interviews are a crucial part of your application process. To help you prepare effectively, we've compiled the common questions you might be asked.",
  keywords:
    "University interviews, Entrance Interview Preparation, Interview Preparation Guideline,UD Entrance Interview Preparation Guideline",
  robots: "index, follow",
  formatDetection: { telephone: false },
  viewport:
    "initial-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
  authors: [
    {
      name: "University of Debrecen South Asia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "University of Debrecen South Asia Regional Office",
};

const EntranceInterview = () => {
  return (
    <div className="px-6 md:px-20 py-10 relative">
      <h1 className="text-[30px] md:text-[35px] text-[#155744] pb-4 font-bold">
        {data.EntranceInterviewGuideline.title}
      </h1>
      {data.EntranceInterviewGuideline?.data?.map((data, index) => (
        <div key={index}>
          <h1 className="text-[27px] text-[#f5b418] font-bold pb-4">
            {data.heading}
          </h1>
          <p className="pb-2 text-justify">{data.content}</p>
        </div>
      ))}
    </div>
  );
};

export default EntranceInterview;
