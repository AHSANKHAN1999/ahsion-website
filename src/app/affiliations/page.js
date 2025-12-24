"use client";

import { siteData } from "@/data/siteData";
import Section from "@/components/Section";
import Image from "next/image";
import { ShieldCheck, Building2, Link as LinkIcon, Stethoscope } from "lucide-react"; 

export default function Affiliations() {
  const { sections } = siteData.pages.affiliations;
  const banner = sections.find((s) => s.type === "banner");
  const list = sections.find((s) => s.type === "affiliation_list");

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
            Recognized & Accredited
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            {banner?.title || "Our Affiliations"}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Proudly affiliated with prestigious medical and educational institutions, ensuring the highest standards of nursing education.
          </p>
        </div>
      </div>

      {/* ================= AFFILIATIONS LIST ================= */}
      <Section className="py-20">
        <div className="space-y-24">
          {list.groups.map((group, idx) => (
            <div key={idx}>
              
              {/* Group Title Header */}
              <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-900">
                    {/* Icon Logic based on title (Simple Check) */}
                    {group.title.includes("Clinical") ? <Stethoscope size={28}/> : <Building2 size={28}/>}
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-blue-900">
                    {group.title}
                    </h2>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Official Partners</p>
                </div>
              </div>

              {/* Grid Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="group bg-white border-t-4 border-blue-900 rounded-xl p-8 shadow-sm hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
                  >
                    {/* Hover Badge (Verified Icon) */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <ShieldCheck className="text-green-500" size={24} />
                    </div>

                    {/* Logo Area */}
                    <div className="w-40 h-40 relative mb-6 bg-gray-50 rounded-full flex items-center justify-center p-4 border border-gray-100 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white group-hover:shadow-lg">
                      {item.logo ? (
                        <Image 
                          src={item.logo} 
                          alt={item.name} 
                          fill
                          className="object-contain p-4"
                        />
                      ) : (
                        <div className="text-gray-400 text-xs font-semibold">No Logo</div>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-900 transition-colors">
                      {item.name}
                    </h3>
                    
                    {/* Decorative Line */}
                    <div className="h-1 w-12 bg-gray-200 mt-6 group-hover:bg-yellow-400 transition-colors duration-300 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}