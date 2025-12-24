"use client";

import { siteData } from "@/data/siteData";
import Section from "@/components/Section";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Messages() {
  // Data fetch kar rahe hain
  const leaders = siteData.pages.leadership || [];

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
            Guiding Lights
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Leadership Messages
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Visionary leadership guiding our path to excellence in nursing education and healthcare.
          </p>
        </div>
      </div>

      {/* ================= MESSAGES SECTION ================= */}
      <div className="py-20 space-y-24">
        {leaders.map((leader, index) => (
          <Section key={leader.id}>
            <div 
              className={`flex flex-col gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              
              {/* --- TEXT CONTENT --- */}
              <div className="flex-1 space-y-6">
                <div className="flex items-start gap-4">
                    <Quote className="text-yellow-400 fill-current flex-shrink-0" size={40} />
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900 leading-tight">
                        {leader.title}
                        </h2>
                        <div className="h-1 w-20 bg-blue-900 mt-4 mb-2"></div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
                    {/* Decorative Background Quote */}
                    <Quote className="absolute -right-4 -bottom-4 text-gray-100 w-32 h-32 transform rotate-12" />
                    
                    <h3 className="text-2xl text-blue-900 font-bold uppercase tracking-wide mb-1 relative z-10">
                        {leader.name}
                    </h3>
                    <p className="text-yellow-600 font-bold text-sm uppercase tracking-wider mb-6 relative z-10">
                        {leader.designation}
                    </p>

                    <div className="text-gray-600 text-lg leading-relaxed text-justify whitespace-pre-line relative z-10">
                        {leader.message}
                    </div>
                </div>
              </div>

              {/* --- IMAGE CONTENT --- */}
              <div className="w-full lg:w-[400px] flex-shrink-0">
                <div className="relative group">
                    {/* Yellow Shadow Effect */}
                    <div className={`absolute -inset-3 bg-yellow-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500 ${index % 2 === 1 ? '-rotate-1' : 'rotate-1'}`}></div>
                    
                    <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                        <Image 
                            src={leader.image} 
                            alt={leader.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority={index === 0}
                        />
                        {/* Name Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                             <p className="text-white font-bold text-lg">{leader.name}</p>
                        </div>
                    </div>
                </div>
              </div>

            </div>
          </Section>
        ))}
      </div>

    </div>
  );
}