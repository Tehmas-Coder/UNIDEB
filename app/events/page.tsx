import Card from "@/components/eventspagecomponent/Card";
import { Divider } from "antd";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "University of Debrecen Upcoming Events",
  description:
    "Representatives from the University of Debrecen are participating in events across the South Asia Region, connecting with prospective students",
  keywords:
    "University of Debrecen Upcoming Events, study programs,Upcoming events in South Asia",
  robots: "index, follow",
  formatDetection: { telephone: false }, // Replace with your actual telephone number
  viewport:
    "initial-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width",
  authors: [
    {
      name: "University of Debrecen South Asia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "University of Debrecen South Asia Regional Office",
  openGraph: {
    type: "article",
    url: "https://southasia.edu.unideb.hu/Unideb-Upcoming-Events/",
    title: "University of Debrecen Study Programs",
    description:
      "Representatives from the University of Debrecen are participating in events across the South Asia Region, connecting with prospective students",
    siteName: "University of Debrecen South Asia Regional Office",
  },
};

const Events = () => {
  return (
    <div className="my-10 flex flex-col w-full">
      <h1 className="text-5xl font-semibold mx-16 mb-10 text-[#F5B418]">
        Events
      </h1>

      <div className="flex flex-col items-start px-8 sm:px-16">
        <Card />
      </div>
    </div>
  );
};

export default Events;
