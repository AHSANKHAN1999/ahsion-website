"use client";

import Image from "next/image";

export default function About() {
  // Brand Color defined here
  const brandColor = "#1A2A6C";

  return (
    <div className="bg-white text-gray-900 font-sans">
      
      {/* ================= HEADER ================= */}
      <div 
        className="text-white py-20 px-4 text-center"
        style={{ backgroundColor: brandColor }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About AHSION</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto tracking-wide">
          A Premier Institution for Nursing Education
        </p>
      </div>

      {/* ================= INTRODUCTION (Full Text from Image) ================= */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Text Side */}
          <div className="flex flex-col space-y-6">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-2 uppercase border-b-4 inline-block w-fit pb-1"
              style={{ color: brandColor, borderColor: "#FFD700" }} // Yellow underline like image
            >
              Introduction
            </h2>
            
            <div className="text-gray-700 text-base leading-relaxed text-justify space-y-4">
              <p>
                Advanced Health Sciences Institute of Nursing Karachi was established in 2015 in order to start General Nursing Diploma Program (03 years) and Diploma in Intensive Care Unit Nursing (Post Basic Specialization) (01 Year) to cover a huge area of Saeedabad Baldia Town, Karachi rendering our services for the betterment of nurses as there is a shortage of highly advance and profession nurses in Sindh province as well as in Pakistan. We as Advanced Health Sciences Institute of Nursing Karachi ION, started B.Sc. Nursing (Post-RN) (02 Years) and Post Basic Specialization Emergency & Disaster Management (01 Year) in 2018.
              </p>
              <p>
                We have been providing services to our locality in term of rendering the Diploma in Nursing, B.Sc. Nursing (Post-RN) Post Basic Specialization ICU Nursing and Emergency & Disaster Management. Furthermore, as we followed the policies of PNC and never compromised on quality; hence, we have established a good name in the locality as well in the city. As the Government of Pakistan has declared the year of 2019 is the year of nursing profession, so we have started Generic BSN Degree program, CNA, CMW programs in this years. The said programs have been introduced at AHS-ION to fulfill the requirement and the need of area.
              </p>
              <p>
                We are affiliated for clinical duties / services with <strong>Dr. Ruth K.M Pfau, Civil Hospital Karachi.</strong> AHS Institute of Nursing endeavors are:
              </p>
              
              {/* Bullet Points from Image */}
              <ul className="list-disc pl-5 space-y-2 text-gray-800 font-medium">
                <li>To provide advanced nursing education, introducing the latest technology of nursing profession.</li>
                <li>To make the education easy for the interested students without compromising the quality of care.</li>
                <li>To facilitate and provide students with all kind of facilities.</li>
              </ul>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-gray-100 mt-8 lg:mt-0">
            <Image
                src="/images/about-main.jpg" 
                alt="Campus Building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* ================= MISSION & VISION (Full Text from Image) ================= */}
      <section 
        className="text-white py-20 px-4"
        style={{ backgroundColor: brandColor }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Vision Statement */}
          <div className="bg-white/10 p-8 md:p-10 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-white uppercase border-b-2 border-white/20 pb-2 inline-block">
              Vision Statement
            </h3>
            <p className="text-blue-50 leading-relaxed text-justify text-sm md:text-base">
              As a institute, our vision is to produce competent nurses and health care providers whose care, discoveries, authentic and qualified voices may proved them the vital organ of a living society. Our society will start acknowledging their services. We also wish to create nursing in medical awareness into every home in Pakistan. Finally, we will be able to eradicate the minor diseases by improving health & quality care through excellence in nursing education, research & discoveries.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white/10 p-8 md:p-10 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-white uppercase border-b-2 border-white/20 pb-2 inline-block">
              Mission Statement
            </h3>
            <p className="text-blue-50 leading-relaxed text-justify text-sm md:text-base">
              The institute of Nursing is committed to perfection in nursing education, clinical practice, nursing care, and community service. The institute prepares nursing students to be effective clinicians & leaders who will work to improve the health and health care of Pakistan people community and beyond, and contribute to the nursing profession through professional, scholarly & legal activities. Our mission is to provide our trainee with the highest possible standard of nursing education using all available resources. The focus of our program is to provide a supportive learning environment for the students. We aim to train skilled & qualified professional nurses who deliver care that is tailored to each person's unique needs. Institution of dedicated to promoting patients well-being through skilled and educated nurses. We collaborate with stakeholder of health care of maximize the nursing care. We promote a supportive and learning environment for our staff, respecting each others needs, abilities and potential.
            </p>
          </div>

        </div>
      </section>
      
    </div>
  );
}