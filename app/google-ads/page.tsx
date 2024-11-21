"use client";
import BenefitsCard from "@/components/googleadspagecomponents/BenefitsCard";
import TestimonialsCard from "@/components/googleadspagecomponents/TestimonialsCard";
import { Form, Input, Checkbox, Button, Select } from "antd";
import type { FormProps } from "antd";
import React from "react";

type FieldType = {
  username?: string;
  email?: string;
  CGPA?: string;
  country?: string;
  preferredProgram?: string;
  studyLevel?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const page = () => {
  return (
    <div>
      <div
        className="bg-cover min-h-screen relative"
        style={{
          backgroundImage: `url("/google-ads-pic.png")`,
        }}
      >
        <div className="flex items-center justify-center h-screen mx-32">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-[#f4c453]">
              Your Gateway to a Fully Funded Education in Hungary!
            </h1>
            <p className="text-white">
              Dreaming of an affordable international education? With the
              Stipendium Hungaricum Scholarship, you can study for free at
              Hungary’s top universities. The 2025/2026 applications open on
              November 15, 2024
            </p>
          </div>

          <div className="w-1/2 p-20">
            <div className="bg-white p-5 rounded-lg">
              <p className="text-center mb-4 text-3xl font-bold text-[#114c3a]">
                Apply Now
              </p>
              <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item<FieldType>
                  name="username"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>

                <Form.Item<FieldType>
                  name="email"
                  rules={[{ required: true, message: "Please enter email" }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <div className="flex">
                  <Form.Item<FieldType>
                    name="CGPA"
                    rules={[{ required: true, message: "CGPA is required" }]}
                    className="w-1/2 mr-1"
                  >
                    <Input placeholder="CGPA" />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="country"
                    rules={[
                      { required: true, message: "Please enter country" },
                    ]}
                    className="w-1/2 ml-1"
                  >
                    <Input placeholder="Country" />
                  </Form.Item>
                </div>

                <Form.Item<FieldType>
                  name="preferredProgram"
                  rules={[{ required: true, message: "Please select one" }]}
                >
                  <Select placeholder="Preferred Program">
                    <Select.Option value="Engineering">
                      Engineering Program
                    </Select.Option>
                    <Select.Option value="Business">
                      Business Program
                    </Select.Option>
                    <Select.Option value="Medical">
                      Agriculture Program
                    </Select.Option>
                    <Select.Option value="Medical">
                      Health Sciences Program
                    </Select.Option>
                    <Select.Option value="Medical">
                      Medical Degree Program (Medical, Dentistry, Pharmacy )
                    </Select.Option>
                    <Select.Option value="Medical">
                      Humanities Program
                    </Select.Option>
                    <Select.Option value="Medical">IT Program</Select.Option>
                    <Select.Option value="Medical">Music Program</Select.Option>
                    <Select.Option value="Medical">
                      Science Program
                    </Select.Option>
                    <Select.Option value="Medical">Law Program</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item<FieldType>
                  name="studyLevel"
                  rules={[{ required: true, message: "Please select one" }]}
                >
                  <Select placeholder="Study Level">
                    <Select.Option value="Bachelors">Bachelor's</Select.Option>
                    <Select.Option value="Masters">Master's</Select.Option>
                    <Select.Option value="PhD/Doctoral">
                      PhD/Doctoral
                    </Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item label={null}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#114c3a] w-full p-2"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <div className="my-14 px-32">
        <h1 className="text-center text-2xl font-bold">
          Benefits of the Stipendium Hungaricum Scholarship
        </h1>
        <p className="text-center my-4">
          These benefits allow you to focus on your studies while immersing
          yourself in Hungary's vibrant culture and academic excellence.
        </p>
        <BenefitsCard />
      </div>

      <div className="flex items-center my-14 px-32">
        <div className="w-1/2">
          <p className="text-2xl font-bold my-2">About Stipendium Hungaricum</p>
          <p className="my-2 text-sm">
            Launched in 2013, the Stipendium Hungaricum Scholarship is a
            prestigious program by the Hungarian government, aimed at
            internationalizing Hungarian higher education. Each year, thousands
            of students from over 90 countries are awarded this fully funded
            scholarship, making it possible for them to study at Hungary’s best
            universities.
          </p>
          <p className="text-sm">
            Since its inception, the scholarship has supported over 11,000
            students annually, covering programs across a range of disciplines
            in English. With a 96% satisfaction rate, it offers an unparalleled
            educational experience without financial worries.
          </p>
        </div>
        <img
          src="/About Stipendium Hungaricum.png"
          alt="About Stipendium Hungaricum pic"
          className="w-1/2 p-5"
        />
      </div>

      <div className="my-14 h-72 w-full flex items-center justify-center relative">
        <img src="/google ads about us.png" className="absolute h-72 w-full" />
        <div className="flex flex-col items-center text-white px-32 relative">
          <p className="my-4 text-2xl font-bold">About University</p>
          <p className="text-center text-sm my-2">
            The University of Debrecen is the oldest higher education institute
            in Hungary since 1538. With a Ranking of the top 500 in the world,
            the University of Debrecen is among the top three higher education
            universities in Hungary. The university proudly offers more than 100
            international degree programs in 14 faculties fully taught in
            English. It is offering Foundation Programs, Undergraduate Programs,
            Post Graduate Programs, and Post Doctoral/PhD Programs. The fields
            of study included are agriculture, business, engineering, health,
            humanities, IT, law, medical, music, science, and much more. The
            University comprises of 30,000 student body with 7300 international
            students from more than 130 countries.
          </p>

          <button className="bg-[#F5B418] p-1 w-40 rounded-md my-2 font-bold">
            Apply Now
          </button>
        </div>
      </div>

      <div className="px-32">
        <p className="text-2xl font-bold text-center text-[#114c3a]">
          Testimonials
        </p>
        <TestimonialsCard />
      </div>

      <div className="px-32 flex flex-col items-center my-14">
        <p className="text-2xl font-bold text-[#114c3a] my-2">
          Ready to Apply?
        </p>
        <p className="text-sm px-60 text-center">
          Take the first step toward your future in Hungary! The Stipendium
          Hungaricum Scholarship offers a rare opportunity for a high-quality,
          fully funded education in Europe.
        </p>
        <p className="text-sm mb-2">
          Don’t miss out apply today and unlock a world of academic and cultural
          growth.
        </p>
        <button className="bg-[#F5B418] p-1 w-40 rounded-md my-2 text-white font-bold">
          Apply Now
        </button>
      </div>

      <div className="bg-[#114c3a] text-white text-center text-sm">
        <p>CopyRight University Of Debrecen © 2024</p>
      </div>
    </div>
  );
};

export default page;
