import React from "react";
import data from "../data.json";
import { Metadata } from "next";
import ProgramLayout from "@/components/common/programLayout/ProgramLayout";
import { FaCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title:
    "Explore Top Foundation Programs at University of Debrecen - Enroll Now",
  description:
    "Join the University of Debrecen's Foundation Programs to prepare for your academic future. Courses include Basic Medicine, Premedical Studies, and more. Kickstart your university journey!",
  keywords:
    "University of Debrecen, Foundation Programs, Basic Medicine Course, BMC II, International Foundation Year, Premedical Studies, Intensive Foundation Semester, English Language",
  robots: "index, follow",
  formatDetection: { telephone: false },
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  authors: [
    {
      name: "University of Debrecen South Asia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "University of Debrecen South Asia Blogs",
  openGraph: {
    type: "website",
    url: "https://southasia.edu.unideb.hu/foundation-program",
    title:
      "Explore Top Foundation Programs at University of Debrecen - Enroll Now",
    description:
      "Join the University of Debrecen's Foundation Programs to prepare for your academic future. Courses include Basic Medicine, Premedical Studies, and more. Kickstart your university journey!",
    siteName: "University of Debrecen South Asia Regional Office",
    images: [
      {
        url: "https://southasia.edu.unideb.hu/Logo.jpg",
        alt: "University of Debrecen Foundation Programs",
      },
    ],
  },
};

const Page: React.FC = () => {
  const programs = [
    "Basic Medicine Course",
    "International Foundation Year",
    "Intensive Foundation",
    "English Language Courses",
    "Short English Language Course",
    "Intensive English Language Course",
    "International Foundation Year for Pop Music",
    "Preparatory Course for Classical Instrument and Voice Studies",
    "Preparatory Course for Music Theory, general music studies, choir conducting",
    "Hungarian Scholarship Foundation Program",
  ];

  return (
    <>
      <ProgramLayout
        heading={"Foundation Program"}
        data={data.StudyProgramData.FoundationProgram}
      />
    </>
  );
};

export default Page;
