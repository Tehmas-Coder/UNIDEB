import React from "react";
import data from "../data.json";
import TabsComponent from "@/components/applicationpagecomponent/Tabscomponent";
import { Metadata } from "next";
import DeadlinesComponent from "@/components/deadlinescomponent/DeadlinesComponent";

export const metadata: Metadata = {
  title: "University of Debrecen Programs Deadlines",
  description:
    "Explore over 80 degree programs fully taught in English at the University of Debrecen, including Medical School, Foundation Programs, Undergraduate Programs, Graduate Programs, Scholarships, and PhD/Doctoral Programs. The university offers and participates in multiple scholarship programs to facilitate its students in funding their education.",
  keywords:
    "University of Debrecen, Medical Degree Programs, English-taught programs, Foundation Programs, Undergraduate Programs, Graduate Programs, PhD Programs",
  robots: "index, follow",
  formatDetection: { telephone: false },
  viewport:
    "initial-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width",
  authors: [
    {
      name: " University of Debrecen Southasia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "https://www.facebook.com/UODHROSA/",
};

const App: React.FC = () => {
  return (
    <>
      <img
        className="w-full h-[320px] hidden lg:block"
        alt="deadlines"
        src="/Deadlines of UOD.jpg"
      />
      <img className="lg:hidden" alt="deadlines" src="/deadlinesmob.jpeg" />
      <div className="lg:px-[10%] px-4 py-12 font-nunito">
        <h1 className="font-nunito text-[36px] pt-8 text-[#1e5e4b] font-bold">
          {" "}
          Upcoming Deadlines
        </h1>

        <div className="flex justify-center items-center pt-4">
          <DeadlinesComponent />
        </div>
      </div>
    </>
  );
};

export default App;
