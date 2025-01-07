import TopNavBar from "@/components/header/TopNavBar";
import React, { useEffect, useState } from "react";
import CarouselComp from "@/components/carousel/Carousel";
import { Metadata } from "next";
import TesCarousel from "@/components/newcomponents/testemonialcarousels/Carousel";
import { ImCross } from "react-icons/im";
import UniDetails from "@/components/homepagecomponents/unidetails/UniDetails";
import StudyPrograms from "@/components/homepagecomponents/studyprograms/StudyPrograms";
import UpcomingDeadlines from "@/components/homepagecomponents/upcomingdeadlines/UpcomingDeadlines";
import StudyProgramsSmallScreen from "@/components/homepagecomponents/studyprogramssmallscreen/StudyProgramsSmallScreen";
import UniversityOverview from "@/components/homepagecomponents/unioverview/UniversityOverview";
import CampusLife from "@/components/homepagecomponents/campuslife/CampusLife";
import UpcomingEvents from "@/components/homepagecomponents/upcomingevents/UpcomingEvents";
import MapAndContact from "@/components/homepagecomponents/map&contact/MapAndContact";

export const metadata: Metadata = {};

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="bg-white font-nunito">
        <div className="hidden lg:block">
          <TopNavBar transparent />
        </div>

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
          <UniDetails />
        </div>

        <StudyPrograms />
        <UpcomingDeadlines />
        <StudyProgramsSmallScreen />
        <UniversityOverview />

        <div className="lg:hidden text-center mt-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#114c3a] font-bold mb-10">
            Campus Life
          </h1>
          <CarouselComp />
        </div>

        <div className="mt-14 lg:mt-20">
          <div className="text-center text-3xl md:text-4xl lg:text-5xl text-[#114c3a] font-bold my-4">
            <h1>Testimonials</h1>
          </div>
          <TesCarousel />
        </div>

        <CampusLife />
        <UpcomingEvents />
        <MapAndContact />
      </div>

      {/* ------------------------------------------------------------------PopUp---------------------------------------------------------------------- */}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg relative">
            <button
              className="absolute top-0 right-0 m-2 text-gray-400 hover:text-gray-800 cursor-pointer"
              onClick={handleClosePopup}
            >
              <ImCross />
            </button>
            <a>
              <div>
                <img
                  src="/Stipendium PopUp Image.jpeg"
                  alt="Popup Image"
                  className="h-[200px] md:h-[400px] w-[700px]"
                />
              </div>
            </a>
            <div className="mt-5">
              <p className="text-[#114c3a] text-2xl">
                For more info on Stipendium Hungaricum,
                <span className="font-bold text-[#F5B418]">
                  <a href="/google-ads/"> click here</a>
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
