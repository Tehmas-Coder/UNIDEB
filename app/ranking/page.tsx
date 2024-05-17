import React from "react";
import SimilarPageStructure from "@/components/aboutpagecomponent/SimilarPageStructure"; // Import the component
import data from "../data.json"; // Import your JSON data
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University of Debrecen Accreditation and Ranking",
  description:
    "Explore internationally recognized programs at the University of Debrecen. Our accredited medical and engineering programs are aligned with the European Qualifications Framework and accepted across the European Union. , Discover accredited medical and engineering programs at the University of Debrecen, aligned with the European Qualifications Framework. Internationally recognized diplomas accepted across the EU. ",
  keywords:
    "University of Debrecen, accreditation, ranking, European Qualifications Framework, medical programs, engineering programs, WHO accreditation, FEANI accreditation",
  robots: "index, follow",
  formatDetection: { telephone: false },
  viewport:
    "initial-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width",
  authors: [
    {
      name: "University of Debrecen South Asia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "https://www.facebook.com/UODHROSA/",
};

const App: React.FC = () => {
  return (
    <>
      <SimilarPageStructure data={data.AboutPagesData.ranking} />{" "}
      {/* Pass the data as a prop */}
    </>
  );
};

export default App;
