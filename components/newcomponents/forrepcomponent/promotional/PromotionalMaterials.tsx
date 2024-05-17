"use client";
import React from "react";

const PromotionalMaterials = () => {
  // Function to handle the click event on any item
  const handleDownloadClick = (item: string) => {
    let file = "";
    switch (item) {
      case "Brochures":
        file = "/zip/Brochures.zip";
        break;
      case "Flyers":
        file = "/zip/Flyers (1).zip";
        break;
      case "Pictures":
        file = "/zip/Pictures.zip";
        break;
      case "Rollups":
        file = "/zip/Rollups.zip";
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
    <div className="font-nunito ">
      <div className="my-10">
        <h1 className="text-2xl text-[#155744] font-bold">
          Promotional Materials
        </h1>

        <div className="text-[#F5B418] font-semibold">
          <a href="/brouchers">
            <p
              // onClick={() => handleDownloadClick("Brochures")}
              className="my-1 cursor-pointer w-1/6"
            >
              Brochures
            </p>
          </a>
          <p
            onClick={() => handleDownloadClick("Flyers")}
            className="my-1 cursor-pointer w-1/6"
          >
            Flyers
          </p>
          <p
            onClick={() => handleDownloadClick("Pictures")}
            className="my-1 cursor-pointer w-1/6"
          >
            Pictures
          </p>
          <p
            onClick={() => handleDownloadClick("Rollups")}
            className="my-1 cursor-pointer w-1/6"
          >
            Rollups
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionalMaterials;
