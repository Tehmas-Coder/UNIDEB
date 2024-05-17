import React from "react";
const MapComponent = dynamic(
  () => import("@/components/common/map/MapComponent"),
  {
    ssr: false,
  }
);
import mapdata from "@/components/common/mapdata.json";
import dynamic from "next/dynamic";

import { Metadata } from "next";
import RepresentativeSearch from "../representative-search/page";

export const metadata: Metadata = {
  title: "University of Debrecen South Asia Representatives",
  description:
    "Connect with our 12 representatives at the Regional Office, dedicated to guiding you toward your educational dreams. Find their contact details below.",
  keywords:
    "University of Debrecen, South Asia Representatives, education, contact, guidance",
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

export interface Location {
  organizationName: string;
  representative: string;
  address: string;
  tel: string;
  mobile: string;
  email: string;
  website: string;
  Timing: string;
  lat: string;
  long: string;
}

const Page: React.FC = () => {
  const location: Location[] = mapdata.locations;

  return (
    <div className="w-full px-4 sm:px-20 xl:px-40 my-16">
      <div className="">
        <h1 className=" text-[27px] text-[#155744] pb-4 font-bold">
          Representatives
        </h1>
        <div className="flex justify-center">
          <div
            className={`w-[1200px] flex flex-col justify-center items-center min-h-[60vh] h-full`}
          >
            <p className="my-5">
              The South Asia Regional Office of the University of Debrecen takes
              pride in introducing its representatives spread across the region.
              Alongside the skilled team in the regional office, these
              representatives contribute to ensuring a seamless journey for
              students toward their future. For additional details about the
              representatives, please consult the map below.
            </p>
            {location ? (
              <MapComponent location={location} height="60vh" />
            ) : (
              <p>Loading map...</p>
            )}
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className="my-4 text-3xl font-bold font-nunito text-[#114c3a]">
          Countries:
        </h1>
        <p className="my-2 text-lg font-nunito text-[#114c3a]">
          Click the required country to see the respective representatives.
        </p>
        <RepresentativeSearch />
      </div>
    </div>
  );
};

export default Page;
