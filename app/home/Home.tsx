import TopNavBar from "@/components/header/TopNavBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { FaEnvelope, FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import Map from "@/components/map/Map";
import Contact from "@/components/contact/Contact";
import Button from "@/components/newcomponents/button/Button";
import DiscoverUD from "@/components/newcomponents/discoverUD/DiscoverUD";
import { HomePageData } from "../data.json";
import CarouselComp from "@/components/carousel/Carousel";
import { Metadata } from "next";
import TesCarousel from "@/components/newcomponents/testemonialcarousels/Carousel";
import DeadlinesCarousel from "@/components/newcomponents/deadlinecarousel/DeadlinesCarousel";
import { ImCross } from "react-icons/im";

export const metadata: Metadata = {};

const Home: React.FC = () => {
  const MapLocation = [
    {
      organizationName: "University of Debrecen, Regional Office",
      representative: "Mr. Asghar Aftab",
      address: "Level 42, Emirates Towers Sheikh Zayed Road Dubai, UAE",
      tel: "+971 50 844 8119",
      mobile: "+971 50 844 8119",
      email: "southasia@reps.unideb.hu",
      website: "https://southasia.edu.unideb.hu/",
      Timing: "10:00 AM-6:00 PM",
      lat: "25.21",
      long: "55.28",
    },
  ];

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

  const [image, setImage] = useState(Images[0].url1);
  const [isHoveredProgram, setIsHoveredProgram] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCampus, setIsHoveredCampus] = useState(false);
  const [isHoveredPG, setIsHoveredPG] = useState(false);
  const [isHoveredFP, setIsHoveredFP] = useState(false);
  const [isHoveredUG, setIsHoveredUG] = useState(false);
  const [isHoveredGS, setIsHoveredGS] = useState(false);
  const [isHoveredMS, setIsHoveredMS] = useState(false);
  const [isHoveredPhD, setIsHoveredPhD] = useState(false);

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

  const handleHover = () => {
    setIsHoveredCampus(!isHoveredCampus);
  };

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // Display the popup after 3 second

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="bg-white font-nunito">
        {/* ------------------------------------------------------------Logo & NavBar------------------------------------------------------------------ */}

        <div className="hidden lg:block">
          <TopNavBar transparent />
        </div>

        {/* ------------------------------------------------------------Background Video---------------------------------------------------------------- */}

        <div className=" relative w-full h-screen overflow-hidden font-nunito">
          <video
            className="absolute inset-0 w-full h-full"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/path-to-your-poster-image.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.4)",
            }}
          >
            <source src="/video (2).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* ------------------------------------------------------University Name and Detail---------------------------------------------------------- */}

          <div className="absolute inset-0 flex flex-col justify-center md:px-32">
            <h1 className="text-white text-md lg:text-2xl font-bold mb-4 px-5">
              {HomePageData.UniDetails.rank}
            </h1>
            <h1 className="text-white text-md lg:text-xl w-[435px] font-normal mb-4 px-5 ">
              {HomePageData.UniDetails.desc}
            </h1>
            <h1
              className="text-white text-[30px] md:text-[40px] lg:text-5xl font-bold md:mb-[70px] max-w-lg px-5"
              style={{ lineHeight: "40px" }}
            >
              {HomePageData.UniDetails.admissionsOpen} <br />
              <span className="text-md lg:text-2xl font-normal">
                For September 2024 Intake
              </span>
            </h1>
            <div className="">
              <Link
                href="https://akconsultants.agentcisapp.com/online-form/university-of-debrecen"
                target="_blank"
              >
                <button className="bg-[#F5B418] text-white px-[60px] ml-6 font-bold border-[#F5B418] py-4 rounded-3xl hover:bg-transparent hover:text-[#F5B418] hover:border hover:border-white transition duration-300">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------Study Programs---------------------------------------------------------------- */}

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
                isHoveredProgram
                  ? "font-outline-2"
                  : "text-[rgba(245,180,24,1)]"
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
                      Start your career with a widely accredited European degree
                      at UD.
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

        {/* -------------------------------------------------------------Upcoming Deadline---------------------------------------------------------------- */}

        <div className="ml-2 md:ml-10 flex justify-between items-center px-5 lg:px-36 lg:mb-20 lg:mt-32 ">
          <div className="my-8 lg:my-0">
            <h1 className="text-3xl lg:text-5xl font-bold my-3 text-[#155744]">
              Upcoming
            </h1>
            <h1 className="text-5xl lg:text-7xl font-bold my-3 text-red-700">
              Deadlines
            </h1>
            <div className="lg:w-96 md:w-[50vh] my-3">
              Don&apos;t miss out on the chance to support your academic journey
              and turn your aspirations into reality.
            </div>
            <div className="flex justify-start">
              <Link href={"/deadlines"}>
                <button className="text-white lg:text-[#155744] bg-[#155744] lg:bg-white border-2 lg:border-[1px] mt-3 border-[#155744] font-bold md:font-normal text-2xl lg:text-lg py-3 md:py-2 px-12 md:px-8 rounded hover:bg-[#155744] hover:text-white hover:text-bold transition-all duration-500">
                  Explore
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="h-80 relative mt-10 hidden md:block">
            <div>
              <img src="/time_moving_fast.gif" alt=""></img>
            </div>
          </div> */}

          <div className="w-[500px] h-[400px] hidden lg:block">
            <DeadlinesCarousel />
          </div>
        </div>

        {/* --------------------------------------------------------Study Programs Small Screen---------------------------------------------------------- */}

        <div className="bg-[#155744] w-[100%] flex flex-col items-center justify-center mb-4 pt-[50px] pb-[100px] font-nunito lg:hidden">
          <h1 className="text-[#F5B418] font-bold lg:text-[50px] mb-[80px] px-5 md:text-[40px] text-[30px] font-nunito">
            Study Programs
          </h1>
          <div className="max-w-[1400px] flex gap-5 justify-around items-center w-[100%] flex-wrap px-5 sm:py-10">
            {HomePageData.StudyProgramData.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  <div
                    className="w-[200px] py-4 sm:px-3 hover:scale-110 transition bg-white flex flex-col items-center rounded-md"
                    key={index}
                  >
                    <img
                      src={item.image}
                      alt={"image"}
                      width={200}
                      height={200}
                      className="h-[150px] hover:translate-y-[-30px] hover:scale-125 transition-transform duration-300 ease-in-out mb-5"
                    />

                    <h1 className="text-[20px] w-[90%] text-center ">
                      {item.title}
                    </h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* -----------------------------------------------------------------Overview---------------------------------------------------------------------- */}

        <div className="my-10 mx-10 md:mx-0">
          <div className=" bg-[#114c3ae5] shadow-[0px_20px_20px_10px_#2d3748] h-4 hidden lg:block" />
          <div className="md:flex md:px-4 md:justify-between  lg:justify-around items-center lg:h-52 lg:py-10 lg:px-40 bg-[#114c3a]">
            <div className="text-center py-10 lg:py-0">
              <h1 className="lg:text-6xl text-5xl text-[#F5B418] font-bold">
                {HomePageData.Overview.students}
              </h1>
              <p className="lg:text-xl md:text-lg text-white">Total Students</p>
            </div>

            <div className="text-center py-10 lg:py-0">
              <h1 className="lg:text-6xl text-5xl text-[#F5B418] font-bold">
                {HomePageData.Overview.international}
              </h1>
              <p className="lg:text-xl md:text-lg text-white">
                International Students
              </p>
            </div>

            <div className="text-center py-10 lg:py-0">
              <h1 className="lg:text-6xl text-5xl text-[#F5B418] font-bold">
                {HomePageData.Overview.faculties}
              </h1>
              <p className="lg:text-xl md:text-lg text-white">Faculties</p>
            </div>

            <div className="text-center py-10 lg:py-0">
              <h1 className="lg:text-6xl text-5xl text-[#F5B418] font-bold">
                {HomePageData.Overview.campuses}
              </h1>
              <p className="lg:text-xl md:text-lg text-white">Campuses</p>
            </div>
          </div>
          <div className="bg-[#114c3ae5] h-4 shadow-lg hidden lg:block" />
        </div>

        {/* ---------------------------------------------------------Campus Life Small Screen------------------------------------------------------------- */}

        <div className="lg:hidden text-center mt-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#114c3a] font-bold mb-10">
            Campus Life
          </h1>
          <CarouselComp />
        </div>

        {/* --------------------------------------------------------------Testimonials----------------------------------------------------------------------- */}

        <div className="mt-14 lg:mt-20">
          <div className="text-center text-3xl md:text-4xl lg:text-5xl text-[#114c3a] font-bold my-4">
            <h1>Testimonials</h1>
          </div>
          <TesCarousel />
        </div>

        {/* -------------------------------------------------------------Campus Life------------------------------------------------------------------------- */}

        <div className="hidden lg:block text-center mt-20">
          <h1 className="text-5xl text-[#114c3a] font-bold mb-16 mt-10">
            Campus Life
          </h1>
          <div
            className={`h-[14px] w-[22vw] transition-all duration-500 -translate-y-[6px] absolute ${
              isHoveredCampus ? "bg-[#114c3a]" : "bg-[rgba(245,180,24,1)]"
            }
          ${isHoveredCampus ? "translate-x-[70vw]" : "translate-x-[10vw]"}`}
          ></div>
          <img
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            src={isHoveredCampus ? "/Campus Life 11.jpg" : "/campuslife1.jpg"}
            alt="Campus Life"
            className="transition-all duration-500"
          />
          <div
            className={`h-[14px] w-[22vw] transition-all duration-500 absolute -translate-y-[6px] ${
              isHoveredCampus ? "bg-[#114c3a]" : "bg-[rgba(245,180,24,1)]"
            }
          ${!isHoveredCampus ? "translate-x-[70vw]" : "translate-x-[10vw]"}`}
          ></div>
        </div>

        {/* -------------------------------------------------------------Upcoming Events--------------------------------------------------------------------- */}

        <div className="relative hidden lg:block">
          <div
            className="bg-cover h-[1300px] opacity-20"
            style={{
              backgroundImage: `url(${"https://d1gns46gm3ntni.cloudfront.net/institutes/institute12952/1.jpg"})`,
            }}
          ></div>

          <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[560px] centered-axis-xy w-full hidden lg:block px-20">
            <div className="">
              <h1 className=" text-5xl text-[#114c3a] font-bold text-center">
                Upcoming Events
              </h1>
            </div>
            <div className="flex justify-around h-[500px]">
              {HomePageData.EventsData.map((event, index) => (
                <div
                  key={index}
                  className={`mt-20 bg-[#114c3a] h-[160px] hover:h-[350px]  w-[330px] duration-700 overflow-hidden group `}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="flex">
                    <div className="h-[60%] w-[70px] bg-[#F5B418] text-center flex items-end">
                      <div className="flex-1">
                        <p className="text-[#114c3a] font-bold">{event.date}</p>
                        <p className="text-2xl text-white font-bold">
                          {event.month}
                        </p>
                        <p className="bg-[#114c3a] h-1" />
                        <p className="bg-[#F5B418] py-1">{event.year}</p>
                      </div>
                    </div>
                    <div className="m-2 w-full h-[110px]">
                      <div className="bg-[#F5B418] w-1/2 text-center font-bold">
                        <h1 className="px-1 py-1">{event.location}</h1>
                      </div>
                      <div className="mt-4 text-white font-bold text-[16px]">
                        <h1>{event.title}</h1>
                        <p className="text-sm italic group-hover:block hidden w-[220px] transition-all text-gray-300 duration-700 mt-4">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-14">
              <Link href="/events/">
                <button className="text-xl font-bold border-2 p-4 rounded-2xl bg-[#F5B418] hover:bg-[#114c3a] transition-all duration-300 hover:text-white">
                  Explore Events
                </button>
              </Link>
            </div>
            {/* --------------------------------------------------------DISCOVER UD------------------------------------------------------- */}
            <div className="w-[70%] ml-[15%]">
              <div className="flex justify-center items-center mb-10">
                <h1 className="text-5xl font-bold text-center text-[#114c3a]">
                  Discover
                </h1>
                <p className="text-7xl text-center text-red-800 mx-6">
                  <FaLocationDot />
                </p>
                <h1 className="text-5xl font-bold text-center text-[#114c3a]">
                  University of Debrecen
                </h1>
              </div>
              <DiscoverUD />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------Map and Contact US----------------------------------------------------------------- */}

        <div className="">
          <div className="text-center mt-24 mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-[#114c3a] px-2 lg:px-0">
              Get in Touch
            </h1>
            <p className="text-md lg:text-2xl font-normal text-[#114c3a] mt-4 px-2 lg:px-0">
              Feel free to contact us if you require any assistance or guidance.
              We will respond to your enquiry promptly.
            </p>
          </div>

          <div className="lg:flex justify-center my-5">
            <div className="lg:w-[700px] px-4 lg:mt-8 lg:mr-10">
              {/* <Map /> */}

              {/* <MapComponent location={MapLocation} height="60vh" /> */}

              <div className="cursor-pointer h-64">
                <img
                  src="/HomePageMap.png"
                  alt="map"
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="text-[#155744] text-lg font-bold text-center my-10">
                UNIVERSITY OF DEBRECEN SOUTH ASIA REGIONAL OFFICE
              </h2>
              <div className="md:flex justify-between mb-4 lg:mb-0 px-2 lg:px-0">
                <div className="">
                  <div className="flex items-center my-2">
                    <span className="mx-1 md:mx-4">
                      <FaMapMarker
                        className="mx-1 h-10"
                        style={{ color: "#155744" }}
                      />
                    </span>
                    Level 42, Emirates Towers Sheikh Zayed Road Dubai, UAE
                  </div>
                  <div className="flex items-center my-2">
                    <span className="mr-1 sm:mx-3 pl-2">
                      <FaPhoneAlt style={{ color: "#155744" }} />
                    </span>{" "}
                    +971 50 844 8119
                  </div>
                  <div className="flex items-center my-2">
                    <span className="mx-1 md:mx-4">
                      <FaEnvelope
                        style={{ color: "#155744" }}
                        className="mx-1"
                      />
                    </span>{" "}
                    southasia@reps.unideb.hu
                  </div>
                </div>

                <div className="flex justify-around py-3 md:block md:py-0 -my-2 lg:-my-0">
                  <div className="my-2">
                    <Link
                      href="https://www.facebook.com/UODHROSA?mibextid=ZbWKwL "
                      target="_blank"
                    >
                      <GrFacebookOption size={36} color="#15574c" />
                    </Link>
                  </div>
                  <div className="my-2">
                    <Link
                      href="https://instagram.com/uod_sa?igshid=OGQ5ZDc2ODk2ZA== "
                      target="_blank"
                    >
                      <BiLogoInstagram size={36} color="#155744" />
                    </Link>
                  </div>
                  <div className="my-2">
                    <Link
                      href="https://twitter.com/UDebrecen38602"
                      target="_blank"
                    >
                      <BiLogoTwitter size={36} color="#155744" />
                    </Link>
                  </div>
                  <div className="my-2">
                    <Link
                      href="https://www.linkedin.com/company/university-of-debrecen-regional-office-south-asia/ "
                      target="_blank"
                    >
                      {" "}
                      <AiFillLinkedin size={36} color="#155744" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg relative">
            <button
              className="absolute top-0 right-0 m-2 text-gray-400 hover:text-gray-800 cursor-pointer"
              onClick={handleClosePopup}
            >
              <ImCross />
            </button>
            <a href="/ads-ind">
              <div>
                <img
                  src="/PopUpImage.jpeg"
                  alt="Popup Image"
                  className="h-[200px] md:h-[400px] w-[700px]"
                />
              </div>
            </a>
            <div className="mt-5">
              <p className="text-[#114c3a] text-2xl">
                For more info on UD International Scholarship,
                <span className="font-bold text-[#F5B418]">
                  <a href="/scholarship/#0"> click here</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
