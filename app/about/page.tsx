import React from "react";
import SimilarPageStructure from "@/components/aboutpagecomponent/SimilarPageStructure"; // Import the component
import data from "../data.json"; // Import your JSON data
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About University of Debrecen",
  description:
    "The University of Debrecen, ranked 2nd in Hungary, is one of the largest comprehensive universities in Hungary. Learn about our academic excellence and diverse programs.",
  keywords:
    "University of Debrecen, Hungary, comprehensive universities, academic excellence",
  robots: "index, follow",
  formatDetection: { telephone: false },
  viewport:
    "initial-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width",
  authors: [
    {
      name: "University of Debrecen Southasia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "https://www.facebook.com/UODHROSA/",
};

const App: React.FC = () => {
  return <SimilarPageStructure data={data.AboutPagesData.about} />;
};

export default App;
