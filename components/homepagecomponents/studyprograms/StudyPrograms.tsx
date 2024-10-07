import { Button } from "antd";
import image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const StudyPrograms = () => {
  const Images = [
    {
      url1: "",
      url2: "/foundation.jpg",
      url3: "/graduate.jpg",
      url4: "/undergraduate.jpg",
      url5: "/graduate.jpg",
      url6: "/Medical.jpg",
      url7: "/PHD.jpg",
    },
  ];

  const [isHoveredProgram, setIsHoveredProgram] = useState(false);
  const [isHoveredPG, setIsHoveredPG] = useState(false);
  const [isHoveredFP, setIsHoveredFP] = useState(false);
  const [isHoveredUG, setIsHoveredUG] = useState(false);
  const [isHoveredGS, setIsHoveredGS] = useState(false);
  const [isHoveredMS, setIsHoveredMS] = useState(false);
  const [isHoveredPhD, setIsHoveredPhD] = useState(false);
  const [image, setImage] = useState(Images[0].url1);

  function restoreBg() {
    setImage(Images[0].url1); // Change the URL to default
    setIsHoveredProgram(false);
    setIsHoveredPG(false);
    setIsHoveredFP(false);
    setIsHoveredUG(false);
    setIsHoveredGS(false);
    setIsHoveredMS(false);
    setIsHoveredPhD(false);
  }

  return (
    <div
      className="h-full transition-all duration-100 bg-cover bg-center hidden lg:block "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="relative">
        <div className="absolute flex justify-center items-center top-40 w-full">
          <svg
            // 646
            xmlns="http://www.w3.org/2000/svg"
            width="646"
            height="489"
            viewBox="0 0 646 489"
            fill="none"
            className="absolute ml-96 mt-16"
          >
            <path
              d="M0.940918 0.808105L78.1893 268.14L450.11 9.4877L645.401 241.233L546.887 487.733L244.403 433.052L633.683 241.233M633.683 241.233L78.1893 275.517L442.732 9.4877L8.31857 0.808105L539.076 480.356L442.732 25.5449L264.8 433.052L8.31857 9.4877L633.683 241.233Z"
              className={`${
                isHoveredProgram ? "stroke-[#FFFFFF]" : "stroke-[#114C3A]"
              } ${isHoveredProgram ? "opacity-[100]" : "opacity-[0.26]"}`}
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="880"
            height="418"
            viewBox="0 0 880 418"
            fill="none"
            className="ml-[104px]"
          >
            <path
              d="M335.5 264.5L2 47L261.5 0.5L696.5 9.5L2 42M2 42L878.5 226L503.5 416.5L2 42Z"
              className={`${
                isHoveredProgram ? "stroke-[#FFFFFF]" : "stroke-[#114C3A]"
              } ${isHoveredProgram ? "opacity-[100]" : "opacity-[0.26]"}`}
            />
          </svg>
        </div>
        <h1
          className={`text-[90px] font-bold pt-72 px-28 ml-16 transition-all duration-500 ${
            isHoveredProgram ? "font-outline-2" : "text-[rgba(245,180,24,1)]"
          }`}
        >
          Study Programs
        </h1>
        <div className="">
          <div className="h-52">
            {isHoveredProgram === false ? (
              <div className="w-[40%] ml-16 px-28">
                The University of Debrecen takes pride in providing a wide
                collection of over 100 degree programs, all fully taught in
                English.{" "}
                <span>
                  Start your career with a widely accredited European degree at
                  UD.
                </span>
              </div>
            ) : (
              <p className="w-[40%] px-28"></p>
            )}
          </div>
        </div>
      </div>
      <div className="flex  px-28">
        <div
          onMouseEnter={() => {
            setImage(Images[0].url2);
            setIsHoveredProgram(true);
            setIsHoveredFP(true);
          }}
          onMouseLeave={restoreBg}
          className={`group transform -translate-y-[550px] translate-x-[500px]`}
        >
          <Link href={"/foundation-program"}>
            <div className="text-3xl text-[#114c3a] text-center font-bold duration-500 cursor-pointer group-hover:text-4xl group-hover:font-outline-2 group-hover:scale-125">
              Foundation Program
            </div>
            <div
              className={`h-10 mt-5 rounded flex justify-center transition-all duration-500 ${
                isHoveredFP ? "block" : "hidden"
              }`}
            >
              <Button />
            </div>
          </Link>
        </div>

        <div
          onMouseEnter={() => {
            setImage(Images[0].url3);
            setIsHoveredProgram(true);
            setIsHoveredPG(true);
          }}
          onMouseLeave={restoreBg}
          className="group transform -translate-y-[480px] translate-x-[0px]"
        >
          <Link href={"/postgraduate-program"}>
            <div className="text-3xl text-[#114c3a] text-center font-bold duration-500 cursor-pointer group-hover:text-4xl group-hover:font-outline-2 group-hover:scale-125">
              Postgraduate Diploma
            </div>
            <div
              className={`h-10 mt-5 rounded flex justify-center transition-all duration-500 ${
                isHoveredPG ? "block" : "hidden"
              }`}
            >
              <Button />
            </div>
          </Link>
        </div>

        <div
          onMouseEnter={() => {
            setImage(Images[0].url4);
            setIsHoveredProgram(true);
            setIsHoveredUG(true);
          }}
          onMouseLeave={restoreBg}
          className="group transform -translate-y-[530px] translate-x-[560px]"
        >
          <Link href={"/undergraduate-program"}>
            <div className="text-3xl text-[#114c3a] text-center font-bold duration-500 cursor-pointer group-hover:text-4xl group-hover:font-outline-2 group-hover:scale-125">
              Undergraduate Diploma
            </div>
            <div
              className={`h-10 mt-5 rounded flex justify-center transition-all duration-500 ${
                isHoveredUG ? "block" : "hidden"
              }`}
            >
              <Button />
            </div>
          </Link>
        </div>

        <div
          onMouseEnter={() => {
            setImage(Images[0].url5);
            setIsHoveredProgram(true);
            setIsHoveredGS(true);
          }}
          onMouseLeave={restoreBg}
          className="group transform -translate-y-[100px]"
        >
          <Link href={"/graduate-program"}>
            <div className="text-3xl text-[#114c3a] text-center font-bold duration-500 cursor-pointer group-hover:text-4xl group-hover:font-outline-2 group-hover:scale-125">
              Graduate Study Program
            </div>
            <div
              className={`h-10 mt-5 rounded flex justify-center transition-all duration-500 ${
                isHoveredGS ? "block" : "hidden"
              }`}
            >
              <Button />
            </div>
          </Link>
        </div>

        <div
          onMouseEnter={() => {
            setImage(Images[0].url6);
            setIsHoveredProgram(true);
            setIsHoveredMS(true);
          }}
          onMouseLeave={restoreBg}
          className="group transform -translate-y-[30px] translate-x-[50px]"
        >
          <Link href={"/medical-study-program"}>
            <div className="text-3xl text-[#114c3a] text-center font-bold duration-500 cursor-pointer group-hover:text-4xl group-hover:font-outline-2 group-hover:scale-125">
              Medical Study Program
            </div>
            <div
              className={`h-10 mt-5 rounded flex justify-center transition-all duration-500 ${
                isHoveredMS ? "block" : "hidden"
              }`}
            >
              <Button />
            </div>
          </Link>
        </div>

        <div
          onMouseEnter={() => {
            setImage(Images[0].url7);
            setIsHoveredProgram(true);
            setIsHoveredPhD(true);
          }}
          onMouseLeave={restoreBg}
          className="group transform -translate-y-[280px] -translate-x-[50px]"
        >
          <Link href={"/doctoral-program"}>
            <div className=" text-3xl text-[#114c3a] text-center font-bold duration-500 cursor-pointer group-hover:text-4xl group-hover:font-outline-2 group-hover:scale-125">
              PhD / Doctoral Program
            </div>
            <div
              className={`h-10 mt-5 rounded flex justify-center transition-all duration-500 ${
                isHoveredPhD ? "block" : "hidden"
              }`}
            >
              <Button />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudyPrograms;
