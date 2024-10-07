"use client";
import React, { useState } from "react";
import TabsComponent from "@/components/applicationpagecomponent/Tabscomponent";
import data from "../data.json"; // Import your JSON data
import { Metadata } from "next";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";

// Define the interface for the JSON data
interface LinkData {
  title: string;
  url: string;
}

interface TabData {
  heading: string;
  context: string;
  bullets: string[];
}

interface ApplicationGroup {
  title: string;
  links?: Record<string, LinkData>;
  text: TabData[];
}

interface TabsComponentProps {
  data: ApplicationGroup[];
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = (tab: TabData) => (
    <div key={tab.heading}>
      <span className="block font-bold text-[18px] pb-2">{tab.heading}</span>
      <div
        className="block text-justify"
        dangerouslySetInnerHTML={{
          __html: parseLinks(tab.context, activeTab),
        }}
      />
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
  );

  const parseLinks = (text: string, tabIdx: number) => {
    const links = data.ApplicationPagesData.application[tabIdx]
      ?.links as Record<string, LinkData>;

    // Replace [here](link_1) and [here](link_2) with clickable links
    return text.replace(/\[here\]\((link_[12])\)/g, (match, linkKey) =>
      links?.[linkKey]
        ? `<a href="${links[linkKey].url}">${links[linkKey].title}</a>`
        : match
    );
  };

  return (
    <>
      <div className="lg:px-[10%] px-4 py-12 font-nunito">
        <h1 className="font-nunito text-[36px] pt-8 text-[#1e5e4b] font-bold">
          Application Process
        </h1>
        <div className="flex justify-between">
          <p className="text-[13px] font-normal py-6">
            Find out all the necessary steps and guidelines required to start
            the application process below:
          </p>

          <Link href="/download-app-form/">
            <p className="text-lg text-[#F5B418] font-bold py-6">
              Download Application form
            </p>
          </Link>
        </div>
        <div className="lg:flex lg:flex-row flex-col w-full">
          <div className="w-full lg:w-[300px] sticky top-0 bg-white">
            {/* Render the tab buttons */}
            {data.ApplicationPagesData.application.map(
              (tabGroup, groupIndex) => (
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
              )
            )}
          </div>
          <div
            className="w-full lg:w-[76%] lg:ml-12 items-center mt-8 lg:mt-0 lg:px-4 pb-4"
            style={{ minHeight: "300px" }}
          >
            {/* Render the content of the active tab */}
            {data.ApplicationPagesData.application.map(
              (tabGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className={`text-base text-[#155744] mb-6z ${
                    activeTab !== groupIndex ? "hidden" : ""
                  }`}
                >
                  {tabGroup.text.map((tab, tabIndex) => renderContent(tab))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
