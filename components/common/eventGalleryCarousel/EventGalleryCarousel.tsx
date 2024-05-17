import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Images = {
  image_url: string;
  title: string;
};

interface EventGalleryCarouselProps {
  images: ImagesProp;
  initialIndex?: number; // Make initialIndex prop optional
}

type ImagesProp = Images[];

const EventGalleryCarousel: React.FC<EventGalleryCarouselProps> = ({
  images,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-opacity-50 bg-black ">
      <div className=" mx-auto">
        <div className="w-full">
          <img
            className="w-5/6 h-screen"
            src={images[currentIndex].image_url}
            alt={images[currentIndex].title}
          />
        </div>
        <div className="flex justify-between w-full absolute -translate-y-60">
          <button className="" onClick={prevSlide}>
            <FaArrowLeft className="text-4xl text-white" />
          </button>
          <button onClick={nextSlide}>
            <FaArrowRight className="text-4xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventGalleryCarousel;
