"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-gray-900">
      
      {/* --- PAGE HEADER (Manually styled like component) --- */}
      <div className="bg-blue-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About AHSION</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          A Premier Institution for Nursing Education
        </p>
      </div>

      {/* --- INTRODUCTION SECTION --- */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: TEXT SIDE */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Welcome to AHSION
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed text-justify whitespace-pre-line">
              Advanced Health Sciences Institute of Nursing Karachi was established in 2015 in order to start General Nursing Diploma Program (03 years) and Diploma in Intensive Care Unit Nursing.
              
              We have been providing services to our locality in term of rendering the Diploma in Nursing, B.Sc. Nursing (Post-RN). Furthermore, as we followed the policies of PNC and never compromised on quality; hence, we have established a good name in the locality as well in the city.
            </div>
          </div>

          {/* RIGHT: IMAGE SIDE */}
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl border-4 border-white">
            {/* Image Check: Agar image na ho to crash nahi hoga */}
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

      {/* --- MISSION & VISION SECTION --- */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              🚀 Our Mission
            </h3>
            <p className="text-blue-100 leading-relaxed text-justify">
              The institute of Nursing is committed to perfection in nursing education, clinical practice, nursing care, and community service. Our mission is to provide our trainees with the highest possible standard of nursing education using all available resources.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
              👁️ Our Vision
            </h3>
            <p className="text-blue-100 leading-relaxed text-justify">
              As a institute, our vision is to produce competent nurses and health care providers whose care, discoveries, authentic and qualified voices may proved them the vital organ of a living society.
            </p>
          </div>

        </div>
      </section>
      
    </div>
  );
}