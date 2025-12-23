"use client";

import Image from "next/image";

export default function About() {
  // Ye wo EXACT color hai jo aapki site ka theme hai (#1A2A6C)
  const brandColor = "#1A2A6C";

  return (
    <div className="bg-white text-gray-900 font-sans">
      
      {/* ================= HEADER (Using Brand Color) ================= */}
      <div 
        className="text-white py-20 px-4 text-center"
        style={{ backgroundColor: brandColor }} // Yahan Exact Color lagaya hai
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About AHSION</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto tracking-wide">
          A Premier Institution for Nursing Education
        </p>
      </div>

      {/* ================= INTRODUCTION ================= */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Side */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: brandColor }} // Heading ka color bhi same kiya
            >
              Introduction
            </h2>
            <div className="text-gray-700 text-base md:text-lg leading-relaxed text-justify space-y-4">
              <p>
                Advanced Health Sciences Institute of Nursing Karachi was established in 2015 in order to start General Nursing Diploma Program (03 years) and Diploma in Intensive Care Unit Nursing (Post Basic Specialization) (01 Year) to cover a huge area of Saeedabad Baldia Town, Karachi.
              </p>
              <p>
                We as Advanced Health Sciences Institute of Nursing Karachi ION, started B.Sc. Nursing (Post-RN) (02 Years) and Post Basic Specialization Emergency & Disaster Management (01 Year) in 2018. We have been providing services to our locality in term of rendering the Diploma in Nursing.
              </p>
              <p>
                We are affiliated for clinical duties / services with Dr. Ruth K.M Pfau, Civil Hospital Karachi. AHS Institute of Nursing endeavors are to provide advanced nursing education, introducing the latest technology of nursing profession.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-gray-100">
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

      {/* ================= MISSION & VISION (Using Brand Color) ================= */}
      <section 
        className="text-white py-20 px-4"
        style={{ backgroundColor: brandColor }} // Yahan bhi Exact Color lagaya
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white/10 p-8 md:p-10 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 border-b border-white/20 pb-4">
              Our Mission
            </h3>
            <p className="text-blue-50 leading-relaxed text-justify text-sm md:text-base">
              The institute of Nursing is committed to perfection in nursing education, clinical practice, nursing care, and community service. The institute prepares nursing students to be effective clinicians & leaders who will work to improve the health and health care of Pakistan people community and beyond.
              <br /><br />
              Our mission is to provide our trainee with the highest possible standard of nursing education using all available resources.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white/10 p-8 md:p-10 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3 border-b border-white/20 pb-4">
            Our Vision
            </h3>
            <p className="text-blue-50 leading-relaxed text-justify text-sm md:text-base">
              As a institute, our vision is to produce competent nurses and health care providers whose care, discoveries, authentic and qualified voices may proved them the vital organ of a living society.
              <br /><br />
              We also wish to create nursing in medical awareness into every home in Pakistan. Finally, we will be able to eradicate the minor diseases by improving health & quality care through excellence in nursing education.
            </p>
          </div>

        </div>
      </section>
      
    </div>
  );
}