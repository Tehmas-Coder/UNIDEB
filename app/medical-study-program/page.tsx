"use client";
import React from "react";
import ProgramLayout from "@/components/common/programLayout/ProgramLayout";
import data from "../data.json";

const Page: React.FC = () => {
  return (
    <ProgramLayout
      heading={"Medical Study Program"}
      data={data.StudyProgramData.MedicalProgram}
    ></ProgramLayout>
  );
};

export default Page;
