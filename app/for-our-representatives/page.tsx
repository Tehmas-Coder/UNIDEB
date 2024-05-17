import AgentTraining from "@/components/newcomponents/forrepcomponent/agenttraining/AgentTraining";
import PartnerInfoMaterial from "@/components/newcomponents/forrepcomponent/partnerinfo/PartnerInfoMaterial";
import PromotionalMaterials from "@/components/newcomponents/forrepcomponent/promotional/PromotionalMaterials";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "University of Debrecen For Our Representatives",
  description:
    "The University of Debrecen Agent Training Recorded Zoom sessions, brouchers, flyers and manuals for representatives",
  keywords:
    "Agent Training Recorded Zoom sessions, brouchers, flyers,manuals for representatives",
  robots: "index, follow",
  formatDetection: { telephone: false },
  viewport:
    "initial-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
  authors: [
    {
      name: "University of Debrecen South Asia Regional Office",
      url: "https://www.facebook.com/UODHROSA/",
    },
  ],
  publisher: "University of Debrecen South Asia Regional Office",
};

const ForOurRepresentatives = () => {
  return (
    <div className="font-nunito mx-4 sm:mx-20">
      <h1 className="md:text-5xl text-3xl font-semibold text-[#F5B418] my-10">
        For Our Representatives
      </h1>

      <AgentTraining />
      <PromotionalMaterials />
      <PartnerInfoMaterial />

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
