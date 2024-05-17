import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaBars, FaPlus } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  id: string;
  title: string;
  link: string;
  subLinks?: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  title: string;
  link: string;
}

const SmallHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<Record<string, boolean>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenu(!isMenu);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsMenu(false);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const menuItems: MenuItem[] = [
    { id: "home", title: "HOME", link: "/" },
    {
      id: "about",
      title: "ABOUT",
      link: "",
      subLinks: [
        { id: "about", title: "ABOUT UNIVERSITY", link: "/about" },
        {
          id: "history",
          title: "ABOUT SOUTH ASIA REGIONAL OFFICE",
          link: "/about-south-asia-regional-office",
        },
        {
          id: "accreditation",
          title: "ACCREDITATION & RANKING",
          link: "/ranking",
        },
        { id: "services", title: "OUR SERVICES", link: "/services" },
        {
          id: "representative",
          title: "REPRESENTATIVE",
          link: "/representative",
        },
      ],
    },
    {
      id: "admissions",
      title: "ADMISSIONS",
      link: "/",
      subLinks: [
        {
          id: "application",
          title: "APPLICATION PROCESS",
          link: "/application",
        },
        {
          id: "medical",
          title: "MEDICAL PROGRAM ENTRANCE EXAM",
          link: "/medical-program",
        },
        {
          id: "nonmedical",
          title: "NON-MEDICAL PROGRAM ENTRANCE EXAM",
          link: "/non-medical-program",
        },
        { id: "scholarship", title: "SCHOLARSHIP", link: "/scholarship" },
      ],
    },
    {
      id: "academics",
      title: "ACADEMICS",
      link: "",
      subLinks: [
        { id: "faculties", title: "FACULTIES", link: "/faculties" },
        {
          id: "study-program",
          title: "STUDY PROGRAMS",
          link: "/study-program",
        },
      ],
    },
    {
      id: "downloads",
      title: "DOWNLOADS",
      link: "",
      subLinks: [
        { id: "sample", title: "SAMPLE PAPERS", link: "/sample-paper" },
        { id: "brouchers", title: "BROCHURES", link: "/brouchers" },
        {
          id: "app-form",
          title: "APPLICATION FORMS",
          link: "/download-app-form",
        },
        // {
        //   id: "our-reps",
        //   title: "FOR OUR REPRESENTATIVES",
        //   link: "/for-our-representatives",
        // },
        {
          id: "entrance-interview",
          title: "UD ENTRANCE INTERVIEW GUIDELINE",
          link: "/entrance-interview",
        },
      ],
    },
    { id: "contact", title: "CONTACT US", link: "/contact" },
    {
      id: "media",
      title: "MEDIA",
      link: "/",
      subLinks: [
        { id: "blog", title: "BLOGS", link: "/blog" },
        { id: "event", title: "EVENTS GALLERY", link: "/event-gallery" },
      ],
    },
  ];

  const handleSubmenuToggle = (itemId: string) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div
      className={`text-white font-nunito text-[12px] font-light  items-center relative `}
    >
      <div className="flex justify-between items-center">
        <div className="container py-4 gap-16 flex items-center">
          <div className="pl-6">
            <Link href="/" passHref>
              <button onClick={handleLinkClick}>
                {/* <img src={"/unideb-logo.png"} width={155} height={155} alt="uni-logo"/> */}
                <img src="/Logo.png" width={115} height={115} alt="uni-logo" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex py-4">
          <div className="flex">
            <div
              className="rounded-full text-xs items-center cursor-pointer justify-center  flex pr-6"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden relative -top-[73px] bg-[#8E8E8E] w-full`}
        ref={dropdownRef}
        style={{ marginTop: isMenuOpen ? "60px" : 0 }}
      >
        <ul className="text-white">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:bg-gray-700 border-b border-black"
            >
              <Link href={item.link} passHref>
                <div className="flex items-center justify-between w-full">
                  <button
                    className={`flex p-4 justify-between items-center w-[100%] ${
                      submenuOpen[item.id] ? "border-l-4 border-[#F5B418]" : ""
                    }`}
                    onClick={() => {
                      handleSubmenuToggle(item.id);
                      if (!item.subLinks) {
                        // Close the menu for main links
                        handleLinkClick();
                      }
                    }}
                  >
                    {item.title}
                    {item.subLinks && (
                      <FaPlus
                        size={18}
                        className={`transition-transform relative right-0 ${
                          submenuOpen[item.id] ? "rotate-45" : ""
                        }`}
                      />
                    )}
                  </button>
                </div>
              </Link>
              {item.subLinks && submenuOpen[item.id] && (
                <ul className="bg-[#8E8E9E]">
                  {item.subLinks.map((subLink) => (
                    <li
                      key={subLink.id}
                      className="py-2 pl-12 cursor-pointer hover:bg-gray-700 border-t border-black"
                    >
                      <Link href={subLink.link} passHref>
                        <button className="w-[100%]" onClick={handleLinkClick}>
                          <div className="flex space-x-4">
                            <span className="pr-4">&#8226;</span>{" "}
                            {subLink.title}
                          </div>
                        </button>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SmallHeader;
