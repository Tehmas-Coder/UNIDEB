import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  return (
    <>
      <div className="w-4/5 m-auto">
        <div className="lg:flex">
          <div className="md:flex lg:w-1/2 w-full">
            <div className="flex border-2 md:w-1/2 w-full lg:h-52 md:h-68 py-3 px-8 text-justify">
              <div className="mr-4">
                <FaQuoteLeft className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="lg:h-36 lg:text-sm">
                  A fantastic team at the University of Debrecen South Asia
                  Regional Office for their assistance with my application to
                  the university. I am able to fulfill my dream because of them.
                </p>
                <p className="text-right mt-4 font-bold text-lg">Irfan Qazi</p>
              </div>
            </div>
            <div className="flex border-2 md:w-1/2 w-full lg:h-52 md:h-68 py-3 px-8 text-justify">
              <div className="mr-4">
                <FaQuoteLeft className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="lg:h-36 lg:text-sm">
                  Thank you to the South Asia Regional Office for encouraging me
                  and guiding me throughout my application process, they made it
                  easy.
                </p>
                <p className="text-right mt-2 font-bold text-lg">
                  Shahab Ahmad
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex lg:w-1/2 w-full">
            <div className="flex border-2 md:w-1/2 w-full lg:h-52 md:h-68 py-3 px-8 text-justify">
              <div className="mr-4">
                <FaQuoteLeft className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="lg:h-36 lg:text-sm">
                  I had an amazing experience with the South Asia Regional
                  Office of University of Debrecen, Hungary! The team was
                  extremely knowledgeable, helpful and dedicated to assisting me
                  throughout the application process.
                </p>
                <p className="text-right mt-2 font-bold text-lg">
                  Abeeha Saleem
                </p>
              </div>
            </div>
            <div className="flex border-2 md:w-1/2 w-full lg:h-52 md:h-68 py-3 px-8 text-justify">
              <div className="mr-4">
                <FaQuoteLeft className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="lg:h-36 lg:text-sm">
                  Very cooperative people! They answered all my queries very
                  nice yet professionally. I highly recommend their services to
                  anyone considering studying at University of Debrecen.
                </p>
                <p className="text-right mt-2 font-bold text-lg">Rabia Malik</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex">
            <div className="flex w-1/2">
              <div className="flex border-2 w-1/2 h-52 py-3 px-8 text-justify">
                <div className="mr-4">
                  <FaQuoteLeft className="text-red-500 text-xl" />
                </div>
                <div>
                  <p className="h-36 text-sm">
                    Highly impressed with the University of Decrecen&apos;s
                    Regional Office in Dubai! Excellent support and guidance.
                  </p>
                  <p className="text-right mt-2 font-bold text-lg">
                    Hamza Malik
                  </p>
                </div>
              </div>
              <div className="flex border-2 w-1/2 h-52 py-3 px-8 text-justify">
                <div className="mr-4">
                  <FaQuoteLeft className="text-red-500 text-xl" />
                </div>
                <div>
                  <p className="h-36 text-sm">
                    Remarkable Services at University of Debrecen South Asia
                    Regional Office
                  </p>
                  <p className="text-right mt-2 font-bold text-lg">
                    Rafay Mehdi
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-1/2">
              <div className="flex border-2 w-1/2 h-52 py-3 px-8 text-justify">
                <div className="mr-4">
                  <FaQuoteLeft className="text-red-500 text-xl" />
                </div>
                <div>
                  <p className="h-36 text-sm">
                    Great Experience. Recommended for all.
                  </p>
                  <p className="text-right mt-2 font-bold text-lg">
                    Neelam Jabeen
                  </p>
                </div>
              </div>
              <div className="flex border-2 w-1/2 h-52 py-3 px-8 text-justify">
                <div className="mr-4">
                  <FaQuoteLeft className="text-red-500 text-xl" />
                </div>
                <div>
                  <p className="h-36 text-sm">
                    Highly impressed with the University of Decrecen&apos;s
                    Regional Office in Dubai! Excellent support and guidance.
                  </p>
                  <p className="text-right mt-2 font-bold text-lg">
                    Adeel Arshad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
