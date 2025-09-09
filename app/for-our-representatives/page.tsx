"use client";
import AgentTraining from "@/components/newcomponents/forrepcomponent/agenttraining/AgentTraining";
import PartnerInfoMaterial from "@/components/newcomponents/forrepcomponent/partnerinfo/PartnerInfoMaterial";
import PromotionalMaterials from "@/components/newcomponents/forrepcomponent/promotional/PromotionalMaterials";
import { Metadata } from "next";
import React from "react";
import data from "../data.json";

// export const metadata: Metadata = {
//   title: "University of Debrecen For Our Representatives",
//   description:
//     "The University of Debrecen Agent Training Recorded Zoom sessions, brouchers, flyers and manuals for representatives",
//   keywords:
//     "Agent Training Recorded Zoom sessions, brouchers, flyers,manuals for representatives",
//   robots: "index, follow",
//   formatDetection: { telephone: false },
//   viewport:
//     "initial-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
//   authors: [
//     {
//       name: "University of Debrecen South Asia Regional Office",
//       url: "https://www.facebook.com/UODHROSA/",
//     },
//   ],
//   publisher: "University of Debrecen South Asia Regional Office",
// };

const ForOurRepresentatives = () => {
  const handleDownloadClick = (item: string) => {
    let file = "";
    switch (item) {
      case "ApplicationForms":
        file = "/zip/Application forms.zip";
        break;
      case "Program&TuitionFee":
        file = "/excel/Tuition_Fee_2025_2026.xlsx";
        break;
      default:
        return;
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = file;
    downloadLink.download = `${item.toLowerCase()}.zip`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const udContacts = [
    {
      name: "Ms. Réka Derecskei",
      email: "derecskei.reka@edu.unideb.hu",
      program: "admission for non-medical programs",
    },
    {
      name: "Ms. Dóra Benkő",
      email: "dora@edu.unideb.hu",
      program: "admission for medical programs",
    },
    {
      name: "Ms. Adrienn Gagna-Szakó",
      email: "adrienn@edu.unideb.hu",
      program: "admission for medical programs",
    },
    {
      name: "Ms. Ildikó Lakatos",
      email: "lakatos.ildiko@edu.unideb.hu",
      program: "admission for medical programs",
    },
    {
      name: "Ms. Eszter Balázsy",
      email: "balazsy.eszter@edu.unideb.hu",
      program: "marketing",
    },
    {
      name: "Ms. Dóra Mónus",
      email: "monus.dora@edu.unideb.hu",
      program: "marketing",
    },
    {
      name: "Ms. Angelika Kiss",
      email: "kiss.angelika@edu.unideb.hu",
      program: "partner coordinator",
    },
  ];

  return (
    <div className="font-nunito mx-4 sm:mx-20">
      <h1 className="md:text-5xl text-3xl font-semibold text-[#F5B418] my-10">
        For Our Representatives
      </h1>

      <div className="my-5">
        <h1 className="text-2xl text-[#155744] font-bold">
          Application info pack 2025-2026
        </h1>
        <div className="text-[#F5B418] cursor-pointer font-semibold my-1">
          <p>
            <a href="/excel/Tuition_Fee_2025_2026.xlsx">
              Programs and tuition fees
            </a>
          </p>
          <p>
            <a href="/zip/Application forms.zip">Application forms</a>
          </p>
        </div>
      </div>

      <PromotionalMaterials />
      <PartnerInfoMaterial />
      <AgentTraining />

      {/* ------------------- Social Media Package ---------------------  */}

      <div className="my-5">
        <h1 className="text-2xl text-[#155744] font-bold">
          Social media package for promoting the Stipendium Hungaricum
        </h1>
        <p className="text-[#F5B418] cursor-pointer font-semibold mt-1">
          <a href="/zip/2024_stipi.zip">Download</a>
        </p>
      </div>

      {/* -------------------- Visa Procedure Training --------------------- */}

      <div className="my-5">
        <h1 className="text-2xl text-[#155744] font-bold">
          Visa Procedure Training 2024 (for further training videos scroll down)
        </h1>
        <div className="my-1">
          <p>
            <span className="text-[#F5B418] cursor-pointer font-semibold">
              <a
                href="https://edu.unideb.hu/tartalom/dok/new%20visa%20procedure%20video.mp4"
                target="_blank"
              >
                Recorded Zoom session of the visa procedure
              </a>
            </span>{" "}
            from 19 June 2024
          </p>
          <p>
            <span className="text-[#F5B418] cursor-pointer font-semibold">
              <a href="https://edu.unideb.hu/tartalom/dok/presentation-of-the-visa-procedure_1_1.pdf">
                Presentation of the visa procedure
              </a>
            </span>{" "}
            from 19 June 2024
          </p>
        </div>
      </div>

      {/* --------------------------- UD Contacts --------------------------- */}

      <div className="my-5">
        <h1 className="text-2xl text-[#155744] font-bold mb-2">UD Contacts</h1>
        {udContacts.map((contact, index) => (
          <div key={index}>
            <p>
              {contact?.name} (
              <a href="mailto:derecskei.reka@edu.unideb.hu">
                <span className="text-[#F5B418] cursor-pointer font-semibold">
                  {contact?.email}
                </span>
              </a>
              ): {contact?.program}
            </p>
          </div>
        ))}
      </div>

      {/* --------------------------- Youtube Channel --------------------- */}

      <div className="my-10">
        <h1 className="text-2xl text-[#155744] font-bold">Youtube Channel</h1>
        <div className="font-semibold">
          <a href="https://www.youtube.com/channel/UCQtsu1iCjqEKDYhJ73_QqMw/videos">
            <p className="text-[#F5B418]">
              https://www.youtube.com/channel/UCQtsu1iCjqEKDYhJ73_QqMw/videos
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForOurRepresentatives;
