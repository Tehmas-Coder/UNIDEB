"use client";
import React from "react";
import data from "../data.json";
import { FaCircle } from "react-icons/fa";
import ScrollToTop from "@/components/scrolltotop/ScrollToTop";

const Page: React.FC = () => {
  const facultiesNames = [
    "Faculty of Agricultural and Food Sciences and Environmental Management",
    "Faculty of Education for Children and Special Educational Needs",
    "Faculty of Dentistry",
    "Faculty of Economics and Business",
    "Faculty of Engineering",
    "Faculty of Health Sciences",
    "Faculty of Humanities",
    "Faculty of Informatics",
    "Faculty of Law",
    "Faculty of Medicine",
    "Faculty of Music",
    "Faculty of Pharmacy",
    "Faculty of Science and Technology",
  ];

  return (
    <>
      <div className="lg:px-[10%] px-4 py-12 font-nunito">
        <h1 className="font-nunito text-[36px] py-8 text-[#1e5e4b] font-bold">
          Faculties
        </h1>
        <p className="text-[18px] text-[#155744]  mb-10">
          The University of Debrecen boasts 13 faculties providing more than 100
          programs in English at the foundation level, undergraduate level,
          graduate level, and doctoral/Ph.D. level. The faculties&apos;
          commitment to delivering high-quality education plays a pivotal role
          in shaping students into skilled professionals, paving the way for
          promising career prospects.
        </p>
        {/* <div className="flex justify-center items-center">
          <TabsComponent data={data.FacultiesPagesData.Faculties} />
        </div> */}
        <ul className="list-none p-0">
          {" "}
          {/* Remove default list styles */}
          {facultiesNames.map((name, index) => (
            <li
              key={index}
              className="flex items-center text-[18px] text-[#155744]  mb-2"
            >
              <a
                href={"#" + (index + 1).toString()}
                className="flex items-center hover:text-[#F5B418] hover:underline hover:underline-offset-4"
              >
                <FaCircle className="mr-2" size={8} />
                {name}
              </a>
            </li>
          ))}
        </ul>

        <div>
          {data.FacultiesPagesData.Faculties.map((tabGroup, groupIndex) => (
            <div
              id={groupIndex.toString()}
              key={groupIndex}
              className={`text-base text-[#155744] mb-6z`}
            >
              <h1 className="font-bold text-3xl text-[#F5B418] underline underline-offset-4 my-5">
                {tabGroup.title}
              </h1>
              {tabGroup.text.map((tab, tabIndex) => (
                <div key={tabIndex}>
                  <span className="block font-bold text-[18px] pb-2">
                    {tab.heading}
                  </span>
                  <span className="block text-justify">{tab.context}</span>
                  <ul
                    className="pl-6 pt-4 pb-4"
                    style={{ listStyleType: "none", paddingLeft: "0" }}
                  >
                    {tab.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="pb-1 text-justify"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            marginRight: "8px",
                            flexShrink: 0,
                            marginTop: "8px",
                          }}
                        >
                          <FaCircle size={8} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
