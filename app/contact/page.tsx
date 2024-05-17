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
    <div className="lg:mx-[15%] mx-2 py-10">
      <div className="flex flex-col text-center items-center px-2 lg:px-10 mb-10">
        <h1 className="text-[30px] sm:text-[40px] text-gray-800 font-bold mt-10 mb-5">
          Connect with us
        </h1>

        <div className="border-b-4 border-[#F5B418] w-[30%] py-5" />
      </div>

      <div className="flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
