"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const handleClick = () => {
    const phoneNumber = "+971508448119";
    const message = "";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-14 left-2">
      <button className="text-green-600" onClick={handleClick}>
        <FaWhatsapp size={52} className="" />
      </button>
    </div>
  );
};

export default Whatsapp;
