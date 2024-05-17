import React from "react";

interface StudyProgramCardProps {
  image: string;
  title: string;
  link: string;
}

const StudyProgramCard: React.FC<StudyProgramCardProps> = ({
  image,
  title,
  link,
}) => {
  return (
    <div
      className="relative cursor-pointer group items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 lg:w-auto rounded-lg" // Added rounded-lg class
    >
      <div className="w-[450px] h-[330px]">
        <img
          src={image}
          alt="card-image"
          height={200}
          width={200}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p className="text-white pb-20 text-xl font-nunito">{title}</p>
        <a href={link}>
          <button className="rounded-full bg-[#f5b418] text-white py-2 px-4 font-com text-sm capitalize shadow shadow-black/60">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default StudyProgramCard;
