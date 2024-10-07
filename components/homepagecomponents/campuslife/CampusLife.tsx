import React, { useState } from "react";

const CampusLife = () => {
  const [isHoveredCampus, setIsHoveredCampus] = useState(false);

  const handleHover = () => {
    setIsHoveredCampus(!isHoveredCampus);
  };

  return (
    <div className="hidden lg:block text-center mt-20">
      <h1 className="text-5xl text-[#114c3a] font-bold mb-16 mt-10">
        Campus Life
      </h1>
      <div
        className={`h-[14px] w-[22vw] transition-all duration-500 -translate-y-[6px] absolute ${
          isHoveredCampus ? "bg-[#114c3a]" : "bg-[rgba(245,180,24,1)]"
        }
          ${isHoveredCampus ? "translate-x-[70vw]" : "translate-x-[10vw]"}`}
      ></div>
      <img
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        src={isHoveredCampus ? "/Campus Life 11.jpg" : "/campuslife1.jpg"}
        alt="Campus Life"
        className="transition-all duration-500"
      />
      <div
        className={`h-[14px] w-[22vw] transition-all duration-500 absolute -translate-y-[6px] ${
          isHoveredCampus ? "bg-[#114c3a]" : "bg-[rgba(245,180,24,1)]"
        }
          ${!isHoveredCampus ? "translate-x-[70vw]" : "translate-x-[10vw]"}`}
      ></div>
    </div>
  );
};

export default CampusLife;
