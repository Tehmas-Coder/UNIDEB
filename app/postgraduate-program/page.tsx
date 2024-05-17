"use client";
import React from "react";
import ProgramLayout from "@/components/common/programLayout/ProgramLayout";
import data from "../data.json";

const Page: React.FC = () => {
  return (
    <ProgramLayout
      heading={"Post-Graduate Program"}
      data={data.StudyProgramData.PostGraduateProgram}
    ></ProgramLayout>
  );
};

export default Page;
