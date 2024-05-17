"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Link {
  href: string;
  label: string;
}

const linkData: Link[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/application", label: "Admissions" },
  { href: "/faculties", label: "Faculties" },
  { href: "/sample-paper", label: "Downloads" },
  { href: "/contact", label: "Contact Us" },
  { href: "/event-gallery", label: "Media" },
];

const Footer: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/google-ads/" &&
        pathname !== "/ads-ind/" &&
        pathname !== "/thank-you/" && (
          <footer className="text-white w-full bg-[#155744]">
            <div className="w-full mx-auto max-w-screen-xl p-4 pt-8 md:flex-col md:items-center md:justify-between">
              <ul className="flex flex-wrap justify-center pb-18 items-center gap-y-4 mt-3 text-sm font-medium  sm:mt-0">
                {linkData.map((link, index) => (
                  <li
                    key={index}
                    className={`${
                      index < linkData.length - 1 ? "border-r px-3 " : ""
                    }`}
                  >
                    <Link href={link.href} className={`hover:  px-2 py-1`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <span className="text-sm flex mb-1 text-center items-center pt-5 lg:pt-16 justify-center">
                Copyright © 2024 . All rights reserved.
              </span>
              <span className="text-sm text-center flex items-center justify-center">
                University of Debrecen, Hungary (Regional Office South Asia)
              </span>
            </div>
          </footer>
        )}
    </>
  );
};

export default Footer;
