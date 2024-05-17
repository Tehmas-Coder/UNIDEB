'use client'
import React from 'react';

import Card from '@/components/servicepagecomponent/Card';
import { FaCcVisa, FaUserCheck } from 'react-icons/fa';
import { PiChatsCircleFill } from 'react-icons/pi';
import { IoMdDocument } from 'react-icons/io';

interface ServiceData {
  logo: JSX.Element;
  title: string;
  para: string;
}

const Page: React.FC = () => {
  const data: ServiceData[] = [
    {
      logo: <FaUserCheck size={40} />,
      title: 'Free Assessment',
      para:
        'Our dedicated team conducts a comprehensive document-based assessment to evaluate your eligibility for admission, allowing you to determine if you meet the necessary requirements to apply to the University of Debrecen.',
    },
    {
      logo: <IoMdDocument size={40} />,
      title: 'Documents Assembling',
      para: 'Our expert team assists you in gathering and organizing the necessary documents required for your application process.',
    },
    {
      logo: <PiChatsCircleFill size={40} />,
      title: 'Counselling',
      para: 'We provide personalized counseling sessions to address your queries, guide you through the application process, and help you make informed decisions.',
    },
    {
      logo: <FaCcVisa size={40} />,
      title: 'Visa Guidance & Processing',
      para: 'Our experienced professionals offer assistance during the visa application procedures, ensuring that the application is submitted efficiently to maximize your chances of obtaining a visa.',
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center font-nunito pt-16 pb-12 px-4 lg:px-[14%]">
        <h1 className="text-[50px] font-bold text-[#F5B418] py-2 pb-4">Services</h1>
        <h3 className="text-[14px] text-nunito font-normal text-justify">
          At our regional office, we are dedicated to providing comprehensive services to support prospective students. Our range of services includes
        </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-6">
          {data.slice(0, 2).map((item, index) => (
            <div key={index} className="col-span-1">
              <Card logo={item.logo} title={item.title} para={item.para} />
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-[16px] lg:pt-8">
          {data.slice(2, 4).map((item, index) => (
            <div key={index} className="col-span-1">
              <Card logo={item.logo} title={item.title} para={item.para} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
