import React from "react";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";

// Define the types
interface LinkData {
  title: string;
  url: string;
}

interface AboutData {
  title: string;
  links: {
    [key: string]: LinkData;
  };
  bullets: string[] | Record<string, never>; // Updated to allow an empty object
  text: TextItem[];
  image: string;
  image1: string;
}

interface TextItem {
  heading: string;
  content: string;
  subpara?: string;
  bullets?: string[];
}

// Props for the component
interface AboutPageProps {
  data: AboutData;
}

const SimilarPageStructure: React.FC<AboutPageProps> = ({ data }) => {
  const renderContentWithLinks = (content: string) => {
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

      // Check if the key exists in data.links
      if (linkKey in data.links) {
        const url = data.links[linkKey].url;

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
      } else {
        // If the key doesn't exist, render it as plain text
        elements.push(text);
      }

      lastIndex = offset + match.length;

      return match;
    });

    // Add the remaining text after the last link
    if (lastIndex < content.length) {
      elements.push(content.substring(lastIndex));
    }

    return elements;
  };

  return (
    <div className="text-[18px] font-nunito">
      <div className="hidden md:flex">
        <img
          src={data.image}
          className="h-[310px] object-cover w-full"
          alt="about image"
          height={2000}
          width={2000}
        />
      </div>
      <div className="flex md:hidden">
        <img
          src={data.image1}
          className="h-[310px] object-cover w-full"
          alt="about image"
          height={2000}
          width={2000}
        />
      </div>
      <div className="px-4 lg:px-[15%] pt-12">
        {data.text.map((item, index) => (
          <div key={index} className="pb-2 leading-8 text-justify">
            <p>{item.subpara}</p>
          </div>
        ))}
        {data.title && (
          <h1 className="text-[27px] text-[#155744] pb-4 font-bold">
            {data.title}
          </h1>
        )}

        <div>
          {data.text.map((item, index) => (
            <div key={index} className="pb-4 leading-8 text-justify">
              <h2 className="text-[35px] text-[#f5b418] font-bold pb-4">
                {item.heading}
              </h2>
              <p className="pb-2 text-justify">
                {renderContentWithLinks(item.content)}
              </p>
              {item.content === "Medical programs are accredited by:" && (
                <>
                  <ul>
                    {data.bullets.map((bullet: string, bulletIndex: number) => (
                      <li
                        key={bulletIndex}
                        className="font-bold text-[16px] lg:text-[18px]"
                      >
                        <FaCircle size={8} className="inline-block  mr-2" />{" "}
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <ul>
                {item.bullets?.map((bullet: string, bulletIndex: number) => (
                  <li
                    key={bulletIndex}
                    className="font-bold text-[16px] lg:text-[18px]"
                  >
                    <FaCircle size={8} className="inline-block  mr-2" />{" "}
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarPageStructure;
