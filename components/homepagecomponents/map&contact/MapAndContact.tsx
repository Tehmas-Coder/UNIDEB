import Contact from "@/components/contact/Contact";
import Link from "next/link";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { FaEnvelope, FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

const MapAndContact = () => {
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

  return (
    <div className="">
      <div className="text-center mt-24 mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-[#114c3a] px-2 lg:px-0">
          Get in Touch
        </h1>
        <p className="text-md lg:text-2xl font-normal text-[#114c3a] mt-4 px-2 lg:px-0">
          Feel free to contact us if you require any assistance or guidance. We
          will respond to your enquiry promptly.
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
                  <FaEnvelope style={{ color: "#155744" }} className="mx-1" />
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
                <Link href="https://twitter.com/UDebrecen38602" target="_blank">
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
  );
};

export default MapAndContact;
