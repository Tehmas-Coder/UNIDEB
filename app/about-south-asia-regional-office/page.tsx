import React from "react";
import SimilarPageStructure from "@/components/aboutpagecomponent/SimilarPageStructure"; // Import the component
import data from "../data.json"; // Import your JSON data
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About South Asia Regional Office | University of Debrecen",
  description:
    "Explore the journey of the University of Debrecen's South Asia Regional Office, established in 2017 and elevated to the status of South Asia Regional Office in 2023, contributing to academic excellence in the region.",
  keywords:
    "University of Debrecen, Hungary, South Asia, academic excellence, UOD South Asia Regional Office",
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
  return <SimilarPageStructure data={data.AboutPagesData.history} />;
};

export default App;
