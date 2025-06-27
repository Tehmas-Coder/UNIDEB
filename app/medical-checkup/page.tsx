import Link from "next/link";
import React from "react";

const MedicalCheckup = () => {
  return (
    <div className="px-36 py-10 text-[#1e5e4b] font-nunito">
      <h1 className="text-[36px] font-bold py-6">Medical Check-up</h1>

      <div>
        <p className="bg-[#F5B418] text-center font-bold p-1">NEWS</p>
        <div className="flex justify-between border-solid border-[1px] border-gray-300 p-2">
          <div className="">
            <p className="">Important!</p>
            <p>For Stipendium Hungaricum Scholars</p>
          </div>

          <div className="bg-gray-300 w-[1px]" />

          <div className="">
            <p>
              Stipendium Hungaricum Students do not need to provide an
              additional Medical Certificate.
            </p>
            <p>
              The Mandatory Medical Certificate uploaded to the Online
              Scholarship Application System will be accepted!
            </p>
            <p>
              Please bring along the original document together with the medical
              and/or laboratory results!
            </p>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h3 className="text-2xl font-semibold">General Information</h3>

        <div className="my-4">
          <p className="text-xl font-semibold">Important Notes</p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              The general vaccination rules (concerning COVID vaccination,
              please check our{" "}
              <Link
                href="https://edu.unideb.hu/p/freshman-info"
                target="_blank"
                className="text-[#F5B418]"
              >
                Freshman Info site
              </Link>
              ) and the obligatory medical check-ups are regulated by the
              Hungarian law and the University of Debrecen.
            </li>
            <li>
              According to the Regulations of the Hungarian Government and on
              the basis of the decision of the University of Debrecen, all
              students have to go through a medical check-up upon arrival.
            </li>
            <li>
              Students on <strong>medical and health sciences programs</strong>{" "}
              are required to have regular medical examinations during their
              studies to prove their health aptitude as certain chronic or
              recurring diseases and conditions may interfere with patient care
              or safety and may be incompatible with medical training or
              practice.
            </li>
            <li>
              Students on <strong>medical and health sciences programs</strong>{" "}
              cannot register for the subsequent semester and cannot start their
              practice without an up-to date and official medical certification.
            </li>
            <li>
              Official medical certifications can be provided only if the
              student has completed every part of the required test!
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold">Medical Check-up Procedure</h2>

      <div className="pb-4">
        <div className="my-4">
          <h3 className="text-xl font-semibold">
            Step 1 - Before you arrive to Hungary
          </h3>
          <p className="">
            Please make sure to upload the below listed documents by 15 August
            the latest. Personal registration is only possible if you have
            uploaded the documents until the given deadline OR present them
            during the personal registration in Debrecen.
          </p>
          <p className="font-bold">
            The following documents must be uploaded (or presented at the time
            of registration); failure to do so will prevent the completion of
            your personal registration at the University.
          </p>
          <div className="m-6">
            <div className="my-3">
              <p className="font-bold text-[#F5B418]">
                1.1. Medical Certificate
              </p>
              <p>
                This should be filled out, signed, and stamped by a registered
                doctor.
                <Link href="">
                  You must present the document at registration.
                </Link>
              </p>
              <p>Please attach the required results as well.</p>
            </div>

            <div className="my-3">
              <p className="font-bold text-[#F5B418]">
                1.2. Health Questionnaire
              </p>
              <p>
                Please fill it out by yourself, print it and sign it.{" "}
                <Link href="">
                  You must present the document at registration.
                </Link>
              </p>
              <p>
                In case you have any chronic diseases, please bring with you all
                your Hospital/Outpatient/Primary Care medical reports, discharge
                letters, outpatient letters, list of medications etc. in
                English.
              </p>
            </div>

            <div className="my-3">
              <p className="font-bold text-[#F5B418]">
                1.3. International Childhood Vaccination Booklet or Vaccination
                Report
              </p>
              <p>
                <Link href="">
                  You must present the document at registration.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-xl font-semibold">Step 2 - At Registration</h3>
          <p>
            Please present all the documents listed at Step 1 (unless uploaded
            earlier) At registration, you will be provided a Check-list, that
            contains the exact time and date of your first appointment.
          </p>
        </div>

        <div className="my-4">
          <h3 className="text-xl font-semibold">
            Step 3 - Visit the GP's Office
          </h3>
          <p>
            Review of medical documentations by the Occupational Health
            Specialists Receiving appointment for further examinations (if
            needed)
          </p>
        </div>

        <h3 className="my-4 text-xl font-semibold">
          Step 4 - Additional examinations (if needed)
        </h3>

        <div className="my-4">
          <h3 className="text-xl font-semibold">
            Step 5 - Return to the GP's Office to receive and discuss results
          </h3>
          <p>
            IMPORTANT: to all medical examinations bring your passport and the
            Check-list with you!
          </p>
        </div>
      </div>

      <div className="py-4">
        <h3 className="text-xl font-semibold">During your studies</h3>
        <p>
          You must undergo regular physical examinations and health check-ups
          with Occupational Health Specialists of the UD, which depends on the
          subject you study and you will be notified by the Coordinating Center
          for International Education.
        </p>

        <div className="my-4">
          <p className="underline underline-offset-4">Special regulations:</p>
          <ul className="list-disc pl-6">
            <li>
              All tests will be taken at the Clinical Departments of the
              University of Debrecen.
            </li>
            <li>No other provider’s medical test results will be accepted.</li>
            <li>
              In case the cost of the examination has to be paid by the student,
              it must be paid in advance.
            </li>
            <li>
              Charge for replacement of lost check-list: 5,000 HUF. Charge for
              missed scheduled appointment: 5,000 HUF/new appointment.
            </li>
          </ul>
        </div>

        <p className="text-xl font-semibold mt-4">
          Clinical practices can only be started with a valid medical clearance.
        </p>
      </div>

      <h2 className="text-2xl font-semibold">
        Download your Medical Certificate
      </h2>
      <p className="text-xl text-[#F5B418]">
        <Link href="/pdf/Questionnaire_2025.pdf" target="_blank">
          Download the Health Questionnaire{" "}
        </Link>
      </p>
      <p className="text-xl text-[#F5B418]">
        <Link
          href="/pdf/Medical_Certificate_International_Students_2025.pdf"
          target="_blank"
        >
          Download the Medical Certificate Template{" "}
        </Link>
      </p>
      <p className="text-xl text-[#F5B418]">
        <Link href="/pdf/Medical_Check_up.pdf" target="_blank">
          Download the instructions and regulations in PDF
        </Link>
      </p>
    </div>
  );
};

export default MedicalCheckup;
