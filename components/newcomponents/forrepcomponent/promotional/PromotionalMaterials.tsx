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

  const brochuresData = [
    {
      image: "/UD Brochure general.png",
      text: [
        {
          text: "Undergraduate_Programs_2025_print.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/UD%20brochure%20(squared)/UD_general_brochure_210x210mm_2025_print.pdf",
        },
        {
          text: "UD_general_brochure_210x210mm_2025_printUV.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/UD%20brochure%20(squared)/UD_general_brochure_210x210mm_2025_printUV.pdf",
        },
        {
          text: "UD_general_brochure_210x210mm_2025_web.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/UD%20brochure%20(squared)/UD_general_brochure_210x210mm_2025_web.pdf",
        },
      ],
    },
    {
      image: "/Bachelor Programs Brochure.png",
      text: [
        {
          text: "Undergraduate_Programs_2025_print.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Undergraduate%20programs%20brochure/Undergraduate_Programs_2025_print.pdf",
        },
        {
          text: "Undergraduate_Programs_2025_printUV.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Undergraduate%20programs%20brochure/Undergraduate_Programs_2025_printUV.pdf",
        },
        {
          text: "Undergraduate_Programs_2025_web.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Undergraduate%20programs%20brochure/Undergraduate_Programs_2025_web.pdf",
        },
      ],
    },
    {
      image: "/Masters Program Brochures.png",
      text: [
        {
          text: "Graduate Programs 2025_print.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Graduate%20programs%20brochure/Graduate%20Programs%202025_print.pdf",
        },
        {
          text: "Graduate Programs 2025_print UV.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Graduate%20programs%20brochure/Graduate%20Programs%202025_print%20UV.pdf",
        },
        {
          text: "Graduate Programs 2025_web.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Graduate%20programs%20brochure/Graduate%20Programs%202025_web.pdf",
        },
      ],
    },
    {
      image: "/Medical & Health Science.png",
      text: [
        {
          text: "Medical_and_health_sciences_program_2025_print.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Medical%20programs%20large%20brochure/Medical_and_health_sciences_program_2025_print.pdf",
        },
        {
          text: "Medical_and_health_sciences_program_2025_print_UV.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Medical%20programs%20large%20brochure/Medical_and_health_sciences_program_2025_print_UV.pdf",
        },
        {
          text: "Medical_and_health_sciences_program_2025_web.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Medical%20programs%20large%20brochure/Medical_and_health_sciences_program_2025_web.pdf",
        },
      ],
    },
    {
      image: "/Medical & Health Science small.png",
      text: [
        {
          text: "Small_Medical_227x151_2025_print.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Medical%20programs%20small%20brochure/Small_Medical_227x151_2025_print.pdf",
        },
        {
          text: "Small_Medical_227x151_2025_printUV.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Medical%20programs%20small%20brochure/Small_Medical_227x151_2025_printUV.pdf",
        },
        {
          text: "Small_Medical_227x151_2025_web.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Medical%20programs%20small%20brochure/Small_Medical_227x151_2025_web.pdf",
        },
      ],
    },
    {
      image: "/PhD Program Brochures.png",
      text: [
        {
          text: "English_language_PhD_programs_2025_print.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/PhD%20programs%20brochure/English_language_PhD_programs_2025_print.pdf",
        },
        {
          text: "English_language_PhD_programs_2025_printUV.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/PhD%20programs%20brochure/English_language_PhD_programs_2025_printUV.pdf",
        },
        {
          text: "English_language_PhD_programs_2025_web.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/PhD%20programs%20brochure/English_language_PhD_programs_2025_web.pdf",
        },
      ],
    },
    {
      image: "/Photobook.png",
      text: [
        {
          text: "Photobook",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Brochures%202025/Photobook/Photobook.pdf",
        },
      ],
    },
  ];

  const flyersData = [
    {
      image: "/Program fee flyer.png",
      text: [
        {
          text: "A4 Flyer 2025 - web.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Flyers%202025/Programs%20+%20fees%20flyer%20A4%20(folded%20A3)/A4%20Flyer%202025%20-%20web.pdf",
        },
        {
          text: "A4 flyer 2025 -print.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Flyers%202025/Programs%20+%20fees%20flyer%20A4%20(folded%20A3)/A4%20flyer%202025%20-print.pdf",
        },
      ],
    },
    {
      image: "/Stipendium Hungaricum Flyer.png",
      text: [
        {
          text: "Stipendium Flyer A5 v1 press.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Flyers%202025/Stipendium%20Hungaricum%20flyer/Stipendium%20Flyer%20A5%20v1%20press.pdf",
        },
        {
          text: "Stipendium Flyer A5 v2 press.pdf",
          link: "https://www.edu.unideb.hu/tartalom/for_representatives/Flyers%202025/Stipendium%20Hungaricum%20flyer/Stipendium%20Flyer%20A5%20v2%20press.pdf",
        },
      ],
    },
  ];

  return (
    <div className="font-nunito ">
      <div className="my-10">
        <h1 className="text-2xl text-[#155744] font-bold">
          Promotional Materials
        </h1>

        <div className="text-[#F5B418] font-semibold">
          <p
            // onClick={() => handleDownloadClick("Brochures")}
            className="my-1 cursor-pointer"
          >
            Brochures
          </p>
          {brochuresData.map((item, index) => (
            <div key={index} className="flex items-center gap-2 my-5">
              <img
                src={item.image}
                alt="UD Brochure general"
                className="w-[120px] h-[120px]"
              />
              <div className="flex flex-col gap-2">
                {item.text.map((text, text_index) => (
                  <p key={text_index} className="font-semibold">
                    <a href={text?.link} target="_blank">
                      {text?.text}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          ))}
          <p className="my-1 cursor-pointer">Flyers</p>
          {flyersData.map((item, index) => (
            <div key={index} className="flex items-center gap-2 my-5">
              <img
                src={item.image}
                alt="UD Brochure general"
                className="w-[120px] h-[120px]"
              />
              <div className="flex flex-col gap-2">
                {item.text.map((text, text_index) => (
                  <p key={text_index} className="font-semibold">
                    <a href={text?.link} target="_blank">
                      {text?.text}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          ))}
          <p
            onClick={() => handleDownloadClick("Pictures")}
            className="my-1 cursor-pointer"
          >
            Pictures
          </p>
          <p
            onClick={() => handleDownloadClick("Rollups")}
            className="my-1 cursor-pointer"
          >
            Rollups
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionalMaterials;
