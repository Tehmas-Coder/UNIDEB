import Link from "next/link";
import React from "react";

const DiscoverUD = () => {
  return (
    <div>
      <div className="group bg-yellow-200">
        <div className=" border-8 border-[#F5B418] rounded-md">
          <div className="font-nunito relative">
            <Link href={"https://debrecen.hostexp.com/"} target="_blank">
              <div className="relative overflow-hidden">
                <div className="w-full h-full cursor-pointer transform transition-transform hover:scale-105 ">
                  <img
                    // quality={100}
                    src={"/map.jpg"}
                    alt="3d-map"
                    height={2000}
                    width={2000}
                    className="w-full h-full"
                  />
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 centered-axis-xy hidden group-hover:flex justify-center">
                    <img
                      src="/pngwing.png"
                      alt=""
                      className="hover:scale-125 transition-all duration-500 h-24 w-24 text-4xl "
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverUD;
