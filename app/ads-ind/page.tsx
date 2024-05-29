"use client";
import React, { useEffect } from "react";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const AdsInd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <div>
        <div className="font-nunito">
          {/* ------------------------------------------------------Background Picture and Reg Form-------------------------------------------------- */}

          <div className="relative">
            <div className="hidden md:block">
              <div
                className="bg-cover min-h-screen relative"
                style={{
                  backgroundImage: `url("/ads-ind(Laptop).jpg")`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>
            </div>
            <div className="absolute bottom-10 left-8 w-2/4 hidden sm:block">
              <Link href={"#meeting"}>
                <button className="bg-[#155744] border-2 border-black p-5 w-3/5 rounded-2xl mt-10 text-[#F5B418] text-2xl lg:text-3xl font-semibold">
                  Apply Now
                </button>
              </Link>
            </div>
            <div className="md:hidden">
              <img className="" alt="mob_pic" src="/mob  for sch.jpg" />
            </div>
          </div>

          {/* ------------------------------------------------------------------Benefits------------------------------------------------------------ */}

          <div className="">
            <h1 className="text-center font-serif lg:text-3xl text-lg font-bold my-5 text-[#114c3a]">
              BENEFITS AND PROPOSITIONS
            </h1>
            <div className="flex justify-between py-10 md:px-32 bg-[#F5B418]">
              <div className="text-white text-2xl font-bold">
                <ul>
                  <li className="p-1 grid grid-cols-12 lg:flex">
                    <FaStar size={24} className="col-span-1" />
                    <span className="ml-2 col-span-11">Medical Insurance</span>
                  </li>
                  <li className="p-1 grid grid-cols-12 lg:flex">
                    <FaStar size={24} className="col-span-1" />
                    <span className="ml-2 col-span-11">
                      Upto 90% reduction on full annual tuition fee
                    </span>
                  </li>
                  <li className="p-1 grid grid-cols-12 lg:flex">
                    <FaStar size={24} className="col-span-1" />
                    <span className="ml-2 col-span-11">
                      Scholarships will be awarded for all years of education
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------Description------------------------------------------------------------------ */}

          <div className="lg:flex justify-between py-5 lg:px-32 px-2">
            <div className="w-full lg:w-2/5 lg:mb-0 flex items-center">
              <p className="w-full lg:w-3/4 text-lg text-justify">
                The UD International Scholarship 2024 is a gateway for
                international students to European higher education. The
                scholarship is available in the fields of natural sciences,
                health sciences, engineering, technology, and mathematics for
                bachelor’s and master’s programs. A golden opportunity for
                international students to enter into professional internship
                programs.
              </p>
            </div>

            <div className="w-full lg:w-3/5 flex items-center">
              <img
                src="https://www.ebcf.org/wp-content/uploads/2021/11/Scholarships_Header.jpg"
                alt="desc_pic"
                className="w-full object-cover rounded-lg h-[350px]"
              />
            </div>

            <div className="flex justify-center sm:hidden">
              <Link href={"#meeting"}>
                <button className="bg-[#155744] p-4 w-52 rounded-lg mt-10 text-white text-lg">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="flex justify-center mb-5">
              <Link href={"#meeting"}>
                <button className="bg-[#155744] hover:scale-105 hover:bg-[#F5B418] transition transform duration-500 p-4 w-52 rounded-lg mt-10 text-white text-lg">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          {/* -------------------------------------------------------------------------About-------------------------------------------------------------------------- */}

          <div>
            <div className="">
              <h1 className="bg-[#155744] text-white text-4xl p-4 text-center font-bold font-serif">
                About University
              </h1>
              <div className="lg:flex justify-between py-10 lg:px-32 px-2">
                <div className="w-full lg:w-3/5 flex items-center mb-5 lg:mb-0">
                  <img
                    src="/desc.jpg"
                    alt="desc_pic"
                    className="rounded-lg object-cover h-[350px]"
                  />
                </div>

                <div className="w-full lg:w-2/5 text-justify flex justify-end">
                  <p className="w-full lg:ml-5 text-lg">
                    The University of Debrecen is the oldest higher education
                    institute in Hungary since 1538. With a Ranking of the top
                    500 in the world, the University of Debrecen is among the
                    top three higher education universities in Hungary. The
                    university proudly offers more than 100 international degree
                    programs in 14 faculties fully taught in English. It is
                    offering Foundation Programs, Undergraduate Programs, Post
                    Graduate Programs, and Post Doctoral/PhD Programs. The
                    fields of study included are agriculture, business,
                    engineering, health, humanities, IT, law, medical, music,
                    science, and much more. The University comprises of 30,000
                    student body with 7300 international students from more than
                    130 countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------Ready to Apply-------------------------------------------------------------------- */}

          <div className="bg-[#F5B418] h-[400px] flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-7xl text-white font-semibold font-serif">
              Ready to Apply ?
            </h1>
            <p className="mt-5 text-white text-lg md:text-2xl font-semibold">
              Oppurtunity to get upto 90% Scholarship
            </p>

            <div className="hidden sm:block">
              <Link href={"#meeting"}>
                <button className="bg-[#155744] hover:scale-105 hover:bg-white hover:text-black transition transform duration-500 p-4 w-52 rounded-lg mt-10 text-white text-lg">
                  Apply Now
                </button>
              </Link>
            </div>

            <div className="sm:hidden">
              <Link href={"#meeting"}>
                <button className="bg-[#155744] p-4 w-52 rounded-lg mt-10 text-white text-lg">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          {/* --------------------------------------------------------------------Testimonials------------------------------------------------------------------ */}

          <div className="mt-20">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#114c3a] font-bold my-4">
              INTERNATIONAL STUDENTS TESTIMONIALS
            </h1>
            <div className="lg:flex flex-wrap justify-around w-full p-10">
              <div className="lg:w-2/5 rounded-2xl mb-6 md:mb-16] lg:mb-5">
                <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                  <iframe
                    className="w-full rounded-lg aspect-video"
                    src="https://www.youtube.com/embed/hqnkfJOHwvc?si=l3Z904KlhKU2B41M"
                  />
                </div>
              </div>

              <div className="lg:w-2/5 rounded-2xl mb-6 md:mb-16 lg:mb-5">
                <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                  <iframe
                    className="w-full rounded-lg aspect-video"
                    src="https://www.youtube.com/embed/7tdbiraswz4?si=EjM6B4mxLh_KdvOf"
                  />
                </div>
              </div>

              <div className="lg:w-2/5 rounded-2xl mb-6 md:mb-16 lg:mb-5">
                <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                  <iframe
                    className="w-full rounded-lg aspect-video"
                    src="https://www.youtube.com/embed/hxgfwYZZECs?si=yWkQoJMS7Weqgjtl"
                  />
                </div>
              </div>

              <div className="lg:w-2/5 rounded-2xl mb-6 md:mb-16 lg:mb-5">
                <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                  <iframe
                    className="w-full rounded-lg aspect-video"
                    src="https://www.youtube.com/embed/HO5f6DLqcWA?si=1-otahAJT5kIxN5L"
                  />
                </div>
              </div>
            </div>

            <div className="hidden sm:block">
              <div className="flex justify-center mb-5">
                <Link href={"#meeting"}>
                  <button className="bg-[#155744] hover:scale-105 hover:bg-[#F5B418] transition transform duration-500 p-4 w-52 rounded-lg mt-10 text-white text-lg">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center mb-5 sm:hidden">
              <Link href={"#meeting"}>
                <button className="bg-[#155744] p-4 w-52 rounded-lg mt-10 text-white text-lg">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          {/* --------------------------------------------------------------------Book a Meeting-------------------------------------------------------------- */}

          <div
            id="meeting"
            className="calendly-inline-widget"
            data-url="https://calendly.com/uod/15min"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>

          {/* -----------------------------------------------------------------Footer With Uni Logo------------------------------------------------------------- */}

          <div className="flex justify-center bg-[#155744]">
            <img
              src="/Logo.png"
              alt="UniLogo"
              className="lg:w-80 lg:h-32 md:w-60 w-40 my-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdsInd;
