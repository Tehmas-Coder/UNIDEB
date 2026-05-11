"use client";
import { useEffect } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "zapier-interfaces-chatbot-embed": any;
    }
  }
}

const ZapierChatbot = () => {
  //   const chatbotId = import.meta.env.VITE_ZAPIER_CHATBOT_ID;
  const chatbotId = process.env.NEXT_PUBLIC_ZAPIER_CHATBOT_ID;
  console.log(chatbotId);

  useEffect(() => {
    if (!chatbotId) return;

    const script = document.createElement("script");
    script.src =
      "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    script.async = true;
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [chatbotId]);

  if (!chatbotId) return null;

  // @ts-ignore
  return (
    <zapier-interfaces-chatbot-embed is-popup="true" chatbot-id={chatbotId} />
  );
};

export default ZapierChatbot;

{
  /* <script async type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></script> */
}
{
  /* <zapier-interfaces-chatbot-embed is-popup='true' chatbot-id='cmp0x6as8005ef5oz9obu6m3g'></zapier-interfaces-chatbot-embed> */
}
