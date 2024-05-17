import React from "react";
import Table from "@/components/downloadpagecomponent/Table";
import data from "../data.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University of Debrecen Sample Papers",
  description:
    "Prepare for entrance examinations with downloadable sample papers, exam topics, and paper patterns for both medical and non-medical programs. Boost your success with our comprehensive exam resources.",
  keywords:
    "University of Debrecen, entrance exam preparation, sample papers, exam topics, medical programs, non-medical programs",
  robots: "All, Index, Follow",
  formatDetection: { telephone: false },
  viewport: "",
  authors: [
    {
      name: "University of Debrecen South Asia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "https://www.facebook.com/UODHROSA/",
  openGraph: {
    type: "website",
    url: "https://southasia.edu.unideb.hu/sample-paper",
    title: "University of Debrecen Sample Papers",
    description:
      "Prepare for entrance examinations with downloadable sample papers, exam topics, and paper patterns for both medical and non-medical programs. Boost your success with our comprehensive exam resources.",
    siteName: "",
    images: [
      {
        url: "",
      },
    ],
  },
};
const page = () => {
  return (
    <div className="flex flex-col justify-center font-nunito pt-16 pb-12 px-4 lg:px-[14%]">
      <h1 className="lg:text-[50px] text-[35px] font-bold text-[#F5B418] py-2 pb-4">
        Sample Papers
      </h1>
      <Table data={data.DownloadPagesData.Sample_paper_data} />
    </div>
  );
};

export default page;
