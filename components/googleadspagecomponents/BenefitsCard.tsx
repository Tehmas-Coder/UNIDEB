import React from "react";

const BenefitsCard = () => {
  const data = [
    {
      title: "100% Tuition Waiver",
      desc: "All tuition fees are fully covered for your chosen program.",
    },
    {
      title: "Monthly Stipend",
      desc: "Financial support for Bachelor's, Master's and PhD students.",
    },
    {
      title: "Free Accomodation",
      desc: "Dormitory placement or an accomodation allowance.",
    },
    {
      title: "Medical Insurance",
      desc: "Health insurance included for your entire stay.",
    },
  ];
  return (
    <div className="sm:flex justify-between w-full">
      {data.map((data, index) => (
        <div
          key={index}
          className="p-5 border-solid border-[1px] w-full sm:w-[23%] my-2 sm:my-0 bg-[#E5E5E5] hover:bg-[#144438] hover:text-white transition-all duration-300 cursor-pointer rounded-md"
        >
          <p className="text-xl font-bold text-center">{data.title}</p>
          <p className="text-center">{data.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsCard;
