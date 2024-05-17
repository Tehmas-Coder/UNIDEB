"use client";
import { BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import SocialLink from "./SocialLinks";
import TopNavBar from "./TopNavBar";
import Link from "next/link";
import SmallHeader from "./SmallHeader";
import React from "react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/google-ads/" &&
        pathname !== "/ads-ind/" &&
        pathname !== "/thank-you/" && (
          <>
            <div
              className={`hidden lg:${
                pathname !== "/" && "block"
              } relative z-10 flex`}
            >
              <div className="h-[90px] bg-[#144438] text-white border-t border-[#144438] font-sans text-[13px] flex font-semibold justify-between items-center px-32">
                <TopNavBar />
              </div>
            </div>
            <div className="block lg:hidden px-0 h-[75px] bg-[#F5B418] relative z-10">
              <SmallHeader />
            </div>
          </>
        )}
    </>
  );
};

export default Header;
