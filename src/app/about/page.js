"use client";

import Image from "next/image";
import Section from "@/components/Section";
import { Target, Eye, CheckCircle, Award } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-blue-900 font-bold text-xs uppercase tracking-wider mb-4 shadow-md">
            Since 2015
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            About AHSION
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            A Premier Institution for Nursing Education. Committed to excellence in healthcare training and community service.
          </p>
        </div>
      </div>

      {/* ================= INTRODUCTION SECTION ================= */}
      <Section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
                <Award className="text-yellow-500" size={28} />
                <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-yellow-400 pb-1 inline-block">
                Introduction
                </h2>
            </div>
            
            <div className="text-gray-600 text-base leading-relaxed text-justify space-y-4">
              <p>
                Advanced Health Sciences Institute of Nursing Karachi was established in 2015 in order to start General Nursing Diploma Program (03 years) and Diploma in Intensive Care Unit Nursing (Post Basic Specialization) (01 Year) to cover a huge area of Saeedabad Baldia Town, Karachi rendering our services for the betterment of nurses as there is a shortage of highly advance and profession nurses in Sindh province as well as in Pakistan. We as Advanced Health Sciences Institute of Nursing Karachi ION, started B.Sc. Nursing (Post-RN) (02 Years) and Post Basic Specialization Emergency & Disaster Management (01 Year) in 2018.
              </p>
              <p>
                We have been providing services to our locality in term of rendering the Diploma in Nursing, B.Sc. Nursing (Post-RN) Post Basic Specialization ICU Nursing and Emergency & Disaster Management. Furthermore, as we followed the policies of PNC and never compromised on quality; hence, we have established a good name in the locality as well in the city. As the Government of Pakistan has declared the year of 2019 is the year of nursing profession, so we have started Generic BSN Degree program, CNA, CMW programs in this years. The said programs have been introduced at AHS-ION to fulfill the requirement and the need of area.
              </p>
              <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-900 font-medium text-blue-900">
                We are affiliated for clinical duties / services with <strong>Dr. Ruth K.M Pfau, Civil Hospital Karachi.</strong>
              </p>
              
              <h3 className="font-bold text-gray-900 pt-2">AHS Institute of Nursing endeavors are:</h3>
              <ul className="space-y-3">
                {[
                    "To provide advanced nursing education, introducing the latest technology of nursing profession.",
                    "To make the education easy for the interested students without compromising the quality of care.",
                    "To facilitate and provide students with all kind of facilities."
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                    src="/images/about-main.jpg" 
                    alt="Campus Building"
                    fill
                    className="object-cover transform transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6 pt-20">
                    <p className="text-white font-bold text-lg">AHS Campus - Baldia Town</p>
                </div>
            </div>
          </div>

        </div>
      </Section>

      {/* ================= VISION & MISSION SECTION ================= */}
      <div className="bg-blue-900 text-white py-24 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-800 opacity-50 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Vision Statement */}
            <div className="bg-white/5 p-10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-colors duration-300">
                <div className="bg-yellow-400 w-14 h-14 rounded-lg flex items-center justify-center text-blue-900 mb-6 shadow-lg shadow-yellow-400/20">
                    <Eye size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Vision Statement</h3>
                <p className="text-blue-100 leading-relaxed text-justify opacity-90">
                As a institute, our vision is to produce competent nurses and health care providers whose care, discoveries, authentic and qualified voices may proved them the vital organ of a living society. Our society will start acknowledging their services. We also wish to create nursing in medical awareness into every home in Pakistan. Finally, we will be able to eradicate the minor diseases by improving health & quality care through excellence in nursing education, research & discoveries.
                </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white/5 p-10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-colors duration-300">
                <div className="bg-yellow-400 w-14 h-14 rounded-lg flex items-center justify-center text-blue-900 mb-6 shadow-lg shadow-yellow-400/20">
                    <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white">Mission Statement</h3>
                <p className="text-blue-100 leading-relaxed text-justify opacity-90 text-sm">
                The institute of Nursing is committed to perfection in nursing education, clinical practice, nursing care, and community service. The institute prepares nursing students to be effective clinicians & leaders who will work to improve the health and health care of Pakistan people community and beyond, and contribute to the nursing profession through professional, scholarly & legal activities. Our mission is to provide our trainee with the highest possible standard of nursing education using all available resources. The focus of our program is to provide a supportive learning environment for the students. We aim to train skilled & qualified professional nurses who deliver care that is tailored to each person's unique needs. Institution of dedicated to promoting patients well-being through skilled and educated nurses. We collaborate with stakeholder of health care of maximize the nursing care. We promote a supportive and learning environment for our staff, respecting each others needs, abilities and potential.
                </p>
            </div>

            </div>
        </div>
      </div>
      
    </div>
  );
}