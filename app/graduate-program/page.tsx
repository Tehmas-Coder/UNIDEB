
import React from "react";
import ProgramLayout from "@/components/common/programLayout/ProgramLayout";
import data from "../data.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University of Debrecen Graduate programs",
  description: "The University of Debrecen offers master's programs in Agriculture, Business, Engineering, IT, Science, Humanities, Law, and Health Sciences.",
  keywords: "University of Debrecen, Graduate programs, Agriculture, Business, Engineering, IT, Science, Humanities, Law, Health Sciences",
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
      heading={"Graduate Study Program"}
      data={data.StudyProgramData.GraduateProgram}
    ></ProgramLayout>
  );
};

export default Page;
