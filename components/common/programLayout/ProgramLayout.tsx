"use client";
import React, { useEffect, useState } from "react";
import AccordionComponent from "../accordion/Accordion";
import { FaCircle } from "react-icons/fa";
interface ProgramData {
  name: string;
  items: {
    title: string;
    text: {
      heading: string;
      context: string | string[]; // Change this line
      bullets: string[];
    }[];
  }[];
}

interface ProgramLayoutProps {
  data: ProgramData[];
  heading: string;
}

const ProgramLayout: React.FC<ProgramLayoutProps> = ({ data, heading }) => {
  // const [innerLink, setInnerLink] = useState<number>(
  //   Number(
  //     window.location.href.split("?")[1]?.split("&")[1]?.split("=")[1] ?? 0
  //   )
  // );
  // const [itemID, setItemID] = useState<number>(
  //   Number(
  //     window.location.href.split("?")[1]?.split("&")[0]?.split("=")[1] ?? 0
  //   )
  // );

  // useEffect(() => {
  //   // Set the current URL with the innerLink appended
  //   const newUrl =
  //     window.location.href.split("?")[0] + `?item=${itemID}&id=${innerLink}`;
  //   window.history.pushState({ path: newUrl }, "", newUrl);
  // }, [innerLink, itemID]);

  const [innerLink, setInnerLink] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return Number(
        window.location.href.split("?")[1]?.split("&")[1]?.split("=")[1] ?? 0
      );
    }
    return 0;
  });

  const [itemID, setItemID] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return Number(
        window.location.href.split("?")[1]?.split("&")[0]?.split("=")[1] ?? 0
      );
    }
    return 0;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newUrl =
        window.location.href.split("?")[0] + `?item=${itemID}&id=${innerLink}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  }, [innerLink, itemID]);

  // const [innerLink, setInnerLink] = useState<number>(0);
  // const [itemID, setItemID] = useState<number>(0);

  // useEffect(() => {
  //   // const newUrl = `/undergraduate-program?item=${itemID}&id=${innerLink}`;
  //   const newUrl =
  //     window.location.href.split("?")[0] + `?item=${itemID}&id=${innerLink}`;
  //   window.history.pushState({ path: newUrl }, "", newUrl);
  // }, [innerLink, itemID]);

  return (
    <>
      <div className="h-[310px] w-full hidden lg:block ">
        <img
          src="/lapp.jpeg"
          width={1000}
          height={1000}
          alt="image"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="lg:px-[10%] px-4 py-12 font-nunito">
        <h1 className="font-nunito text-[28px] lg:text-[36px] pt-8 text-[#1e5e4b] font-bold">
          {heading}
        </h1>
        <div className="flex justify-center items-center py-10">
          <div className="flex flex-col min-h-[50vh] lg:justify-start w-full lg:flex-row">
            <div className="w-full min-w-[28%] lg:mr-10 ">
              <AccordionComponent
                program={data}
                setinnerLink={setInnerLink}
                setitemID={setItemID}
                innerLink={innerLink}
                itemID={itemID}
              />
            </div>
            <div className="mt-10 px-2 w-full min-w-[72%] lg:mt-0">
              {data[itemID]?.items[innerLink]?.text.map((item, index) => (
                <div key={index} className="pb-2 leading-8 ">
                  <span className="pb-2 text-[16px] text-[#155744] ">
                    <span className=" text-[18px] font-bold pb-1 mr-1 block lg:inline-block">
                      {item.heading}
                    </span>
                    <span className="">{item.context}</span>
                  </span>
                  <ul className="my-2">
                    {item.bullets.map((bullet: string, bulletIndex: number) => (
                      <li key={bulletIndex}>
                        <FaCircle size={6} className="inline-block mr-2" />{" "}
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramLayout;
