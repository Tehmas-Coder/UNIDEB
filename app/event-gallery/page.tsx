"use client";
import React, { useState } from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import EventGalleryCarousel from "@/components/common/eventGalleryCarousel/EventGalleryCarousel";

const Page = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const { Panel } = Collapse;

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const imagesEvents = [
    {
      image_url: "/Farewell 1.jpg",
      title: "Farewell",
    },
    {
      image_url: "/Farewell 3.jpg",
      title: "Farewell",
    },
    {
      image_url: "/Farewell 4.jpg",
      title: "Farewell",
    },
    {
      image_url: "/Farewell 2.jpg",
      title: "Farewell",
    },
  ];

  const imagesInfo = [
    {
      image_url: "/info day 9.jpg",
      title: "Info day",
    },
    {
      image_url: "/10.jpg",
      title: "Info day",
    },
    {
      image_url: "/info day 1.jpg",
      title: "Info day",
    },
    {
      image_url: "/info day 2.jpg",
      title: "Info day",
    },
    {
      image_url: "/info day 3.jpg",
      title: "Info day",
    },
    {
      image_url: "/info day 5.jpg",
      title: "Info day",
    },
    {
      image_url: "/info day 6.jpg",
      title: "Info day",
    },
    {
      image_url: "/info day 7.jpg",
      title: "Info day",
    },
    {
      image_url: "/info day 4.jpg",
      title: "Info day",
    },
    {
      image_url: "/info day 8.jpg",
      title: "Info day",
    },
  ];

  const imagesExpo = [
    {
      image_url: "/GlobalEducation (1).jpeg",
      title: "Dubai 2024",
    },
    {
      image_url: "/GlobalEducation (1).jpeg",
      title: "Dubai 2024",
    },
    {
      image_url: "/GlobalEducation (1).jpeg",
      title: "Dubai 2024",
    },
    {
      image_url: "/Abu Dhabi Corniche, UAE (1).jpeg",
      title: "Abu Dhabi 2024",
    },
    {
      image_url: "/Abu Dhabi Corniche, UAE (2).jpeg",
      title: "Abu Dhabi 2024",
    },
    {
      image_url: "/Group Edu Dubai.jpeg",
      title: "Dubai 2024",
    },
    {
      image_url: "/Rawalpindi PAK 1.jpeg",
      title: "Rawalpindi 2024",
    },
    {
      image_url: "/Rawalpindi PAK 2.jpeg",
      title: "Rawalpindi 2024",
    },
    {
      image_url: "/Al Qusais 1.jpeg",
      title: "Al-Qusais UAE 2024",
    },
    {
      image_url: "/Al Qusais 2.jpeg",
      title: "Al-Qusais UAE 2024",
    },
    {
      image_url: "/Sharjah UAE 1.jpeg",
      title: "Sharjah UAE 2024",
    },
    {
      image_url: "/Sharjah UAE 2.jpeg",
      title: "Sharjah UAE 2024",
    },
    {
      image_url: "/Pindi3.jpg",
      title: "Pindi 2023",
    },
    {
      image_url: "/Germany Expo (1).jpeg",
      title: "Icef Berlin, Germany 2023",
    },
    {
      image_url: "/Germany Expo (2).jpeg",
      title: "Icef Berlin, Germany 2023",
    },
    {
      image_url: "/Germany Expo (3).jpeg",
      title: "Icef Berlin, Germany 2023",
    },
    {
      image_url: "/Germany Expo (4).jpeg",
      title: "Icef Berlin, Germany 2023",
    },
    {
      image_url: "/Germany Expo (5).jpeg",
      title: "Icef Berlin, Germany 2023",
    },
    {
      image_url: "/Peshawar Expo (2).jpeg",
      title: "Peshawar 2023",
    },
    {
      image_url: "/Peshawar Expo (1).jpeg",
      title: "Peshawar 2023",
    },
    {
      image_url: "/Abbottabad Expo.jpeg",
      title: "Abbottabad 2023",
    },
    {
      image_url: "/Abbottabad Expo 2.jpeg",
      title: "Abbottabad 2023",
    },
    {
      image_url: "/Islamabad 1.jpg",
      title: "Islamabad 2023",
    },
    {
      image_url: "/Mrdan 1.jpg",
      title: "Mardan 2023",
    },
    {
      image_url: "/Pindi1.jpg",
      title: "Pindi 2023",
    },
    {
      image_url: "/Pindi2.jpg",
      title: "Pindi 2023",
    },
    {
      image_url: "/Lahore 1.jpg",
      title: "Lahore 2023",
    },
    {
      image_url: "/Najah Abu Dhabi 1.jpg",
      title: "Najah Abu Dhabi 2023",
    },
    {
      image_url: "/Najah Abu Dhabi 3.jpg",
      title: "Najah Abu Dhabi 2023",
    },
    {
      image_url: "/Najah Abu Dhabi 2.jpg",
      title: "Najah Abu Dhabi 2023",
    },
    {
      image_url: "/Peshawar 1.jpg",
      title: "Peshawar 2023",
    },
    {
      image_url: "/Peshawar 2.jpg",
      title: "Peshawar 2023",
    },
  ];

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p className="text-lg font-semibold text-[#114c3a]">Education Expo</p>
      ),
      children: (
        <div className="grid grid-cols-4 gap-4 w-[90%]">
          {imagesExpo.map((imgObj, index) => (
            <div
              key={index}
              className="relative cursor-pointer transform-gpu transition-transform hover:scale-105 overflow-hidden"
              onClick={() => setPreviewImage(imgObj.image_url)}
            >
              <img
                src={imgObj.image_url}
                className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-60"
                alt={`image ${index + 1}`}
              />
              <div
                className="absolute inset-0 flex items-center justify-center animate-in zoom-in-100 slide-in-from-bottom opacity-0 hover:opacity-100 transition-all duration-300"
                style={{ background: "rgba(0, 0, 0, 0.5)" }}
              >
                <p className="text-white text-center animate-in zoom-in">
                  {imgObj.title || formatTitle(imgObj.image_url)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },

    {
      key: "2",
      label: (
        <p className="text-lg font-semibold text-[#114c3a]">Team Events</p>
      ),
      children: (
        <div className="grid grid-cols-4 gap-4 w-[90%]">
          {imagesEvents.map((imgObj, index) => (
            <div
              key={index}
              className="relative cursor-pointer transform-gpu transition-transform hover:scale-105 overflow-hidden"
              onClick={() => setPreviewImage(imgObj.image_url)}
            >
              <img
                src={imgObj.image_url}
                className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-60"
                alt={`image ${index + 1}`}
              />
              <div
                className="absolute inset-0 flex items-center justify-center animate-in zoom-in-100 slide-in-from-bottom opacity-0 hover:opacity-100 transition-all duration-300"
                style={{ background: "rgba(0, 0, 0, 0.5)" }}
              >
                <p className="text-white text-center animate-in zoom-in">
                  {/* {imgObj.title || formatTitle(imgObj.image_url)} */}
                  {imgObj.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },

    {
      key: "3",
      label: <p className="text-lg font-semibold text-[#114c3a]">Info Day</p>,
      children: (
        <div className="grid grid-cols-4 gap-4 w-[90%]">
          {imagesInfo.map((imgObj, index) => (
            <div
              key={index}
              className="relative cursor-pointer transform-gpu transition-transform hover:scale-105 overflow-hidden"
              onClick={() => setPreviewImage(imgObj.image_url)}
            >
              <img
                src={imgObj.image_url}
                className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-60"
                alt={`image ${index + 1}`}
              />
              <div
                className="absolute inset-0 flex items-center justify-center animate-in zoom-in-100 slide-in-from-bottom opacity-0 hover:opacity-100 transition-all duration-300"
                style={{ background: "rgba(0, 0, 0, 0.5)" }}
              >
                <p className="text-white text-center animate-in zoom-in">
                  {imgObj.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const formatTitle = (url: any) => {
    return url.split("/").pop().split(".")[0].replace(/[0-9]/g, "").trim();
  };

  const [previewImageIndex, setPreviewImageIndex] = useState<number | null>(
    null
  );

  const openCarousel = (index: number) => {
    setPreviewImageIndex(index);
  };

  const closeCarousel = () => {
    setPreviewImageIndex(null);
  };

  return (
    <>
      {/* {previewImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="relative">
            <button
              onClick={closeCarousel}
              className="absolute top-2 right-2 text-white text-lg focus:outline-none"
            >
              Close
            </button>
            <EventGalleryCarousel
              images={imagesExpo}
              initialIndex={previewImageIndex !== null ? previewImageIndex : 0}
            />
          </div>
        </div>
      )} */}

      <div className="flex flex-col items-center mb-2 px-12">
        <h1 className="lg:text-[50px] text-[35px] font-bold text-[#F5B418] my-10">
          Events Gallery
        </h1>
      </div>

      <div>
        <Collapse defaultActiveKey={["1"]} ghost>
          <Panel
            className="text-lg font-nunito font-bold text-[#155744]"
            header="Education Expo"
            key="1"
          >
            <div className="grid grid-cols-4 gap-4 w-[90%]">
              {imagesExpo.map((imgObj, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer transform-gpu transition-transform hover:scale-105 overflow-hidden"
                  onClick={() => openCarousel(index)}
                >
                  <img
                    src={imgObj.image_url}
                    className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-60"
                    alt={`image ${index + 1}`}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center animate-in zoom-in-100 slide-in-from-bottom opacity-0 hover:opacity-100 transition-all duration-300"
                    style={{ background: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <p className="text-white text-center animate-in zoom-in">
                      {imgObj.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
          <Panel
            className="text-lg font-nunito font-bold text-[#155744]"
            header="Info Day"
            key="2"
          >
            <div className="grid grid-cols-4 gap-4 w-[90%]">
              {imagesInfo.map((imgObj, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer transform-gpu transition-transform hover:scale-105 overflow-hidden"
                  onClick={() => openCarousel(index)}
                >
                  <img
                    src={imgObj.image_url}
                    className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-60"
                    alt={`image ${index + 1}`}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center animate-in zoom-in-100 slide-in-from-bottom opacity-0 hover:opacity-100 transition-all duration-300"
                    style={{ background: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <p className="text-white text-center animate-in zoom-in">
                      {imgObj.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel
            className="text-lg font-nunito font-bold text-[#155744]"
            header="Team Events"
            key="3"
          >
            <div className="grid grid-cols-4 gap-4 w-[90%]">
              {imagesEvents.map((imgObj, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer transform-gpu transition-transform hover:scale-105 overflow-hidden"
                  onClick={() => openCarousel(index)}
                >
                  <img
                    src={imgObj.image_url}
                    className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-60"
                    alt={`image ${index + 1}`}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center animate-in zoom-in-100 slide-in-from-bottom opacity-0 hover:opacity-100 transition-all duration-300"
                    style={{ background: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <p className="text-white text-center animate-in zoom-in">
                      {imgObj.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </Collapse>

        {/* {previewImageIndex !== null && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
            <div className="relative">
              <button
                onClick={closeCarousel}
                className="absolute top-2 right-2 text-white text-lg focus:outline-none"
              >
                Close
              </button>
              <EventGalleryCarousel
                images={imagesExpo}
                initialIndex={previewImageIndex}
              />
            </div>
          </div>
        )} */}

        {/* {previewImageIndex !== null && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
            <div className="relative">
              <button
                onClick={closeCarousel}
                className="absolute top-2 right-2 text-white text-lg focus:outline-none"
              >
                Close
              </button>
              <EventGalleryCarousel
                images={imagesInfo}
                initialIndex={previewImageIndex}
              />
            </div>
          </div>
        )} */}

        {/* {previewImageIndex !== null && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
            <div className="relative">
              <button
                onClick={closeCarousel}
                className="absolute top-2 right-2 text-white text-lg focus:outline-none"
              >
                Close
              </button>
              <EventGalleryCarousel
                images={imagesEvents}
                initialIndex={previewImageIndex}
              />
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};

export default Page;
