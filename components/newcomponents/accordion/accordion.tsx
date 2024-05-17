import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label:
      "How long is the admission procedure at the University of Debrecen ?",
    children: (
      <p>
        The admission procedure at the University of Debrecen from application
        submission to visa approval takes an average of one month for
        completion.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does the University of Debrecen offer an MBBS program?",
    children: (
      <p>
        Yes, the University of Debrecen offers a full-time graduate program in
        medicine to international and national students with the opportunity to
        gain clinical experience from the city hospital.
      </p>
    ),
  },
  {
    key: "3",
    label:
      "Does the University of Debrecen offer scholarships to international students?",
    children: (
      <p>
        Yes, the University of Debrecen participates in fully funded
        scholarships, namely the Stipendium Hungaricum Scholarship program,
        providing international students with the opportunity to study for free.
      </p>
    ),
  },
  {
    key: "4",
    label:
      "Does the University of Debrecen offer programs in the field of engineering?",
    children: (
      <p>
        Yes, the University of Debrecen offers various study programs such as
        Mechanical, Mechatronics, Biochemical, Vehicle, Chemical, Civil,
        Professional Pilot and Electrical in the field of Engineering.
      </p>
    ),
  },
  {
    key: "5",
    label:
      "Are the study programs at the University of Debrecen globally recognized?",
    children: (
      <p>
        Yes, the study programs at the University of Debrecen are globally
        recognized and accredited by various organizations including:
        <ul className="list-disc px-6">
          <li className="">World Health Organization (WHO)</li>
          <li>State Education Department (NY, USA)</li>
          <li>Medical Board of California</li>
          <li>Medical Councils of India</li>
          <li>General Medical Council (UK)</li>
          <li>
            European Federation of National Engineering Associations (FEAN)
          </li>
        </ul>
      </p>
    ),
  },
];

const Accordion: React.FC = () => (
  <Collapse className="" accordion items={items} />
);

export default Accordion;
