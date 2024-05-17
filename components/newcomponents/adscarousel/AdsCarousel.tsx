import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleAdsData from "../../../app/google-ads.json";

const AdsCarousel = () => {
  const TestimonialData = [
    {
      image: "/graduate (1).jpg",
      program: "Graduate Program",
    },
    {
      image: "/undergraduate (1).jpg",
      program: "Undergraduate Program",
    },
    {
      image: "/foundation.jpg",
      program: "Foundation Program",
    },
    {
      image: "/Medical (1).jpg",
      program: "Medical Program",
    },
    {
      image: "/PHD-1.jpg",
      program: "PhD/Doctoral Program",
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
        <div className="w-full px-20 m-auto">
          <div className="mt-20">
            <Slider className="grid grid-cols-2 md:grid-cols-5" {...settingslg}>
              {TestimonialData.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <div className="bg-white h-[250px] text-black rounded-xl">
                  <div className="h-full rounded-t-xl bg-green-50 flex rounded-xl">
                    <img
                      src={data.image}
                      alt={data.program}
                      className="h-full w-full object-cover rounded-xl"
                    ></img>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-white text-xl">{data.program}</p>
                  </div>

                  {/* <div className="absolute text-center top-1/2 text-3xl w-[560px] font-bold text-white">
                    <p className="">{data.program}</p>
                  </div> */}
                </div>
              ))}
            </Slider>
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
                  <div className="h-full rounded-xl bg-green-50 flex justify-center items-center">
                    <img
                      src={data.image}
                      alt=""
                      className="h-full w-full object-cover rounded-xl"
                    ></img>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-white">{data.program}</p>
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
                  <div className="h-full rounded-xl bg-green-50 flex justify-center items-center">
                    <img
                      src={data.image}
                      alt=""
                      className="h-full w-full object-cover rounded-xl"
                    ></img>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-2 p-4">
                    <p className="text-xl text-white">{data.program}</p>
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

export default AdsCarousel;
