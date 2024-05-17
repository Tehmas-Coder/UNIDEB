import React, { ReactElement } from 'react';

interface CardProps {
  logo: ReactElement;
  title: string;
  para: string;
}

const Card: React.FC<CardProps> = ({ logo, title, para }: CardProps) => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center lg:justify-start border-2 min-h-[190px] rounded-lg border-gray-200 p-4">
      <div className="lg:pr-4 hover:scale-125 transition duration-300 text-[#155744]">{logo}</div>
      <div className="lg:pl-4 lg:pt-0 pt-4 text-center lg:text-left">
        <h1 className="text-[24px] font-semibold pb-2">{title}</h1>
        <p className="text-[15px] font-normal text-justify">{para}</p>
      </div>
    </div>
  );
};

export default Card;
