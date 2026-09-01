"use client";
import React from "react";
import ScrollToTop from "@/components/scrolltotop/ScrollToTop";

const Page: React.FC = () => {
  return (
    <>
      <div className="lg:px-[10%] px-4 py-12 font-nunito text-[#155744]">
        {/* Main Title and Intro */}
        <h1 className="text-4xl font-bold mb-6 text-[#1e5e4b]">
          Faculties & Study Programs
        </h1>
        <p className="text-lg mb-4">
          <a
            href="/study-programs/"
            className="text-blue-600 hover:underline font-semibold"
          >
            Explore a wide range of English-taught programs
          </a>
          {" "}at the University of Debrecen. Students can choose from undergraduate,
          graduate, medical, and doctoral programs across agriculture, business, engineering,
          health sciences, humanities, information technology, law, medicine, music, and
          natural sciences.
        </p>
        <p className="text-lg mb-10">
          Select a study area below to discover available programs and find the path that
          matches your academic and career goals.
        </p>

        <hr className="my-8" />

        {/* Agriculture Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            Agriculture Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Build a Career in Agriculture, Food & Environmental Sciences
          </h3>
          <p className="mb-4">
            The University of Debrecen offers English-taught agriculture programs designed
            to prepare students for the changing needs of modern agriculture, food production,
            and environmental management.
          </p>
          <p className="mb-6">
            Students can develop knowledge in areas such as agricultural engineering, animal
            science, crop production, food safety, environmental management and plant
            protection.
          </p>

          <h4 className="text-xl font-bold mb-3">Why Study Agriculture?</h4>
          <p className="mb-6">
            Modern agriculture goes far beyond farming. It combines science, technology,
            sustainability, food production, environmental protection and business. Students
            learn how innovative solutions can help address global challenges such as food
            security, climate change, resource management and sustainable production.
          </p>

          <h4 className="text-xl font-bold mb-2">Undergraduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Agricultural Engineering, BSc</li>
            <li>Food Engineering, BSc</li>
            <li>Precision Agricultural Engineering, BSc</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Graduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Agricultural Environmental Management Engineering, MSc</li>
            <li>Agricultural Water Management Engineering, MSc</li>
            <li>Animal Husbandry Engineering, MSc</li>
            <li>Crop Production Engineering, MSc</li>
            <li>Food Safety and Quality Engineering, MSc</li>
            <li>Plant Protection, MSc</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Doctoral Opportunities</h4>
          <p className="mb-6">
            Doctoral study opportunities are also available in areas including Animal Science,
            Crop Sciences and Horticulture, and Food Science.
          </p>

          <p className="font-bold mb-2">Ready to start your journey?</p>
          <p>Explore admission requirements and apply to the University of Debrecen.</p>
        </section>

        <hr className="my-8" />

        {/* Business Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            Business Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Turn Your Ambition into a Global Business Career
          </h3>
          <p className="mb-6">
            Develop the knowledge and skills needed to succeed in today&apos;s international
            business environment. The University of Debrecen offers English-taught programs
            covering management, marketing, economics and international business.
          </p>

          <h4 className="text-xl font-bold mb-3">Why Study Business?</h4>
          <p className="mb-6">
            A business degree can lead to opportunities across almost every industry. Students
            develop valuable skills in management, strategy, marketing, economics, communication
            and decision-making that can support careers in companies, entrepreneurship and
            international organizations.
          </p>

          <h4 className="text-xl font-bold mb-2">Undergraduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Business Administration and Management, BSc</li>
            <li>Commerce and Marketing, BSc</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Graduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>International Economy and Business, MSc</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Doctoral Opportunities</h4>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Management and Business, PhD</li>
          </ul>
        </section>

        <hr className="my-8" />

        {/* Engineering Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            Engineering Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Design, Build and Shape the Future
          </h3>
          <p className="mb-4">
            The University of Debrecen offers engineering programs that combine theoretical
            education with practical knowledge and industry-oriented learning.
          </p>
          <p className="mb-6">
            Students can study areas including civil, mechanical, electrical, chemical,
            environmental, mechatronics, and vehicle engineering.
          </p>

          <h4 className="text-xl font-bold mb-3">Why Study Engineering?</h4>
          <p className="mb-6">
            Engineering allows students to solve real-world problems and contribute to
            technological development. Graduates can pursue careers in manufacturing,
            construction, energy, transportation, automation, sustainability, and many other
            rapidly developing industries.
          </p>

          <h4 className="text-xl font-bold mb-2">Undergraduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Biochemical Engineering, BSc</li>
            <li>Chemical Engineering, BSc</li>
            <li>Civil Engineering, BSc</li>
            <li>Electrical Engineering, BSc</li>
            <li>Engineering Management, BSc</li>
            <li>Environmental Engineering, BSc</li>
            <li>Mechanical Engineering, BSc</li>
            <li>Mechatronics Engineering, BSc</li>
            <li>Vehicle Engineering, BSc</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Graduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Chemical Engineering, MSc</li>
            <li>Electrical Engineering, MSc</li>
            <li>Engineering Management, MSc</li>
            <li>Environmental Engineering, MSc</li>
            <li>Mechanical Engineering, MSc</li>
            <li>Mechatronical Engineering, MSc</li>
            <li>Sports Engineering, MSc</li>
            <li>Urban Systems Engineering, MSc</li>
            <li>Vehicle Engineering, MSc</li>
            <li>Postgraduate Diploma in Lean Engineer</li>
          </ul>
        </section>

        <hr className="my-8" />

        {/* Health Sciences Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            Health Sciences Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Make a Difference in Health and Wellbeing
          </h3>
          <p className="mb-6">
            Study health sciences in an international academic environment and prepare for a
            career focused on improving people&apos;s health and quality of life.
          </p>

          <h4 className="text-xl font-bold mb-3">Why Study Health Sciences?</h4>
          <p className="mb-6">
            Health sciences graduates can pursue careers with hospitals, healthcare providers,
            research organizations, public health institutions, and international organizations.
            Programs combine academic knowledge with practical preparation for professional
            careers.
          </p>

          <h4 className="text-xl font-bold mb-2">Undergraduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Nursing and Patient Care – Physiotherapy, BSc</li>
            <li>Nursing and Patient Care – Nurse, BSc</li>
            <li>Health Care and Disease Prevention – Public Health, BSc</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Graduate Programs</h4>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Pharmaceutical Research and Development Manager, MSc</li>
            <li>Public Health, MSc</li>
            <li>Social Work in Health Care, MSc</li>
            <li>Social Work and Social Economics, MA</li>
          </ul>
        </section>

        <hr className="my-8" />

        {/* Humanities Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            Humanities Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Understand People, Culture and Communication
          </h3>
          <p className="mb-6">
            Explore language, culture, communication, psychology and society through the
            University&apos;s English-taught humanities programs.
          </p>

          <h4 className="text-xl font-bold mb-3">Why Study Humanities?</h4>
          <p className="mb-6">
            Humanities students develop communication, analytical, research, and
            critical-thinking skills that can be applied across many professions. Graduates
            may pursue careers in education, media, communication, research, tourism, cultural
            organizations and international institutions.
          </p>

          <h4 className="text-xl font-bold mb-2">Undergraduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Communication and Media Studies, BA</li>
            <li>English and American Studies, BA</li>
            <li>Romance Philology and Cultures – French Studies, BA</li>
            <li>Psychology, BA</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Graduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>American Studies, MA</li>
            <li>English Studies, MA</li>
            <li>Instruction of English as a Foreign Language, MA</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Doctoral Opportunities</h4>
          <p className="mb-6">
            Programs are available in areas including linguistics, literature, cultural
            studies, history, and human sciences.
          </p>
        </section>

        <hr className="my-8" />

        {/* IT Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            IT Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Create the Technology of Tomorrow
          </h3>
          <p className="mb-6">
            Build your future in one of the world&apos;s fastest-developing fields with
            English-taught information technology programs at the University of Debrecen.
          </p>

          <h4 className="text-xl font-bold mb-3">Why Study IT?</h4>
          <p className="mb-6">
            Technology is an essential part of almost every modern industry. IT students gain
            theoretical knowledge alongside practical problem-solving skills that can prepare
            them for careers in software development, data, artificial intelligence,
            information systems and technology management.
          </p>

          <h4 className="text-xl font-bold mb-2">Undergraduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Business Informatics, BSc</li>
            <li>Computer Science, BSc</li>
            <li>Computer Science Engineering, BSc</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Graduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Business Informatics, MSc</li>
            <li>Computer Science, MSc</li>
            <li>Computer Science Engineering, MSc</li>
            <li>Data Science, MSc</li>
            <li>Postgraduate Diploma in Artificial Intelligence</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Doctoral Opportunities</h4>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Informatics, PhD</li>
          </ul>
        </section>

        <hr className="my-8" />

        {/* Law Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            Law Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Build an International Legal Career
          </h3>
          <p className="mb-6">
            Study law in an academic environment with a strong international outlook and
            develop knowledge relevant to European and global business.
          </p>

          <h4 className="text-xl font-bold mb-3">Why Study International Law?</h4>
          <p className="mb-6">
            Global businesses and institutions increasingly operate across national borders.
            International legal education can prepare graduates for careers involving
            multinational companies, international institutions, consulting, public
            administration, and legal practice.
          </p>

          <h4 className="text-xl font-bold mb-2">Graduate Program</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>European and International Business Law, LL.M.</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Doctoral Opportunity</h4>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Law and Legal Studies, PhD</li>
          </ul>
        </section>

        <hr className="my-8" />

        {/* Medical Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            Medical Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Start Your Global Medical Career
          </h3>
          <p className="mb-4">
            The University of Debrecen offers English-taught medical degree programs supported
            by extensive academic, research, and clinical facilities.
          </p>
          <p className="mb-6">
            Students can pursue professional education in Medicine, Dentistry, and Pharmacy.
          </p>

          <h4 className="text-xl font-bold mb-3">Why Study Medicine at Debrecen?</h4>
          <p className="mb-6">
            Medical students combine theoretical education with practical and clinical
            training. The University&apos;s medical education has a long history, and students
            have opportunities to learn within an active clinical and research environment.
          </p>

          <h4 className="text-xl font-bold mb-2">Medical Degree Programs</h4>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Medicine, Full-time Graduate Program</li>
            <li>Dentistry, Full-time Graduate Program</li>
            <li>Pharmacy, Full-time Graduate Program</li>
          </ul>

          <p>
            Students interested in medical studies can also explore preparatory and tutoring
            opportunities before entrance examinations.
          </p>
        </section>

        <hr className="my-8" />

        {/* Music Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            Music Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Develop Your Talent and Creative Potential
          </h3>
          <p className="mb-6">
            Study music in an environment dedicated to artistic development, performance, and
            musical knowledge.
          </p>

          <h4 className="text-xl font-bold mb-3">Why Study Music?</h4>
          <p className="mb-6">
            Music education develops performance ability, creativity, discipline, and a deep
            understanding of musical culture. Graduates may work as performers, educators, or
            professionals within musical and cultural institutions.
          </p>

          <h4 className="text-xl font-bold mb-2">Foundation Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>International Foundation Year for Pop Music</li>
            <li>International Foundation Year for Classical Instrument and Voice Studies</li>
            <li>International Foundation Year for Musical Creative Art and Musicology</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Undergraduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Musical Creative Art and Musicology, BA</li>
            <li>Performance – Classical Music, BA</li>
            <li>Contemporary Music, BA</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Graduate Program</h4>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Classical Musical Performance, MA</li>
          </ul>
        </section>

        <hr className="my-8" />

        {/* Science Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            Science Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Discover, Research and Innovate
          </h3>
          <p className="mb-6">
            Explore the natural world through English-taught programs in biology,
            biotechnology, chemistry, mathematics, physics, earth sciences and environmental
            sciences.
          </p>

          <h4 className="text-xl font-bold mb-3">Why Study Science?</h4>
          <p className="mb-6">
            Scientific education develops analytical thinking, research ability, and
            problem-solving skills. Graduates can pursue careers in research, technology,
            environmental organizations, laboratories, education and industry.
          </p>

          <h4 className="text-xl font-bold mb-2">Undergraduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Biology, BSc</li>
            <li>Biotechnology, BSc</li>
            <li>Chemistry, BSc</li>
            <li>Earth Sciences, BSc</li>
            <li>Mathematics, BSc</li>
            <li>Physics, BSc</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Graduate Programs</h4>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Applied Mathematics, MSc</li>
            <li>Biology, MSc</li>
            <li>Chemistry, MSc</li>
            <li>Environmental Sciences, MSc</li>
            <li>Geography, MSc</li>
            <li>Geoinformatics, MSc</li>
            <li>Hydrobiology – Water Quality Management, MSc</li>
            <li>Molecular Biology, MSc</li>
            <li>Physics, MSc</li>
          </ul>

          <h4 className="text-xl font-bold mb-2">Doctoral Opportunities</h4>
          <p className="mb-6">
            PhD programs are available across biological, environmental, chemical, earth,
            mathematical, and physical sciences.
          </p>
        </section>

        <hr className="my-8" />

        {/* International Study Semester Program */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            International Study Semester Program
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Experience European University Life in Debrecen
          </h3>
          <p className="mb-4">
            The International Study Semester Program gives eligible students from partner
            universities the opportunity to study at the University of Debrecen for one or two
            semesters.
          </p>
          <p className="mb-6">
            Students can select relevant subjects from available academic areas and earn ECTS
            credits during their study period.
          </p>

          <h4 className="text-xl font-bold mb-3">Program Highlights</h4>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>September or February intake</li>
            <li>One or two semesters</li>
            <li>Courses taught in English</li>
            <li>ECTS credit system</li>
            <li>Academic transcript after completion</li>
            <li>Study opportunities across several academic fields</li>
          </ul>

          <p className="mb-6">
            Students should check eligibility, academic requirements, language requirements
            and current tuition information before applying.
          </p>
        </section>

        <hr className="my-8" />

        {/* PhD & Doctoral Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            PhD & Doctoral Programs
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Take Your Academic Career Further
          </h3>
          <p className="mb-6">
            The University of Debrecen offers doctoral study opportunities for international
            students across several academic disciplines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3">Agricultural Sciences</h4>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Animal Science</li>
                <li>Food Sciences</li>
                <li>Crop Sciences and Horticulture</li>
              </ul>

              <h4 className="text-xl font-bold mb-3">Humanities</h4>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Linguistics, Literary and Cultural Studies</li>
                <li>History and Ethnology</li>
                <li>Human Sciences</li>
              </ul>

              <h4 className="text-xl font-bold mb-3">Engineering & Informatics</h4>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Mechanical Engineering</li>
                <li>Informatics</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-3">
                Medical, Pharmaceutical & Health Sciences
              </h4>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Medical Sciences</li>
              </ul>

              <h4 className="text-xl font-bold mb-3">Natural Sciences</h4>
              <ul className="list-disc list-inside space-y-1 mb-6">
                <li>Biology and Environmental Sciences</li>
                <li>Chemistry</li>
                <li>Earth Sciences</li>
                <li>Mathematical and Computational Sciences</li>
                <li>Physics</li>
              </ul>

              <h4 className="text-xl font-bold mb-3">Social Sciences</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Legal Studies</li>
                <li>Management and Business</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-8" />

        {/* Find the Right Program */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1e5e4b]">
            Find the Right Program for You
          </h2>
          <p className="mb-4">
            Not sure which field is right for you?
          </p>
          <p className="mb-6">
            <a
              href="/study-programs/"
              className="text-blue-600 hover:underline font-semibold"
            >
              Explore the University&apos;s study opportunities
            </a>
            {" "}and compare programs based on your academic background, career goals, and
            preferred level of study.
          </p>
          <p className="text-lg font-semibold">
            Your journey to the University of Debrecen starts{" "}
            <a href="/application/" className="text-blue-600 hover:underline">
              here
            </a>
            .
          </p>
        </section>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Page;
