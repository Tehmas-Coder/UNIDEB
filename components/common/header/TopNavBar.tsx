import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

interface DropdownItem {
  href: string;
  label: string;
}

interface LinkItem {
  href: string;
  label: string;
  dropdownItems: (string | DropdownItem)[];
}

const linkData: LinkItem[] = [
  { href: "/", label: "HOME", dropdownItems: [] },
  {
    href: "",
    label: "ABOUT",
    dropdownItems: [
      { href: "/about", label: "About University" },
      {
        href: "/about-south-asia-regional-office",
        label: "About South Asia Regional Office",
      },
      { href: "/ranking", label: "Accreditation & Ranking" },
      { href: "/representative", label: "Representatives" },
    ],
  },
  {
    href: "",
    label: "ADMISSIONS",
    dropdownItems: [
      { href: "/application", label: "Application Process" },
      { href: "/medical-program", label: "Medical Program Entrance Exam" },
      {
        href: "/non-medical-program",
        label: "Non-Medical Program Entrance Exam",
      },
      { href: "/scholarship", label: "Scholarships" },
    ],
  },
  // { href: "/faculties", label: "FACULTIES", dropdownItems: [] },
  {
    href: "",
    label: "ACADEMICS",
    dropdownItems: [
      { href: "/faculties", label: "Faculties" },
      { href: "/study-programs", label: "Study Programs" },
    ],
  },
  {
    href: "",
    label: "DOWNLOADS",
    dropdownItems: [
      { href: "/sample-paper", label: "Sample Papers" },
      { href: "/brouchers", label: "Brochures" },
      { href: "/download-app-form", label: "Application Forms" },
      // { href: "/for-our-representatives", label: "For Our Representatives" },
      { href: "/entrance-interview", label: "UD Entrance Interview Guideline" },
    ],
  },
  { href: "/contact", label: "CONTACT US", dropdownItems: [] },
  {
    href: "",
    label: "MEDIA",
    dropdownItems: [
      { href: "/blog", label: "Blogs" },
      { href: "/event-gallery", label: "Events Gallery" },
    ],
  },
];

const TopNavBar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownEnter = (index: number) => {
    setOpenDropdown(index);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <div className="flex justify-center items-center m-8">
        <img
          src="/logo uod regional office.png"
          className=""
          width={200}
          alt="uni-logo"
        />
      </div>

      <div className="flex justify-center  h-full">
        {linkData.map((link, index) => (
          <Link key={index} href={link.href}>
            <div
              className={`relative group h-full min-w-[120px] justify-center border-t-[8px] border-[#144438] hover:text-white hover:border-[#155744] px-4  flex items-center`}
              onMouseEnter={() => handleDropdownEnter(index)}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center cursor-pointer">
                {link.label}{" "}
                {link.dropdownItems.length > 0 && (
                  <FiChevronDown className="ml-1" />
                )}
              </div>
              {link.dropdownItems.length > 0 && openDropdown === index && (
                <div className="absolute left-0 right-0 top-[94%] mt-1 bg-[#FFFFFF]">
                  <div className="w-[200px] text-[#144438]">
                    {link.dropdownItems.map((item, i) => (
                      <div key={i}>
                        {typeof item === "string" ? (
                          <Link key={i} href={`/${item.toLowerCase()}`}>
                            <button
                              onClick={() => setOpenDropdown(null)}
                              className={`block py-3 px-4 border-x bg-[#FFFFFF] border-b border-[#F5B418] hover:bg-gray-200`}
                            >
                              {item}
                            </button>
                          </Link>
                        ) : (
                          <Link key={item.href} href={item.href}>
                            <button
                              onClick={() => setOpenDropdown(null)}
                              className={`block py-3 px-4 border-x bg-[#FFFFFF] border-b w-full text-left border-[#F5B418] hover:bg-gray-200`}
                            >
                              {(item as DropdownItem).label}
                            </button>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TopNavBar;
