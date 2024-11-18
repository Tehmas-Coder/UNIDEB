"use client";
import Link from "next/link";
import React, { useState } from "react";

const DeadlinesComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full flex">
      <div className="p-2">
        <div
          className={`border-2 p-2 w-72 cursor-pointer ${
            activeTab === "tab1"
              ? "bg-[#F5B418] border-[#155744]"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          <h1>Deadlines of Intakes</h1>
        </div>
        <div
          className={`border-2 p-2 mt-2 w-72 cursor-pointer ${
            activeTab === "tab2"
              ? "bg-[#F5B418] border-[#155744]"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          <h1>Deadlines of Scholarship Programs</h1>
        </div>
      </div>

      {activeTab === "tab1" && (
        <div className="ml-10">
          {/* <div className="my-5">
            <h1 className="my-5">
              January intake -{" "}
              <span className="text-red-600">
                application deadline: 1 November 2024
              </span>
            </h1>
            <div className="px-8">
              <h2 className="text-[#155744] text-xl font-semibold">
                Start your Medical career!
              </h2>
              <p className="text-[#F5B418] text-lg">Basic Medicine Course II</p>
            </div>
          </div> */}

          <div>
            <div>
              <h2 className="my-3 font-semibold text-xl text-[#155744]">
                For January/February 2024/2025 intake:
              </h2>
              <ul>
                <li className="list-disc">
                  Medical programs (only Basic Medicine Course II): 1st November
                  2024
                </li>
                <li className="list-disc">
                  Other non-medical programs, PhD program: 15th November 2024
                </li>
              </ul>
            </div>

            <div>
              <h2 className="my-3 font-semibold text-xl text-[#155744]">
                For September 2025/2026 intake:
              </h2>
              <ul>
                <li className="list-disc">PhD programs: 15th May 2025</li>
                <li className="list-disc">
                  All other programs: 15th June 2025
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="my-5">
            <h1 className="my-5">
              February intake -{" "}
              <span className="text-red-600">
                application deadline: 15 November 2024
              </span>
            </h1>
            <div className="px-8">
              <h2 className="text-[#155744] text-xl font-semibold">
                Join Preparatory Course for Agriculture, Engineering, IT and
                Science undergraduate programs!
              </h2>
              <p className="text-[#F5B418] text-lg">
                Intensive Foundation Semester Program!
              </p>
              <div className="my-3">
                <h2 className="text-[#155744] text-xl font-semibold">
                  Join our MSc programs!
                </h2>
                <p>Agriculture Programs</p>
                <div className="mx-4 mb-3">
                  <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=0&id=0">
                    <p className="text-[#F5B418] text-lg">
                      Animal Husbandry Engineering, MSc
                    </p>
                  </Link>
                  <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=0&id=2">
                    <p className="text-[#F5B418] text-lg">
                      Agricultural Environmental Management Engineering, MSc
                    </p>
                  </Link>
                  <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=0&id=3">
                    <p className="text-[#F5B418] text-lg">
                      Agricultural Water Management Engineering, MSc
                    </p>
                  </Link>
                  <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=0&id=1">
                    <p className="text-[#F5B418] text-lg">
                      Food Safety and Quality Engineering, MSc
                    </p>
                  </Link>
                  <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=0&id=5">
                    <p className="text-[#F5B418] text-lg">
                      Plant Protection, MSc
                    </p>
                  </Link>
                  <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=0&id=4">
                    <p className="text-[#F5B418] text-lg">
                      Crop Production Engineering, MSc
                    </p>
                  </Link>
                </div>
                <div className="my-3">
                  <p>Business Program</p>
                  <div className="mx-4">
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=1&id=0">
                      <p className="text-[#F5B418] text-lg">
                        International Economy and Business, MSc
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="my-3">
                  <p>Engineering Program</p>
                  <div className="mx-4">
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=2&id=0">
                      <p className="text-[#F5B418] text-lg">
                        Chemical Engineering, MSc
                      </p>
                    </Link>
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=2&id=1">
                      <p className="text-[#F5B418] text-lg">
                        Engineering Management, MSc
                      </p>
                    </Link>
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=2&id=2">
                      <p className="text-[#F5B418] text-lg">
                        Environmental Engineering, MSc
                      </p>
                    </Link>
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=2&id=3">
                      <p className="text-[#F5B418] text-lg">
                        Mechatronical Engineering, MSc
                      </p>
                    </Link>
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=2&id=4">
                      <p className="text-[#F5B418] text-lg">
                        Mechanical Engineering, MSc
                      </p>
                    </Link>
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=2&id=5">
                      <p className="text-[#F5B418] text-lg">
                        Urban Systems Engineering, MSc
                      </p>
                    </Link>
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=2&id=6">
                      <p className="text-[#F5B418] text-lg">
                        Postgraduate Diploma in Lean Engineer
                      </p>
                    </Link>
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=2&id=7">
                      <p className="text-[#F5B418] text-lg">
                        Postgraduate Diploma in Lean Manager
                      </p>
                    </Link>
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=2&id=8">
                      <p className="text-[#F5B418] text-lg">
                        Postgraduate Diploma in Strategic Engineering and
                        Sustainability Leadership
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="my-3">
                  <p>IT Program</p>
                  <div className="mx-4">
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=5&id=1">
                      <p className="text-[#F5B418] text-lg">
                        Computer Science, MSc
                      </p>
                    </Link>
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=5&id=3">
                      <p className="text-[#F5B418] text-lg">
                        Computer Science Engineering, MSc
                      </p>
                    </Link>
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=5&id=0">
                      <p className="text-[#F5B418] text-lg">
                        Business Informatics, MSc
                      </p>
                    </Link>
                    <p className="text-[#F5B418] text-lg">
                      Postgraduate Diploma in Artificial Intelligence{" "}
                    </p>
                    <p className="text-[#F5B418] text-lg">Data Science, MSc</p>
                  </div>
                </div>
                <div className="my-3">
                  <p>Law Program</p>
                  <div className="mx-4">
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=6&id=0">
                      <p className="text-[#F5B418] text-lg">
                        European and International Business Law-LL.M, MSc
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="my-3">
                  <p>Music Program</p>
                  <div className="mx-4">
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=8&id=0">
                      <p className="text-[#F5B418] text-lg">
                        Classical Musical Performance, MA
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="my-3">
                  <p>Science Program</p>
                  <div className="mx-4">
                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=7&id=0">
                      <p className="text-[#F5B418] text-lg">
                        Applied Mathematics, MSc
                      </p>
                    </Link>

                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=7&id=2">
                      <p className="text-[#F5B418] text-lg">Chemistry, MSc</p>
                    </Link>

                    <Link href="https://southasia.edu.unideb.hu/graduate-program/?item=7&id=5">
                      <p className="text-[#F5B418] text-lg">
                        Geoinformatics, MSc
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <button className="p-3 bg-[#F5B418] text-[#155744] font-semibold">
            APPLY HERE!
          </button> */}
        </div>
      )}

      {activeTab === "tab2" && (
        <div className="text-[#155744] ml-10">
          <div className="my-4">
            <h2 className="text-xl font-bold">
              UD International Scholarship Program
            </h2>
            <ul className="list-disc px-6 text-lg">
              <li className="">Application Deadline: 30th June, 2024</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-xl font-bold">
              Stipendium Hungaricum Scholarship Program
            </h2>
            <ul className="list-disc px-6 text-lg">
              <li>Applications start date: 15th November, 2024</li>
              <li>Application Deadline: 15th January, 2025</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-xl font-bold">
              Scholarship for Christian Young People (SCYP) Program
            </h2>
            <ul className="list-disc px-6 text-lg">
              <li>Not announced yet</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-xl font-bold">Erasmus+ Program (2024 - 25)</h2>
            <ul className="list-disc px-6 text-lg">
              <li>Not announced yet</li>
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-xl font-bold">Diaspora Scholarship</h2>
            <ul className="list-disc px-6 text-lg">
              <li>Not announced yet</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeadlinesComponent;
