"use client";

import Link from "next/link";
import { siteData } from "@/data/siteData";
import Section from "@/components/Section";
import { Clock, CheckCircle, GraduationCap, ArrowRight } from "lucide-react";

export default function Programs() {
  // Aapka purana logic same rakha hai taake data sahi aye
  const { sections } = siteData.pages.programs;
  const banner = sections.find((s) => s.type === "banner");
  const list = sections.find((s) => s.type === "program_list");

  // Safety check: Agar list na mile to empty array
  const programsList = list ? list.programs : [];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* ================= HERO SECTION (Blue Theme) ================= */}
      {/* Purane PageHeader ki jagah ye naya style lagaya hai */}
      <div className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-blue-900 font-bold text-xs uppercase tracking-wider mb-4 shadow-md">
            Academic Excellence
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            {banner?.title || "Our Programs"}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Choose from a range of HEC & PNC recognized nursing programs designed to shape your future.
          </p>
        </div>
      </div>

      {/* ================= PROGRAMS GRID ================= */}
      <Section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsList.map((program) => (
            <div 
              key={program.id}
              id={program.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 border-blue-900 hover:border-yellow-400 flex flex-col h-full scroll-mt-28"
            >
              
              {/* Card Header (Icon & Title) */}
              <div className="p-8 pb-4">
                <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-yellow-400 transition-colors duration-300">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors mb-3">
                  {program.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
              </div>

              {/* Card Details (Duration & Eligibility) */}
              <div className="px-8 py-4 space-y-4 flex-grow">
                {/* Duration Box */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 group-hover:border-blue-100 transition-colors">
                   <Clock className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                   <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Duration</p>
                      <p className="font-semibold text-gray-900">{program.duration}</p>
                   </div>
                </div>

                {/* Eligibility Box */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 group-hover:border-blue-100 transition-colors">
                   <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                   <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Eligibility</p>
                      <p className="font-semibold text-gray-900 text-sm leading-snug">{program.eligibility}</p>
                   </div>
                </div>
              </div>

              {/* Apply Button */}
              <div className="p-8 pt-4 mt-auto">
                <Link 
                  href="/admissions" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-900 text-white py-3 px-4 rounded-lg font-bold uppercase text-sm tracking-wide hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 shadow-md hover:translate-y-[-2px]"
                >
                  Apply Now <ArrowRight size={18} />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}