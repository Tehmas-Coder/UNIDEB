"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
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
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div className=" w-full lg:w-[600px]">
      <div className="border-2 w-full lg:w-[600px] rounded-lg ">
        <form ref={form} onSubmit={sendEmail} className="p-2">
          <h1 className="text-3xl lg:text-4xl font-semibold py-5 px-2 text-center">
            Send us a message
          </h1>
          <div className="lg:p-3 p-1">
            <p className="text-sm my-2">Name</p>
            <input
              className="border-2 w-full h-10 rounded-lg py-6 px-2 bg-gray-50"
              placeholder="John Doe"
              type="text"
              required
              name="user_name"
            />
          </div>

          <div className="lg:p-3 p-1">
            <p className="text-sm my-2">Email</p>
            <input
              className="border-2 w-full h-10 rounded-lg py-6 px-2 bg-gray-50"
              placeholder="email@mail.com"
              type="email"
              required
              name="user_email"
            />
          </div>

          <div className="lg:p-3 p-1">
            <p className="text-sm my-2">Subject</p>
            <input
              className="border-2 w-full h-10 rounded-lg py-6 px-2 bg-gray-50"
              placeholder="Let us know how we can help you"
              type="subject"
              required
              name="subject"
            />
          </div>

          <div className="lg:p-3 p-1">
            <p className="text-sm my-2">Your Message</p>
            <textarea
              className="border-2 w-full h-32 rounded-md py-2 px-2 bg-gray-50"
              placeholder="Enter your message"
              required
              name="message"
            />
          </div>

          <div className="lg:p-3 p-1">
            <button
              className="w-full h-10 text-white text-xs bg-[#155744] rounded"
              type="submit"
              value="Send"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
