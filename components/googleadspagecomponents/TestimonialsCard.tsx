import React from "react";

const TestimonialsCard = () => {
  const testimonialLinks = [
    {
      link: "https://www.youtube.com/embed/0Uf5mJt-HbQ?si=ZmTj9H477Z8knFh8",
      id: 1,
    },
    {
      link: "https://www.youtube.com/embed/FURWwqiUEFE?si=c7N_RbtC5oQuuQoT",
      id: 2,
    },
    {
      link: "https://www.youtube.com/embed/hqnkfJOHwvc?si=fmaQ-g46dU8LqiBv",
      id: 3,
    },
    {
      link: "https://www.youtube.com/embed/hxgfwYZZECs?si=yuNRlonD-SIeD5nC",
      id: 4,
    },
    {
      link: "https://www.youtube.com/embed/PemCow1SlDs?si=jLX47jfzMR_B9AaA",
      id: 5,
    },
    {
      link: "https://www.youtube.com/embed/upepavkS0Js?si=0G6bCwceOwRAE7u5",
      id: 6,
    },
  ];
  return (
    <div>
      <div className="md:flex flex-wrap gap-12 items-center my-10 justify-center">
        {testimonialLinks.map((links) => (
          <div key={links.id} className="md:w-[30%] my-4 sm:my-0">
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

export default TestimonialsCard;
