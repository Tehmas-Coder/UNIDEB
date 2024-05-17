import Image from "next/image";
import React from "react";

interface AboutCardProps {
  title: string;
  info: string[];
  image: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, info, image }) => {
  return (
    <div className="flex-1 max-w-sm bg-[#FFFFFF] border border-gray-200 rounded-lg shadow font-nunito">
      <img
        src={image}
        height={200}
        width={200}
        className="rounded-t-lg w-[100%] h-[200px] sm:h-[250px]"
        alt="homepic1"
      />
      <div className="p-5">
        <span className="mt-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 border-b-4 border-[#F5B418] pb-2">
          {title}
        </span>

        <ul className="text-gray-900 text-sm list-disc pl-5 mt-8">
          {info.map((infoItem, index) => (
            <li className="mb-2" key={index}>
              {infoItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
