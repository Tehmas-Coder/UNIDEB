"use client";
import React, { useEffect } from "react";
import TagManager, { TagManagerArgs } from "react-gtm-module";

import Home from "./home/Home";

const Page: React.FC = () => {
  const gtmId = process.env.NEXT_PUBLIC_GTM2_ID || "";

  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Home />;
};

export default Page;
