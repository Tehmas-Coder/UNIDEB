import React from "react";
import BroucherCard from "@/components/downloadpagecomponent/BroucherCard"; // Import your BroucherCard component
import data from "../data.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University of Debrecen Brochures",
  description:
    "Download brochures and find out more about the University of Debrecen and the various programs offered.",
  keywords:
    "University of Debrecen Medical and Health Science Programs Aviation brochure English language PhD programs Undergraduate Program Description",
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
  openGraph: {
    type: "website",
    url: "https://southasia.edu.unideb.hu/brouchers",
    title: "University of Debrecen Brochures",
    description:
      "Download brochures and find out more about the University of Debrecen and the various programs offered.",
    siteName: "",
    images: [
      {
        url: "",
      },
    ],
  },
};

const BroucherList: React.FC = () => {
  return (
    <div className="flex flex-col justify-center font-nunito pt-16 pb-12 px-4 lg:px-[14%]">
      <h1 className="lg:text-[50px] text-[35px] font-bold text-[#F5B418] py-2 pb-4">
        Brochures
      </h1>
      <div className="grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.DownloadPagesData.BrouchersData.map((item) => (
          <BroucherCard
            key={item.id}
            image={item.image}
            pdf={item.pdf}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default BroucherList;
