
import React from "react";
import data from "../data.json"; // Import your JSON data
import { FaCircle } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University of Debrecen Southasia Medical Degree Programs",
  description:
    "Explore 80+ degree programs in English at University of Debrecen, covering Medical School, Foundation, Undergrad, Grad, and PhD/Doctoral. Admission criteria for medical programs. Compulsory entrance exam for all applicants. Biology is mandatory, with a choice between Physics and Chemistry.",
  keywords:
    "University of Debrecen, Medical Degree Programs, English-taught programs, Foundation Programs, Undergraduate Programs, Graduate Programs, PhD Programs",
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
  return (
    <>
      <div className="lg:px-[10%] px-4 py-12 font-nunito">
        <h1 className="font-nunito text-[36px] pt-8 text-[#1e5e4b] font-bold">
          {" "}
          Medical Program Entrance Exam
        </h1>

        <div>
          {/* <TabsComponent data={data.ApplicationPagesData.Medicaldata} /> */}
          {data.ApplicationPagesData.Medicaldata.map((tabGroup, groupIndex) => (
            <div key={groupIndex} className={`text-base text-[#155744] mb-6z `}>
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

export default App;
