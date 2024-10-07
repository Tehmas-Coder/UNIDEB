"use client";
import React, { useState, useEffect } from "react";
import { BiUpArrowCircle } from "react-icons/bi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        // Adjust the scroll threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`fixed bottom-10 right-10 transition-opacity ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="text-red-400 hover:text-red-600 hover:scale-110 duration-300"
        >
          <BiUpArrowCircle size={44} />
        </button>
      </div>
    </>
  );
};

export default ScrollToTop;
