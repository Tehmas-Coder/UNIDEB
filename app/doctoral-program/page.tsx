
import React from "react";
import ProgramLayout from "@/components/common/programLayout/ProgramLayout";
import data from "../data.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University of Debrecen PhD/Doctoral programs",
  description: "UoD provides PhD/Doctoral programs in Agricultural Sciences, Humanities, IT, Natural Sciences, Social Sciences, Medical, Pharma, and Health Sciences.",
  keywords: "University of Debrecen, PhD programs, Doctoral programs, Agricultural Sciences, Humanities, IT, Natural Sciences, Social Sciences, Medical, Pharma, Health Sciences",
  robots: "index, follow",
  formatDetection: { telephone: false },
  viewport: "initial-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
  authors: [
    {
      name: "University of Debrecen South Asia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "University of Debrecen South Asia Regional Office",
};


const Page: React.FC = () => {
  return (
    <ProgramLayout
      heading={"PhD / Doctoral Program"}
      data={data.StudyProgramData.DoctoralProgram}
    ></ProgramLayout>
  );
};

export default Page;
