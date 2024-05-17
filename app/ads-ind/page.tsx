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
import { FaStar } from "react-icons/fa";

const AdsInd = () => {
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
    gpa: "",
    currentqualification: "",
    fieldofstudy: "",
  });

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_ujex57e",
        "template_01ctqn8",
        form.current,
        "rlriDPVdpxFJiIQt4"
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
      gpa: "",
      currentqualification: "",
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
      {!isSubmitted ? (
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

              <div className="md:hidden">
                <img className="" src="/mob  for sch.jpg" />
              </div>

              {/* Uni Details */}

              <div className="">
                <div className="absolute md:flex justify-between lg:justify-end w-full px-4 py-10 top-10 md:mt-20 lg:mt-0 transform">
                  {/* Form LG */}

                  <div className="bg-white w-[70vh] rounded-3xl  hidden lg:block">
                    <form
                      id="formLG"
                      onSubmit={handleSubmit}
                      ref={form}
                      className="p-2"
                    >
                      <h1 className="text-4xl font-semibold py-4 px-2 text-center">
                        Apply Now
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
                        <p className="text-sm"></p>
                        <input
                          className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                          value={formData.gpa}
                          type="text"
                          required
                          placeholder="CGPA / Percentage"
                          onChange={handleChange}
                          name="gpa"
                        />
                      </div>

                      <div className="p-1">
                        <select
                          id="currentqualification"
                          className="border-2 w-full h-[6vh] py-2 px-4 bg-gray-50"
                          value={formData.currentqualification}
                          onChange={handleChange}
                          name="currentqualification"
                          required
                        >
                          <option value="">Current Qualification</option>
                          <option value="HSSC / A Levels / Intermediate">
                            HSSC / A Levels / Intermediate
                          </option>
                          <option value="Bachelor / UnderGraduate">
                            Bachelor / UnderGraduate
                          </option>
                          <option value="Masters / Graduate / M.Phil">
                            Masters / Graduate / M.Phil
                          </option>
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
                          <option value="Engineering Programs">
                            Engineering Programs
                          </option>
                          <option value="Health Sciences">
                            Health Sciences
                          </option>
                          <option value="Science Programs">
                            Science Programs
                          </option>
                          <option value="IT Program">IT Program</option>
                        </select>
                      </div>

                      <div className="p-2 flex justify-center">
                        <button
                          className=" p-6 w-3/4 text-center flex items-center justify-center h-10 text-white font-bold text-xl bg-[#F5B418] rounded-full"
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

                <div className="p-4 sm:flex justify-center lg:hidden">
                  <div className="bg-[#114c3a] w-full sm:w-1/2 rounded-3xl border-2 border-solid">
                    <form id="form" onSubmit={handleSubmit} className="p-2">
                      <div>
                        <h1 className="text-4xl text-white font-semibold py-4 px-2 text-center">
                          Apply Now
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
                          <p className="text-sm"></p>
                          <input
                            className="border-2 w-full h-[6vh] py-4 px-2 bg-gray-50"
                            value={formData.gpa}
                            type="text"
                            required
                            placeholder="CGPA / Percentage"
                            onChange={handleChange}
                            name="gpa"
                          />
                        </div>

                        <div className="p-1">
                          <select
                            id="currentqualification"
                            className="border-2 w-full h-[6vh] py-2 px-4 bg-gray-50"
                            value={formData.currentqualification}
                            onChange={handleChange}
                            name="currentqualification"
                            required
                          >
                            <option value="">Current Qualification</option>
                            <option value="HSSC / A Levels / Intermediate">
                              HSSC / A Levels / Intermediate
                            </option>
                            <option value="Bachelors / UnderGraduate">
                              Bachelors / UnderGraduate
                            </option>
                            <option value="Masters / Graduate / M.Phil">
                              Masters / Graduate / M.Phil
                            </option>
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
                            <option value="Engineering Programs">
                              Engineering Programs
                            </option>
                            <option value="Health Sciences">
                              Health Sciences
                            </option>
                            <option value="Science Programs">
                              Science Programs
                            </option>
                            <option value="IT Program">IT Program</option>
                          </select>
                        </div>
                      </div>

                      <div className="p-2 mt-4">
                        <button
                          className=" p-7 flex justify-center items-center h-10 w-full text-black font-bold text-xl bg-[#F5B418] rounded-full"
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
                      <span className="ml-2 col-span-11">
                        Medical Insurance
                      </span>
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
                <Link href={"#form"}>
                  <button className="bg-[#155744] p-4 w-52 rounded-lg mt-10 text-white text-lg">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>

            <div className="hidden sm:block">
              <div className="flex justify-center mb-5">
                <Link href={"#formLG"}>
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
                      university proudly offers more than 100 international
                      degree programs in 14 faculties fully taught in English.
                      It is offering Foundation Programs, Undergraduate
                      Programs, Post Graduate Programs, and Post Doctoral/PhD
                      Programs. The fields of study included are agriculture,
                      business, engineering, health, humanities, IT, law,
                      medical, music, science, and much more. The University
                      comprises of 30,000 student body with 7300 international
                      students from more than 130 countries.
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
                <Link href={"#formLG"}>
                  <button className="bg-[#155744] hover:scale-105 hover:bg-white hover:text-black transition transform duration-500 p-4 w-52 rounded-lg mt-10 text-white text-lg">
                    Apply Now
                  </button>
                </Link>
              </div>

              <div className="sm:hidden">
                <Link href={"#form"}>
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
              <div className="lg:flex justify-between w-full p-10">
                <div className="lg:w-1/5 rounded-2xl mb-6 md:mb-16] lg:mb-0">
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

                <div className="lg:w-1/5 rounded-2xl">
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
                  <Link href={"#formLG"}>
                    <button className="bg-[#155744] hover:scale-105 hover:bg-[#F5B418] transition transform duration-500 p-4 w-52 rounded-lg mt-10 text-white text-lg">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex justify-center mb-5 sm:hidden">
                <Link href={"#form"}>
                  <button className="bg-[#155744] p-4 w-52 rounded-lg mt-10 text-white text-lg">
                    Apply Now
                  </button>
                </Link>
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
        // -------------------------------------------------------------------------Thank You Page------------------------------------------------------------------

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

export default AdsInd;
