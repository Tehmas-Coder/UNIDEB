import { link } from "fs";
import React from "react";

const Testimonials = () => {
  const testimonialsLinks = [
    {
      link: "https://www.youtube.com/embed/0Uf5mJt-HbQ?si=ZmTj9H477Z8knFh8",
      id: 1,
    },
    {
      link: "https://www.youtube.com/embed/5wkxWGuvPvs?si=2Hgtaq9Sg-X5Ir4i",
      id: 2,
    },
    {
      link: "https://www.youtube.com/embed/FURWwqiUEFE?si=c7N_RbtC5oQuuQoT",
      id: 3,
    },
    {
      link: "https://www.youtube.com/embed/hqnkfJOHwvc?si=fmaQ-g46dU8LqiBv",
      id: 4,
    },
    {
      link: "https://www.youtube.com/embed/hxgfwYZZECs?si=yuNRlonD-SIeD5nC",
      id: 5,
    },
    {
      link: "https://www.youtube.com/embed/7tdbiraswz4?si=csNDN6-5ncqwT45-",
      id: 6,
    },
    {
      link: "https://www.youtube.com/embed/HO5f6DLqcWA?si=hczBCK-pYM4z4Vi7",
      id: 7,
    },
    {
      link: "https://www.youtube.com/embed/ikF4nkclEUM?si=Mi6zHR6gkKbcD9ns",
      id: 8,
    },
    {
      link: "https://www.youtube.com/embed/rjWChF5Vtd8?si=D7uY9VKN7LUqU2O3",
      id: 9,
    },
    {
      link: "https://www.youtube.com/embed/PemCow1SlDs?si=jLX47jfzMR_B9AaA",
      id: 10,
    },
    {
      link: "https://www.youtube.com/embed/upepavkS0Js?si=0G6bCwceOwRAE7u5",
      id: 11,
    },
  ];
  return (
    <div className="flex flex-wrap ">
      <h1 className="text-center w-full my-10 text-4xl font-nunito font-semibold text-theme_primary">
        Testimonials
      </h1>
      <div className="md:flex flex-wrap gap-12 items-center my-10 justify-center">
        {testimonialsLinks.map((links) => (
          <div key={links.id} className="md:w-[30%] ">
            <iframe
              className="w-full rounded-lg aspect-video"
              src={links.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
