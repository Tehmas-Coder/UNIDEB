"use client";
import router, { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

interface AccordionItemData {
  name: string;
  items: { title: string }[];
}

interface AccordionComponentProps {
  program: AccordionItemData[];
  setitemID: (index: number) => void;
  setinnerLink: (index: number) => void;
  innerLink: number;
  itemID?: number;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  program,
  setitemID,
  setinnerLink,
  innerLink,
  itemID,
}) => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState<
    number | null
  >(0);

  const toggleAccordion = (index: number) => {
    console.log("Active index: " + index);
    setinnerLink(0);
    setitemID(index);
    if (activeAccordionIndex === index) {
      setActiveAccordionIndex(null);
    } else {
      setActiveAccordionIndex(index);
    }
  };

  return (
    <Accordion
      allowZeroExpanded
      className="border-none"
      preExpanded={[itemID ?? 0]}
    >
      {program.map((item, index) => (
        <AccordionItem
          key={index}
          className="border-b-2 mb-3 pb-3 font-extrabold font-nunito"
          uuid={index}
        >
          <AccordionItemHeading onClick={() => toggleAccordion(index)}>
            <AccordionItemButton className="font-bold text-[#155744] text-[15px] lg:text-[20px] cursor-pointer flex program-center">
              {activeAccordionIndex === index ? (
                <>
                  <AiFillCaretDown className="mx-2 mt-1" />
                  {item.name}
                </>
              ) : (
                <>
                  <AiFillCaretRight className="mx-2 mt-1" />
                  {item.name}
                </>
              )}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ul>
              {item?.items?.map((innerItem, innerIndex) => {
                return (
                  <li
                    key={innerIndex}
                    onClick={() => setinnerLink(innerIndex)}
                    className={`relative w-full px-4 py-2 mb-2 text-left ${
                      innerLink === innerIndex
                        ? "bg-[#F5B418] text-[#155744] font-bold border lg:border-y lg:border-l border-[#155744]"
                        : "bg-gray-200"
                    }`}
                  >
                    <span className="cursor-pointer font-normal text-[12px] sm:text-[14px] font-nunito ">
                      {innerItem.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
