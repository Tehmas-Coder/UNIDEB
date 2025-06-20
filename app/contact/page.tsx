"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "@/components/common/form/ContactForm";

const Page: React.FC = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhswvho",
        "template_zg4fbto",
        form.current,
        "H9b3ahH24gYSVNo1v"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div className="lg:mx-[15%] mx-2 py-10 flex flex-col items-center">
      <div className="flex flex-col text-center items-center px-2 lg:px-10 mb-10">
        <h1 className="text-[30px] sm:text-[40px] text-gray-800 font-bold mt-10 mb-5">
          Connect with us
        </h1>

        <div className="border-b-4 border-[#F5B418] w-full py-2" />
      </div>

      <div className="flex justify-center items-center w-[900px] ">
        <ContactForm />
        {/* <iframe
          aria-label="Contact Us"
          // frameborder="0"
          // style="height:500px;width:99%;border:none;"
          src="https://forms.zohopublic.com/eduapply1/form/test/formperma/7aNovoEcf_xsPg8lOO_T36h_o6P12buPgDzIhq5ji9o"
          className="w-full h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Page;
