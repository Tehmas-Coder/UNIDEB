"use client";
import React, { useRef, useState, Component, useEffect } from "react";
import { GoogleAdsData } from "../google-ads.json";
import Accordion from "@/components/newcomponents/accordion/accordion";
import Map from "@/components/map/Map";
import TesCarousel from "@/components/newcomponents/testemonialcarousels/Carousel";
import Reviews from "@/components/newcomponents/reviews/Reviews";
import TagManager, { TagManagerArgs } from "react-gtm-module";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { GiGraduateCap } from "react-icons/gi";
import { TiBrush } from "react-icons/ti";
import { FcGlobe } from "react-icons/fc";
import { FaTools } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import AdsCarousel from "@/components/newcomponents/adscarousel/AdsCarousel";

const GoogleAds = () => {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  // const tagManagerArgs: TagManagerArgs = {
  //   gtmId,
  // };

  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs);
  // }, []);

  // const form: any = useRef();

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   city: "",
  //   levelofstudy: "",
  //   fieldofstudy: "",
  // });

  // function handleSubmit(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   console.log(form.current);
  //   emailjs
  //     .sendForm(
  //       "service_v21hlz5",
  //       "template_tio4tgl",
  //       form.current,
  //       "TbdTx4tENgCrT9NM4"
  //     )
  //     .then((response) => {
  //       console.log("Email sent successfully:", response);
  //       // window.location.href = "/thank-you/";
  //     })
  //     .catch((error) => {
  //       console.error("Email send failed:", error);
  //     });

  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     city: "",
  //     levelofstudy: "",
  //     fieldofstudy: "",
  //   });

  //   setIsSubmitted(true);
  // }

  // const handleChange = (e: { target: { name: any; value: any } }) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  const form: any = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    levelofstudy: "",
    fieldofstudy: "",
  });

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_v21hlz5",
        "template_xcf1cmv",
        form.current,
        "TbdTx4tENgCrT9NM4"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // window.location.href = "/thank-you/";
      })
      .catch((error) => {
        console.error("Email send failed:", error);
      });

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      levelofstudy: "",
      fieldofstudy: "",
    });

    setIsSubmitted(true);
  }

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* {!isSubmitted ? (
        <div>
          <div className="font-nunito"> */}
      {/* ------------------------------------------------------Background Picture, Details and Reg Form-------------------------------------------------- */}

      {/* <div className="relative">
              <div>
                <div
                  className="bg-cover min-h-screen relative"
                  style={{
                    backgroundImage: `url(${"/pexels-pixabay-267885.jpg"})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                </div>
              </div> */}

      {/* Uni Details */}

      {/* <div className="">
                <div className="absolute md:flex justify-center w-full px-4 lg:px-20 py-10 top-10 md:mt-20 lg:mt-0 transform">
                  <div className="w-full md:mt-[10vh] lg::mt-[5vh]">
                    <h1 className="lg:text-[55px] text-5xl text-white font-bold">
                      Experience the Best Education at <br/>University of Debrecen
                    </h1>
                    <p className="text-white w-full text-xl lg:text-4xl my-7">
                      Trusted by more than seven thousand international students
                      for quality education and promising career prospects
                    </p>
                    <div className="flex justify-center my-8">
                      <Link href="tel:+971-50-844-8119">
                        <button className="bg-[#F5B418] text-white p-6 font-bold border-[#F5B418] rounded-3xl hover:bg-transparent hover:text-[#F5B418] hover:border hover:border-white transition duration-300">
                          Call Now: +971 50 844 8119
                        </button>
                      </Link>
                    </div>
                  </div> */}

      {/* Form LG */}

      {/* <div className="bg-white w-[55vh] mx-auto rounded-3xl lg:h-[65vh] hidden sm:block">
                    <form onSubmit={handleSubmit} ref={form} className="p-2">
                      <h1 className="text-4xl font-semibold py-4 px-2 text-center">
                        Register Now
                      </h1>
                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.name}
                          type="text"
                          required
                          placeholder="name"
                          onChange={handleChange}
                          name="name"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.email}
                          type="email"
                          placeholder="email"
                          required
                          onChange={handleChange}
                          name="email"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.phone}
                          type="text"
                          required
                          placeholder="phone"
                          onChange={handleChange}
                          name="phone"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.city}
                          type="text"
                          required
                          placeholder="city"
                          onChange={handleChange}
                          name="city"
                        />
                      </div>

                      <div className="p-1">
                        <select
                          id="levelofstudy"
                          className="border-2 w-full h-[6vh] py-2 px-4 bg-gray-50"
                          value={formData.levelofstudy}
                          onChange={handleChange}
                          name="levelofstudy"
                          required
                        >
                          <option value="">Level of Study</option>
                          <option value="foundation">Foundation</option>
                          <option value="undergraduate">UnderGraduate</option>
                          <option value="graduate">Graduate</option>
                          <option value="phd">PhD</option>
                          <option value="one-tier">One-Tier Program</option>
                        </select>
                      </div>

                      <div className="p-1">
                        <select
                          id="fieldofstudy"
                          className="border-2 w-full h-[6vh] py-2 px-4 bg-gray-50"
                          value={formData.fieldofstudy}
                          onChange={handleChange}
                          name="fieldofstudy"
                          required
                        >
                          <option value="">Field of Study</option>
                          <option value="agriculture">Agriculture</option>
                          <option value="business">Business</option>
                          <option value="science">Science</option>
                          <option value="engineering">Engineering</option>
                          <option value="medicine">Medicine</option>
                          <option value="law">Law</option>
                          <option value="music">Music</option>
                          <option value="health">Health</option>
                          <option value="sciences">Sciences</option>
                          <option value="humanities">
                            Humanities and Education
                          </option>
                          <option value="it">IT</option>
                        </select>
                      </div>

                      <div className="p-2">
                        <button
                          className=" p-7 flex items-center h-10 text-white font-bold text-lg bg-red-500 rounded-full"
                          type="submit"
                          value="Send"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div> */}

      {/* Form SM */}

      {/* <div className="p-4 sm:hidden">
                  <div className="bg-[#114c3a] w-full rounded-3xl h-[65vh]">
                    <form id="form" onSubmit={handleSubmit} className="p-2">
                      <h1 className="text-4xl text-white font-semibold py-4 px-2 text-center">
                        Register Now
                      </h1>
                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.name}
                          type="text"
                          required
                          placeholder="name"
                          onChange={handleChange}
                          name="name"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.email}
                          type="email"
                          placeholder="email"
                          required
                          onChange={handleChange}
                          name="email"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.phone}
                          type="text"
                          required
                          placeholder="phone"
                          onChange={handleChange}
                          name="phone"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.city}
                          type="text"
                          required
                          placeholder="city"
                          onChange={handleChange}
                          name="city"
                        />
                      </div>

                      <div className="p-1">
                        <select
                          id="levelofstudy"
                          className="border-2 w-full h-[6vh] py-2 px-4 bg-gray-50"
                          value={formData.levelofstudy}
                          onChange={handleChange}
                          name="levelofstudy"
                          required
                        >
                          <option value="">Level of Study</option>
                          <option value="foundation">Foundation</option>
                          <option value="undergraduate">UnderGraduate</option>
                          <option value="graduate">Graduate</option>
                          <option value="phd">PhD</option>
                          <option value="one-tier">One-Tier Program</option>
                        </select>
                      </div>

                      <div className="p-1">
                        <select
                          id="fieldofstudy"
                          className="border-2 w-full h-[6vh] py-2 px-4 bg-gray-50"
                          value={formData.fieldofstudy}
                          onChange={handleChange}
                          name="fieldofstudy"
                          required
                        >
                          <option value="">Field of Study</option>
                          <option value="agriculture">Agriculture</option>
                          <option value="business">Business</option>
                          <option value="science">Science</option>
                          <option value="engineering">Engineering</option>
                          <option value="medicine">Medicine</option>
                          <option value="law">Law</option>
                          <option value="music">Music</option>
                          <option value="health">Health</option>
                          <option value="sciences">Sciences</option>
                          <option value="humanities">
                            Humanities and Education
                          </option>
                          <option value="it">IT</option>
                        </select>
                      </div>

                      <div className="p-2">
                        <button
                          className=" p-7 flex items-center h-10 text-white font-bold text-lg bg-red-500 rounded-full"
                          type="submit"
                          value="Send"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}

      {/* -----------------------------------------------------------------------Video-------------------------------------------------------------------- */}

      {/* <div className="mt-10">
              <div className="lg:flex justify-between px-4 lg:px-20">
                <div className="lg:w-2/3 w-full flex items-center p-4 mr-10">
                  <p className="lg:text-2xl text-lg font-semibold">
                    The University of Debrecen holds the status of being among
                    the top 3 universities in Hungary. With a vibrant campus
                    life and cultural diversity, the university offers its
                    students academic excellence and prospective
                    career opportunities.
                  </p>
                </div>

                <div className="lg:w-1/3 rounded-2xl">
                  <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                    <iframe
                      className="w-full rounded-lg aspect-video"
                      src="https://www.youtube.com/embed/4WtzvF-Mg1U?si=Ee3EA4AGJ7Z2fxkO"
                    />
                  </div>
                </div>
              </div>
            </div> */}

      {/* ------------------------------------------------------------------------Fast Facts--------------------------------------------------------------- */}

      {/* <div className="bg-[#F5B418] py-8 mt-10">
              <h1 className="text-center text-3xl font-bold mb-10 text-white">
                FAST FACTS
              </h1>
              <div className="flex lg:flex-row md:flex flex-col lg:justify-around lg:h-24 p-4 md:p-0">
                <div className="text-center py-10 border-2 rounded-[30px] shadow-slate-800 shadow-lg lg:w-[252px] md:w-[500px] lg:py-0 bg-white my-6 lg:my-0 ">
                  <h1 className="lg:text-3xl text-5xl md:text-7xl text-[#114c3a] mt-3 font-bold">
                    30K
                  </h1>
                  <p className="lg:text-lg md:text-3xl text-[#114c3a] font-bold">
                    TOTAL STUDENTS
                  </p>
                </div>

                <div className="text-center py-10 border-2 rounded-[30px] shadow-slate-800 shadow-lg lg:w-[252px] md:w-[500px] lg:py-0 bg-white my-6 lg:my-0">
                  <h1 className="lg:text-3xl text-5xl md:text-7xl text-[#114c3a] mt-3 my-auto font-bold">
                    +7300
                  </h1>
                  <p className="lg:text-lg md:text-3xl text-[#114c3a] font-bold">
                    INTERNATIONAL STUDENTS
                  </p>
                </div>

                <div className="text-center py-10 border-2 rounded-[30px] shadow-slate-800 shadow-lg lg:w-[252px] md:w-[500px] lg:py-0 bg-white my-6 lg:my-0">
                  <h1 className="lg:text-3xl text-5xl md:text-7xl text-[#114c3a] mt-3 font-bold">
                    13
                  </h1>
                  <p className="lg:text-lg md:text-3xl text-[#114c3a] font-bold">
                    FACULTIES
                  </p>
                </div>

                <div className="text-center py-10 border-2 rounded-[30px] shadow-slate-800 shadow-lg lg:w-[252px] md:w-[500px] lg:py-0 bg-white my-6 lg:my-0">
                  <h1 className="lg:text-3xl text-5xl md:text-7xl text-[#114c3a] mt-3 font-bold">
                    8
                  </h1>
                  <p className="lg:text-lg md:text-3xl text-[#114c3a] font-bold">
                    CAMPUSES
                  </p>
                </div>
              </div>
            </div> */}

      {/* -------------------------------------------------------------------------Why UD------------------------------------------------------------------- */}

      {/* <div className="">
              <h1 className="text-center lg:text-3xl text-lg font-bold mt-10 text-[#114c3a]">
                WHY IS UD THE BEST PLACE IN EUROPE FOR INTERNATIONAL STUDENTS?
              </h1>
              <p className="lg:text-xl lg:text-center px-5 mt-5">
                The University of Debrecen is one of the best universities in
                Europe for International students aspiring to study medicine
                abroad. Offering programs in dentistry, medicine, pharmacy, and
                many more:
              </p>

              <div className="lg:px-20 px-4">
                <div className="md:flex md:flex-col lg:flex-row lg:justify-between md:justify-center md:items-center w-full mt-10">
                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <GiGraduateCap className="text-black mr-2 h-8 w-8" />
                        EUROPEAN
                      </h1>
                      <h1>DEGREE</h1>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <FcGlobe className="mr-2" />
                        INTERNATIONALLY
                      </h1>
                      <h1>RECOGNIZED</h1>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <TiBrush className="mr-2 text-slate-600" />
                        PROMISING CAREER
                      </h1>
                      <h1>OPPURTUNITIES</h1>
                    </div>
                  </div>
                </div>

                <div className="md:flex md:flex-col lg:flex-row lg:justify-between md:justify-center md:items-center w-full lg:mt-10">
                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <FaBuildingColumns className="mr-2 text-sky-700" />
                        ADVANCED
                      </h1>
                      <h1>FACILITIES</h1>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <FaTools className="mr-2 text-black" />
                        PRACTICAL
                      </h1>
                      <h1>TRAINING</h1>
                      <h1>SESSIONS</h1>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <FaBuildingColumns className="mr-2 text-emerald-800" />
                        EXPERIENCED
                      </h1>
                      <h1>FACULTY</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center my-20 md:hidden">
                <Link href="tel:+971-50-844-8119">
                        <button className="bg-[#F5B418] text-white p-6 font-bold border-[#F5B418] rounded-3xl hover:scale-105 transition duration-300">
                          Call Now: +971 50 844 8119
                        </button>
                      </Link>
                </div>
                <div className="hidden md:block">
                  <div className="flex justify-center my-20">
                  <Link href="tel:+971-50-844-8119">
                        <button className="bg-[#F5B418] text-white p-6 font-bold border-[#F5B418] rounded-3xl hover:scale-105 transition duration-300">
                          Call Now: +971 50 844 8119
                        </button>
                      </Link>
                  </div>
                </div>
              </div>
            </div> */}

      {/* ---------------------------------------------------------------Study Medicine in Europe----------------------------------------------------------- */}

      {/* <div className="mt-14 lg:mt-20 mb-10">
              <div className="text-center text-3xl px-4 md:text-4xl lg:text-5xl text-[#114c3a] font-bold my-4">
                <h1>
                  Study Medicine in Europe - Competitive Programs Offered at UD
                </h1>
              </div>
              <AdsCarousel />
            </div> */}

      {/* --------------------------------------------------------------------Testimonials------------------------------------------------------------------ */}

      {/* <div className="mt-20">
              <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#114c3a] font-bold my-4">
                INTERNATIONAL STUDENTS TESTIMONIALS
              </h1>
              <div className="lg:flex justify-between w-full p-10 lg:mb-0">
                <div className="lg:w-1/5 rounded-2xl mb-6 md:mb-16">
                  <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                    <iframe
                      className="w-full rounded-lg aspect-video"
                      src="https://www.youtube.com/embed/hqnkfJOHwvc?si=l3Z904KlhKU2B41M"
                    />
                  </div>
                </div>

                <div className="lg:w-1/5 rounded-2xl mb-6 md:mb-16 lg:mb-0">
                  <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                    <iframe
                      className="w-full rounded-lg aspect-video"
                      src="https://www.youtube.com/embed/7tdbiraswz4?si=EjM6B4mxLh_KdvOf"
                    />
                  </div>
                </div>

                <div className="lg:w-1/5 rounded-2xl mb-6 md:mb-16 lg:mb-0">
                  <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                    <iframe
                      className="w-full rounded-lg aspect-video"
                      src="https://www.youtube.com/embed/hxgfwYZZECs?si=yWkQoJMS7Weqgjtl"
                    />
                  </div>
                </div>

                <div className="lg:w-1/5 rounded-2xl mb-6">
                  <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                    <iframe
                      className="w-full rounded-lg aspect-video"
                      src="https://www.youtube.com/embed/HO5f6DLqcWA?si=1-otahAJT5kIxN5L"
                    />
                  </div>
                </div>
              </div>
            </div> */}

      {/* ----------------------------------------------------------------------FAQ's----------------------------------------------------------------------- */}

      {/* <div className="my-10">
              <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#114c3a] font-bold my-4">
                FAQ&apos;s
              </h1>
              <div className="flex justify-center mt-10">
                <div className="lg:w-[1000px] p-4 lg:p-0">
                  <Accordion />
                </div>
              </div>
            </div> */}

      {/* -----------------------------------------------------------------Footer With Uni Logo------------------------------------------------------------- */}

      {/* <div className="flex justify-center bg-[#155744]">
              <img
                src="/Logo.png"
                alt="UniLogo"
                className="lg:w-80 lg:h-32 md:w-60 w-40 my-4"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="">
            <div className="flex justify-center">
              <img
                src={GoogleAdsData.LogoAndData.image}
                alt="UniLogo"
                className="lg:w-[300px] w-[200px] lg:h-[100px] my-4"
              />
            </div>
            <img
              src={GoogleAdsData.LogoAndData.landingImage}
              alt="Image"
              className="w-full my-4 hidden lg:block"
            ></img>
            <img
              src={GoogleAdsData.LogoAndData.mobLandingImage}
              alt="Image"
              className="w-full my-4 lg:hidden"
            ></img>
          </div>
          <div className="absolute md:top-60 top-40 p-2 text-center w-3/4">
            <h1 className="lg:text-5xl text-3xl w-44 md:w-full font-bold text-[#114c3a] my-4">
              Thank you
            </h1>
            <p className="lg:text-2xl font-semibold mb-2 w-44 md:w-full">
              Your query was submitted !
            </p>
            <p className="lg:text-2xl w-44 md:w-full">
              Our admissions team will contact you soon
            </p>
          </div>
        </div>
      )} */}

      {!isSubmitted ? (
        <div>
          <div className="font-nunito">
            {/* ------------------------------------------------------Background Picture, Details and Reg Form-------------------------------------------------- */}

            <div className="relative">
              <div>
                <div
                  className="bg-cover min-h-screen relative"
                  style={{
                    backgroundImage: `url(${"/pexels-pixabay-267885.jpg"})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                </div>
              </div>

              {/* Uni Details */}

              <div className="">
                <div className="absolute md:flex justify-between w-full px-4 lg:px-20 py-10 top-10 md:mt-20 lg:mt-0 transform">
                  <div className="lg:w-[770px] md:w-2/3 w-full md:mt-[10vh] lg::mt-[5vh]">
                    <h1 className="lg:text-[55px] text-5xl text-white font-bold">
                      Experience the Best Education at University of Debrecen
                    </h1>
                    <p className="text-white text-xl lg:text-4xl my-7">
                      Trusted by more than seven thousand international students
                      for quality education and promising career prospects
                    </p>
                    <div className="flex lg:justify-start justify-center my-8 sm:hidden md:block">
                      <Link href="#form">
                        <button className="bg-[#F5B418] text-white px-[60px] lg:ml-6 font-bold border-[#F5B418] py-4 rounded-3xl hover:bg-transparent hover:text-[#F5B418] hover:border hover:border-white transition duration-300">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Form LG */}

                  <div className="bg-white w-[55vh] mx-auto rounded-3xl lg:h-[70vh] hidden sm:block">
                    <form onSubmit={handleSubmit} ref={form} className="p-2">
                      <h1 className="text-4xl font-semibold py-4 px-2 text-center">
                        Register Now
                      </h1>
                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.name}
                          type="text"
                          required
                          placeholder="name"
                          onChange={handleChange}
                          name="name"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.email}
                          type="email"
                          placeholder="email"
                          required
                          onChange={handleChange}
                          name="email"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.phone}
                          type="text"
                          required
                          placeholder="phone"
                          onChange={handleChange}
                          name="phone"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.city}
                          type="text"
                          required
                          placeholder="city"
                          onChange={handleChange}
                          name="city"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.country}
                          type="text"
                          required
                          placeholder="country"
                          onChange={handleChange}
                          name="country"
                        />
                      </div>

                      <div className="p-1">
                        <select
                          id="levelofstudy"
                          className="border-2 w-full h-[6vh] py-2 px-4 bg-gray-50"
                          value={formData.levelofstudy}
                          onChange={handleChange}
                          name="levelofstudy"
                          required
                        >
                          <option value="">Level of Study</option>
                          <option value="foundation">Foundation</option>
                          <option value="undergraduate">UnderGraduate</option>
                          <option value="graduate">Graduate</option>
                          <option value="phd">PhD</option>
                          <option value="one-tier">One-Tier Program</option>
                        </select>
                      </div>

                      <div className="p-1">
                        <select
                          id="fieldofstudy"
                          className="border-2 w-full h-[6vh] py-2 px-4 bg-gray-50"
                          value={formData.fieldofstudy}
                          onChange={handleChange}
                          name="fieldofstudy"
                          required
                        >
                          <option value="">Field of Study</option>
                          <option value="agriculture">Agriculture</option>
                          <option value="business">Business</option>
                          <option value="science">Science</option>
                          <option value="engineering">Engineering</option>
                          <option value="medicine">Medicine</option>
                          <option value="law">Law</option>
                          <option value="music">Music</option>
                          <option value="health">Health</option>
                          <option value="sciences">Sciences</option>
                          <option value="humanities">
                            Humanities and Education
                          </option>
                          <option value="it">IT</option>
                        </select>
                      </div>

                      <div className="p-2">
                        <button
                          className=" p-7 flex items-center h-10 text-white font-bold text-lg bg-red-500 rounded-full"
                          type="submit"
                          value="Send"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Form SM */}

                <div className="p-4 sm:hidden">
                  <div className="bg-[#114c3a] w-full rounded-3xl h-[70vh]">
                    <form id="form" onSubmit={handleSubmit} className="p-2">
                      <h1 className="text-4xl text-white font-semibold py-4 px-2 text-center">
                        Register Now
                      </h1>
                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.name}
                          type="text"
                          required
                          placeholder="name"
                          onChange={handleChange}
                          name="name"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.email}
                          type="email"
                          placeholder="email"
                          required
                          onChange={handleChange}
                          name="email"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.phone}
                          type="text"
                          required
                          placeholder="phone"
                          onChange={handleChange}
                          name="phone"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.city}
                          type="text"
                          required
                          placeholder="city"
                          onChange={handleChange}
                          name="city"
                        />
                      </div>

                      <div className="p-1">
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.city}
                          type="text"
                          required
                          placeholder="country"
                          onChange={handleChange}
                          name="country"
                        />
                      </div>

                      <div className="p-1">
                        <select
                          id="levelofstudy"
                          className="border-2 w-full h-[6vh] py-2 px-4 bg-gray-50"
                          value={formData.levelofstudy}
                          onChange={handleChange}
                          name="levelofstudy"
                          required
                        >
                          <option value="">Level of Study</option>
                          <option value="foundation">Foundation</option>
                          <option value="undergraduate">UnderGraduate</option>
                          <option value="graduate">Graduate</option>
                          <option value="phd">PhD</option>
                          <option value="one-tier">One-Tier Program</option>
                        </select>
                      </div>

                      <div className="p-1">
                        <select
                          id="fieldofstudy"
                          className="border-2 w-full h-[6vh] py-2 px-4 bg-gray-50"
                          value={formData.fieldofstudy}
                          onChange={handleChange}
                          name="fieldofstudy"
                          required
                        >
                          <option value="">Field of Study</option>
                          <option value="agriculture">Agriculture</option>
                          <option value="business">Business</option>
                          <option value="science">Science</option>
                          <option value="engineering">Engineering</option>
                          <option value="medicine">Medicine</option>
                          <option value="law">Law</option>
                          <option value="music">Music</option>
                          <option value="health">Health</option>
                          <option value="sciences">Sciences</option>
                          <option value="humanities">
                            Humanities and Education
                          </option>
                          <option value="it">IT</option>
                        </select>
                      </div>

                      <div className="p-2">
                        <button
                          className=" p-7 flex items-center h-10 text-white font-bold text-lg bg-red-500 rounded-full"
                          type="submit"
                          value="Send"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* -----------------------------------------------------------------------Video-------------------------------------------------------------------- */}

            <div className="mt-10">
              <div className="lg:flex justify-between px-4 lg:px-20">
                <div className="lg:w-2/3 w-full flex items-center p-4 mr-10">
                  <p className="lg:text-2xl text-lg font-semibold">
                    The University of Debrecen holds the status of being among
                    the top 3 universities in Hungary. With a vibrant campus
                    life and cultural diversity, the university offers its
                    students academic excellence and prospective
                    career opportunities.
                  </p>
                </div>

                <div className="lg:w-1/3 rounded-2xl">
                  <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                    <iframe
                      className="w-full rounded-lg aspect-video"
                      src="https://www.youtube.com/embed/4WtzvF-Mg1U?si=Ee3EA4AGJ7Z2fxkO"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------------------Fast Facts--------------------------------------------------------------- */}

            <div className="bg-[#F5B418] py-8 mt-10">
              <h1 className="text-center text-3xl font-bold mb-10 text-white">
                FAST FACTS
              </h1>
              <div className="flex lg:flex-row md:flex flex-col lg:justify-around lg:h-24 p-4 md:p-0">
                <div className="text-center py-10 border-2 rounded-[30px] shadow-slate-800 shadow-lg lg:w-[252px] md:w-[500px] lg:py-0 bg-white my-6 lg:my-0 ">
                  <h1 className="lg:text-3xl text-5xl md:text-7xl text-[#114c3a] mt-3 font-bold">
                    30K
                  </h1>
                  <p className="lg:text-lg md:text-3xl text-[#114c3a] font-bold">
                    TOTAL STUDENTS
                  </p>
                </div>

                <div className="text-center py-10 border-2 rounded-[30px] shadow-slate-800 shadow-lg lg:w-[252px] md:w-[500px] lg:py-0 bg-white my-6 lg:my-0">
                  <h1 className="lg:text-3xl text-5xl md:text-7xl text-[#114c3a] mt-3 my-auto font-bold">
                    +7300
                  </h1>
                  <p className="lg:text-lg md:text-3xl text-[#114c3a] font-bold">
                    INTERNATIONAL STUDENTS
                  </p>
                </div>

                <div className="text-center py-10 border-2 rounded-[30px] shadow-slate-800 shadow-lg lg:w-[252px] md:w-[500px] lg:py-0 bg-white my-6 lg:my-0">
                  <h1 className="lg:text-3xl text-5xl md:text-7xl text-[#114c3a] mt-3 font-bold">
                    13
                  </h1>
                  <p className="lg:text-lg md:text-3xl text-[#114c3a] font-bold">
                    FACULTIES
                  </p>
                </div>

                <div className="text-center py-10 border-2 rounded-[30px] shadow-slate-800 shadow-lg lg:w-[252px] md:w-[500px] lg:py-0 bg-white my-6 lg:my-0">
                  <h1 className="lg:text-3xl text-5xl md:text-7xl text-[#114c3a] mt-3 font-bold">
                    8
                  </h1>
                  <p className="lg:text-lg md:text-3xl text-[#114c3a] font-bold">
                    CAMPUSES
                  </p>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------------------Why UD------------------------------------------------------------------- */}

            <div className="">
              <h1 className="text-center lg:text-3xl text-lg font-bold mt-10 text-[#114c3a]">
                WHY IS UD THE BEST PLACE IN EUROPE FOR INTERNATIONAL STUDENTS?
              </h1>
              <p className="lg:text-xl lg:text-center px-5 mt-5">
                The University of Debrecen is one of the best universities in
                Europe for International students aspiring to study medicine
                abroad. Offering programs in dentistry, medicine, pharmacy, and
                many more:
              </p>

              <div className="lg:px-20 px-4">
                <div className="md:flex md:flex-col lg:flex-row lg:justify-between md:justify-center md:items-center w-full mt-10">
                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <GiGraduateCap className="text-black mr-2 h-8 w-8" />
                        EUROPEAN
                      </h1>
                      <h1>DEGREE</h1>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <FcGlobe className="mr-2" />
                        INTERNATIONALLY
                      </h1>
                      <h1>RECOGNIZED</h1>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <TiBrush className="mr-2 text-slate-600" />
                        PROMISING CAREER
                      </h1>
                      <h1>OPPURTUNITIES</h1>
                    </div>
                  </div>
                </div>

                <div className="md:flex md:flex-col lg:flex-row lg:justify-between md:justify-center md:items-center w-full lg:mt-10">
                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <FaBuildingColumns className="mr-2 text-sky-700" />
                        ADVANCED
                      </h1>
                      <h1>FACILITIES</h1>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <FaTools className="mr-2 text-black" />
                        PRACTICAL
                      </h1>
                      <h1>TRAINING</h1>
                      <h1>SESSIONS</h1>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full md:w-[500px] lg:w-[300px] h-28 border-2 rounded-3xl shadow-xl bg-green-50 mb-4">
                    <div className="text-center text-2xl font-bold text-[#114c3a]">
                      <h1 className="flex">
                        <FaBuildingColumns className="mr-2 text-emerald-800" />
                        EXPERIENCED
                      </h1>
                      <h1>FACULTY</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center my-20 md:hidden">
                  <Link href="#form">
                    <button className="bg-[#F5B418] text-white px-[60px] font-bold border-[#F5B418] py-4 rounded-3xl hover:scale-105 transition-all duration-300">
                      Apply Now
                    </button>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="flex justify-center my-20">
                    <Link href="#formLG">
                      <button className="bg-[#F5B418] text-black px-[60px] font-bold border-[#F5B418] py-4 rounded-3xl hover:scale-105 transition-all duration-300">
                        Apply Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------Study Medicine in Europe----------------------------------------------------------- */}

            <div className="mt-14 lg:mt-20 mb-10">
              <div className="text-center text-3xl px-4 md:text-4xl lg:text-5xl text-[#114c3a] font-bold my-4">
                <h1>
                  Study Medicine in Europe - Competitive Programs Offered at UD
                </h1>
              </div>
              <AdsCarousel />
            </div>

            {/* --------------------------------------------------------------------Testimonials------------------------------------------------------------------ */}

            <div className="mt-20">
              <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#114c3a] font-bold my-4">
                INTERNATIONAL STUDENTS TESTIMONIALS
              </h1>
              <div className="lg:flex justify-between w-full p-10 lg:mb-0">
                <div className="lg:w-1/5 rounded-2xl mb-6 md:mb-16">
                  <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                    <iframe
                      className="w-full rounded-lg aspect-video"
                      src="https://www.youtube.com/embed/hqnkfJOHwvc?si=l3Z904KlhKU2B41M"
                    />
                  </div>
                </div>

                <div className="lg:w-1/5 rounded-2xl mb-6 md:mb-16 lg:mb-0">
                  <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                    <iframe
                      className="w-full rounded-lg aspect-video"
                      src="https://www.youtube.com/embed/7tdbiraswz4?si=EjM6B4mxLh_KdvOf"
                    />
                  </div>
                </div>

                <div className="lg:w-1/5 rounded-2xl mb-6 md:mb-16 lg:mb-0">
                  <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                    <iframe
                      className="w-full rounded-lg aspect-video"
                      src="https://www.youtube.com/embed/hxgfwYZZECs?si=yWkQoJMS7Weqgjtl"
                    />
                  </div>
                </div>

                <div className="lg:w-1/5 rounded-2xl mb-6">
                  <div className="border-t-8 border-black rounded-2xl w-full border-b-8">
                    <iframe
                      className="w-full rounded-lg aspect-video"
                      src="https://www.youtube.com/embed/HO5f6DLqcWA?si=1-otahAJT5kIxN5L"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------------------------FAQ's----------------------------------------------------------------------- */}

            <div className="my-10">
              <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-[#114c3a] font-bold my-4">
                FAQ&apos;s
              </h1>
              <div className="flex justify-center mt-10">
                <div className="lg:w-[1000px] p-4 lg:p-0">
                  <Accordion />
                </div>
              </div>
            </div>

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
      ) : (
        <div>
          <div className="">
            <div className="flex justify-center">
              <img
                src={GoogleAdsData.LogoAndData.image}
                alt="UniLogo"
                className="lg:w-[300px] w-[200px] lg:h-[100px] my-4"
              />
            </div>
            <img
              src={GoogleAdsData.LogoAndData.landingImage}
              alt="Image"
              className="w-full my-4 hidden lg:block"
            ></img>
            <img
              src={GoogleAdsData.LogoAndData.mobLandingImage}
              alt="Image"
              className="w-full my-4 lg:hidden"
            ></img>
          </div>
          <div className="absolute md:top-60 top-40 p-2 text-center w-3/4">
            <h1 className="lg:text-5xl text-3xl w-44 md:w-full font-bold text-[#114c3a] my-4">
              Thank you
            </h1>
            <p className="lg:text-2xl font-semibold mb-2 w-44 md:w-full">
              Your query was submitted !
            </p>
            <p className="lg:text-2xl w-44 md:w-full">
              Our admissions team will contact you soon
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleAds;
