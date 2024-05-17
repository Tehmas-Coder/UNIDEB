import React from "react";
import BroucherCard from "@/components/downloadpagecomponent/BroucherCard"; // Import your BroucherCard component
import data from "../data.json";
import { Metadata } from "next";
import StudyProgramCard from "@/components/downloadpagecomponent/StudyProgramCard";

export const metadata: Metadata = {
  title:
    "University of Debrecen Study Programs - Explore study programs in Agriculture, Business, Engineering, and More",
  description:
    "Discover a diverse range of study programs at the University of Debrecen, covering Agriculture, Business, Engineering, IT, Science, Humanities, Law, and Health Sciences.",
  keywords:
    "University of Debrecen Study Programs, study programs, Agriculture, Business, Engineering, IT, Science, Humanities, Law, Health Sciences",
  robots: "index, follow",
  formatDetection: { telephone: true }, // Replace with your actual telephone number
  viewport:
    "initial-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width",
  authors: [
    {
      name: "University of Debrecen South Asia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "University of Debrecen South Asia Regional Office",
  openGraph: {
    type: "article",
    url: "https://southasia.edu.unideb.hu/study-programs/",
    title: "University of Debrecen Study Programs",
    description:
      "Explore a diverse range of study programs at the University of Debrecen, covering Agriculture, Business, Engineering, IT, Science, Humanities, Law, and Health Sciences.",
    siteName: "University of Debrecen South Asia Regional Office",
  },
};

const StudyPrograms = () => {
  return (
    <div className="flex flex-col justify-center font-nunito pt-16 pb-12 px-4 lg:px-[14%]">
      <h1 className="lg:text-[50px] text-[35px] font-bold text-[#F5B418] py-2 pb-4">
        Study Programs
      </h1>
      <div className="grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.HomePageData.StudyProgramData.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <StudyProgramCard
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyPrograms;
