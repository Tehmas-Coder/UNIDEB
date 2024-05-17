import DownloadAppFormCard from "@/components/downloadpagecomponent/DownloadAppFormCard";
import React from "react";
import data from "../data.json";

const AppForm = () => {
  return (
    <div className="flex flex-col justify-center font-nunito pt-16 pb-12 px-4 lg:px-[14%]">
      <h1 className="lg:text-[50px] text-[35px] font-bold text-[#F5B418] py-2 pb-4">
        Application Forms
      </h1>
      <div className="grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.DownloadPagesData.DownloadAppFormData.map((item) => (
          <DownloadAppFormCard
            key={item.id}
            image={item.image}
            pdf={item.pdf}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default AppForm;
