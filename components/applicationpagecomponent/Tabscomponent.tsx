"use client";
import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";

// Define the interface for the JSON data
interface TabData {
  heading: string;
  context: string;
  bullets: string[];
}

interface ApplicationData {
  title: string;
  text: TabData[];
}

interface TabsComponentProps {
  data: ApplicationData[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lg:flex lg:flex-row flex-col w-full">
      <div className="w-full lg:w-[300px] sticky top-0 bg-white">
        {/* Render the tab buttons */}
        {data.map((tabGroup, groupIndex) => (
          <button
            key={groupIndex}
            onClick={() => setActiveTab(groupIndex)}
            className={`relative w-full px-4 py-2 mb-2 text-left ${
              activeTab === groupIndex
                ? "bg-[#F5B418] text-[#155744] font-bold border lg:border-y lg:border-l border-[#155744]"
                : "bg-gray-200"
            }`}
          >
            {tabGroup.title}
          </button>
        ))}
      </div>
      <div
        className="w-full lg:w-[76%] lg:ml-12 items-center mt-8 lg:mt-0 lg:px-4 pb-4"
        style={{ minHeight: "300px" }}
      >
        {/* Render the content of the active tab */}
        {data.map((tabGroup, groupIndex) => (
          <div
            key={groupIndex}
            className={`text-base text-[#155744] mb-6z ${
              activeTab !== groupIndex ? "hidden" : ""
            }`}
          >
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
                      style={{ display: "flex", alignItems: "flex-start" }}
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
  );
};

export default TabsComponent;
