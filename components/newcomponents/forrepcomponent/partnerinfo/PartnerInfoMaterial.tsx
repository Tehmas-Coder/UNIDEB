"use client";
import React from "react";

const PartnerInfoMaterial = () => {
  const handleDownloadClick = (item: string) => {
    let file = "";
    switch (item) {
      case "AgentsHandbook":
        file = "/zip/agents-handbook_1_1.zip";
        break;
      case "ApplicationForms":
        file = "/zip/Application_forms_2023_04_28 (1).zip";
        break;
      case "StuArtSystemManual":
        file = "/zip/StuArt System Manual.zip";
        break;
      default:
        return;
    }

    // Create a temporary anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = file;

    // Set the download attribute to force download
    downloadLink.download = `${item.toLowerCase()}.zip`;

    // Append the anchor element to the document body
    document.body.appendChild(downloadLink);

    // Trigger a click event on the anchor element
    downloadLink.click();

    // Clean up: remove the anchor element
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="my-10">
      <h1 className="text-2xl text-[#155744] font-bold">
        Partner Information Materials
      </h1>
      <div className="text-[#F5B418] font-semibold">
        <p
          onClick={() => handleDownloadClick("AgentsHandbook")}
          className="my-1 cursor-pointer sm:w-1/6"
        >
          Agents Handbook
        </p>
        <p
          onClick={() => handleDownloadClick("ApplicationForms")}
          className="my-1 cursor-pointer sm:w-1/6"
        >
          Application Forms
        </p>
      </div>
    </div>
  );
};

export default PartnerInfoMaterial;
