import React from "react";
import { FaCircle } from "react-icons/fa";
import data from "../data.json";
import { Metadata } from "next";
import DynamicContentRender from "@/components/dynamiccontentrendercomponent/DynamicContentRender";

export const metadata: Metadata = {
  title: "University of Debrecen Southasia Scholarships",
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

const page = () => {
  const scholarshipNames = [
    "UD International Scholarship 2024",
    "Stipendium Hungaricum Scholarship",
    "Scholarship for Christian Young People (SCYP)",
    "Siblings Discount",
    "Academic Scholarship",
    "Diaspora Scholarship",
  ];

  const scholarshipData = data.ScholarshipData;

  return (
    <>
      <div className="flex flex-col justify-center font-nunito pt-16 pb-12 px-4 lg:px-[14%]">
        <h1 className="lg:text-[50px] text-[35px] font-bold text-[#F5B418] py-2 pb-4">
          Scholarships
        </h1>

        <ul className="list-none p-0">
          {" "}
          {scholarshipNames.map((name, index) => (
            <>
              <li
                key={index}
                className="flex items-center text-[18px] text-[#155744]  mb-2"
              >
                <a href={"#" + index.toString()} className="flex items-center">
                  <FaCircle className="mr-2" size={8} />
                  {/* Use dangerouslySetInnerHTML to render HTML markup */}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: name.replace(
                        "NOW OPEN",
                        `<span class="bg-[#F5B418] p-1 font-bold animate-pulse">NOW OPEN !</span>`
                      ),
                    }}
                  />
                </a>
              </li>
            </>
          ))}
        </ul>

        <div>
          {scholarshipData.map((scholarship, index) => (
            <div key={index} id={index.toString()}>
              <DynamicContentRender data={scholarship} />
              {/* <div className="sm:my-5">
                <a href={scholarship.apply_link}>
                  <button className="bg-[#F5B418] hover:bg-[#155744] text-[#155744] hover:text-[#F5B418] text-lg font-semibold p-3 sm:p-0 sm:py-3 sm:px-16 rounded-2xl duration-300 hover:scale-110">
                    Apply Now
                  </button>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
