import Link from "next/link";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";

interface LinkData {
  title: string;
  url: string;
}

interface TabData {
  heading: string;
  links: {
    link_1: LinkData;
    link_2: LinkData;
    link_3: LinkData;
  };
  context: string;
  bullets: string[];
  address: string[];
}

interface FacultiesData {
  title: string; // Add this property
  text: TabData[];
}

interface TabsComponentProps {
  data: FacultiesData[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContentWithLinks = (
    content: string,
    links?: TabData["links"]
  ) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    const elements = [];

    content.replace(linkRegex, (match, text, key, offset) => {
      // Add the preceding text as a text element
      if (offset > lastIndex) {
        elements.push(content.substring(lastIndex, offset));
      }

      // Extract the key (e.g., "link_1") from the link format
      const linkKey = key.trim();

      // Check if links is defined and if the key exists in links
      if (links && linkKey in links) {
        const url = (links as any)[linkKey].url;
        const title = (links as any)[linkKey].title;

        // Check if title and url are defined and not empty
        if (title && title.trim() !== "" && url && url.trim() !== "") {
          // Add the link as a Next.js Link component with target="_blank"
          elements.push(
            <Link
              target="_blank"
              className=" font-bold text-[#F5B418] hover:text-[#144438] hover:underline"
              href={url}
              key={offset}
            >
              {text}
            </Link>
          );
          lastIndex = offset + match.length;
        } else {
          // If title or url are empty, render it as plain text
          elements.push(text);
        }
      } else {
        // If the key doesn't exist, render it as plain text
        elements.push(text);
      }

      return match;
    });

    // Add the remaining text after the last link
    if (lastIndex < content.length) {
      elements.push(content.substring(lastIndex));
    }

    return elements;
  };

  return (
    <div className="lg:flex lg:flex-row flex-col w-full">
      <div className="w-full lg:w-[300px]  top-0 bg-white">
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
        className="w-full lg:w-[75%] lg:ml-12 items-center mt-8 lg:mt-0 lg:px-4 pb-4"
        style={{ minHeight: "300px" }}
      >
        {/* Render the content of the active tab */}
        {data.map((tabGroup, groupIndex) => (
          <div
            key={groupIndex}
            className={`text-base text-[#155744] mb-6 -mt-3 ${
              activeTab !== groupIndex ? "hidden" : ""
            }`}
          >
            {tabGroup.text.map((tab, tabIndex) => (
              <div key={tabIndex}>
                {tab.heading && (
                  <span className=" font-bold text-[18px] pb-2">
                    {tab.heading}
                  </span>
                )}
                {tab.context && (
                  <span className=" block text-justify pt-2">
                    {renderContentWithLinks(tab.context, tab.links)}
                  </span>
                )}
                {tab.bullets && (
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
                        <span>{renderContentWithLinks(bullet, tab.links)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {tab.address && (
                  <p className="-mt-4 pb-4">
                    {tab.address.map((add, addIndex) => (
                      <span key={addIndex} className="block">
                        {renderContentWithLinks(add, tab.links)}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
