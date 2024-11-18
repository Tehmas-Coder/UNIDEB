import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleAdsData from "../../../app/google-ads.json";

const TesCarousel = () => {
  const TestimonialData = [
    {
      image: "/roshan.png",
      name: "Roshan Jijo",
      desc: "This past one year has been one of the best moments in my life.",
      program: "Professional Pilot",
    },
    {
      image: "/marvi.png",
      name: "Marvi",
      desc: "The medical school of the Univeristy of Debrecen is counted in World’s best medical institutes.",
      program: "Molecular Medicine, PhD",
    },
    {
      image: "/AlNasr.png",
      name: "Al Nasar Ahmed",
      desc: "This is really an afforabdable option to get European experience along with a quality education.",
      program: "Molecular Biology, MSc",
    },
    {
      image: "/Kazi Mahfuzur Rehman.png",
      name: "Kazi Mahfuzur Rahman",
      desc: "I recently received my student visa for Hungary and will be attending the University of Debrecen, the oldest and most prestigious public university in the country.",
      program: "LLM",
    },
  ];

  const settingslg = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };

  const settingsmd = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  };

  const settingssm = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      {/* -----------------------------------------------------------------------Large Screen----------------------------------------------------------------- */}

      <div className="bg-[#155744] hidden lg:block">
        <div className="w-3/4 m-auto">
          <div className="mt-20">
            <Slider className="grid grid-cols-2 md:grid-cols-5" {...settingslg}>
              {TestimonialData.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <div className="bg-white h-[450px] text-black rounded-xl">
                  <div className="h-56 rounded-t-xl bg-green-50 flex justify-center items-center">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="h-44 w-44 object-cover rounded-full"
                    ></img>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2 p-3">
                    <p className=" italic w-4/5">&quot;{data.desc}&quot;</p>
                    <p className="font-bold text-xl">{data.name}</p>
                    <p>{data.program}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full flex justify-center py-10">
            <a href="/testimonials">
              <button className="bg-[#F5B418] p-4 rounded-lg text-xl hover:scale-105 transition-all duration-300">
                Explore Testimonials
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------Medium Screen---------------------------------------------------------------- */}

      <div className="bg-[#155744] hidden md:block lg:hidden">
        <div className="w-3/4 m-auto">
          <div className="mt-20">
            <Slider className="grid grid-cols-2 md:grid-cols-5" {...settingsmd}>
              {TestimonialData.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <div className="bg-white h-[400px] text-black rounded-xl">
                  <div className="h-44 rounded-t-xl bg-green-50 flex justify-center items-center">
                    <img
                      src={data.image}
                      alt=""
                      className="h-36 w-36 object-cover rounded-full"
                    ></img>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="italic">&quot;{data.desc}&quot;</p>
                    <p className="font-bold">{data.name}</p>
                    <p>{data.program}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------------------------Mob Screen-------------------------------------------------------------------- */}

      <div className="bg-[#155744] md:hidden">
        <div className="w-3/4 m-auto">
          <div className="mt-20">
            <Slider className="grid grid-cols-2 md:grid-cols-5" {...settingssm}>
              {TestimonialData.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <div className="bg-white h-[350px] text-black rounded-xl">
                  <div className="h-40 rounded-t-xl bg-green-50 flex justify-center items-center">
                    <img
                      src={data.image}
                      alt=""
                      className="h-32 w-32 object-cover rounded-full"
                    ></img>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2 p-4">
                    <p className="italic">&quot;{data.desc}&quot;</p>
                    <p className="font-bold text-xl">{data.name}</p>
                    <p>{data.program}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default TesCarousel;
