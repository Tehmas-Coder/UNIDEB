import Image from "next/image";
import React from "react";
import { HiOutlineDocument } from "react-icons/hi";
import { LuMessagesSquare } from "react-icons/lu";
import { BiTimeFive } from "react-icons/bi";

interface ArticleContent {
  heading: string;
  text: string;
  bullets?: string[]; // Changed this to match your data
}

interface Article {
  id: number;
  title: string;
  author: string;
  authorpic: string;
  date: string;
  readTime: string;
  content: ArticleContent[];
  image: string;
  comments: number;
}

interface CardData {
  id: number;
  title: string;
  author: string;
  authorpic: string;
  date: string;
  readTime: string;
  content: ArticleContent[];
  image: string;
  comments: number;
}

interface CardProps {
  card: CardData;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="bg-white w-[350px] h-[545px] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative w-full h-[300px]">
        <img
          src={card.image}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <p className="px-6 pt-2 text-[18px] font-normal text-[#F5B418] cursor-pointer hover:text-[#144438]">
        {card.date}
      </p>
      <div className="px-4 pb-8 pt-2">
        <h2 className="leading-[35px] font-extrabold md:h-36 text-[#F5B418] text-[26px] hover:text-[#144438] cursor-pointer mb-2">
          {card.title}
        </h2>

        <div className="flex justify-between pt-4">
          <button className="btn flex justify-center text-sm items-center bg-none border hover:border-none text-[#155744] hover:text-white hover:bg-[#F5B418]  py-1 px-2 rounded">
            <span className="flex items-center space-x-1">
              <HiOutlineDocument className="text-xl" />
              <span>Blog</span>
            </span>
          </button>
          <button className="btn flex justify-center text-sm items-center bg-none border hover:border-none text-[#155744] hover:text-white hover:bg-[#F5B418]  py-1 px-2 rounded">
            <span className="flex items-center space-x-1">
              <LuMessagesSquare className="text-xl" />
              <span>Comment</span>
            </span>
          </button>
          <button className="btn flex justify-center text-sm items-center bg-none border hover:border-none text-[#155744] hover:text-white hover:bg-[#F5B418]  py-1 px-2 rounded">
            <span className="flex items-center space-x-1">
              <BiTimeFive className="text-xl" />
              <span>{card.readTime}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
