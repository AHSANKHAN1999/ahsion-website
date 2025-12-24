"use client";

import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import Section from "@/components/Section";
import { CheckCircle, Microscope, Beaker } from "lucide-react";

// --- CUSTOM CSS FOR GALLERY SCROLL ---
const scrollStyle = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-gallery {
    display: flex;
    width: max-content;
    animation: scroll 40s linear infinite; 
  }
  .animate-gallery:hover {
    animation-play-state: paused;
  }
`;

export default function Labs() {
  const { labs } = siteData.pages;
  const { hero, intro, labs: labsList, gallery_section, cta } = labs;

  // --- GALLERY IMAGES LOGIC (PRESERVED) ---
  const allGalleryImages = [
     "/images/labs/gallery1.jpeg",
     "/images/labs/gallery2.jpeg",
     "/images/labs/gallery3.jpeg",
     "/images/labs/gallery4.jpeg",
     "/images/labs/gallery5.jpeg",
     "/images/labs/gallery6.jpeg",
     "/images/labs/gallery7.jpeg",
     "/images/labs/gallery8.jpeg",
     "/images/labs/gallery9.jpeg",
     "/images/labs/gallery10.jpeg",
     "/images/labs/gallery11.jpeg",
     "/images/labs/gallery12.jpeg",
     "/images/labs/gallery13.jpeg",
     "/images/labs/gallery14.jpeg",
     "/images/labs/gallery15.jpeg",
     "/images/labs/gallery16.jpeg",
     "/images/labs/gallery17.jpeg",
     "/images/labs/gallery18.jpeg",
     "/images/labs/gallery19.jpeg",
     "/images/labs/gallery20.jpeg",
  ];

  const loopImages = [...allGalleryImages, ...allGalleryImages];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <style>{scrollStyle}</style>

      {/* ================= HERO SECTION (University Theme) ================= */}
      <div className="relative bg-blue-900 text-white overflow-hidden py-24 px-4">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-blue-900 font-bold text-xs uppercase tracking-wider mb-4 shadow-md">
            State-of-the-Art Facilities
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </div>

      {/* ================= INTRO SECTION ================= */}
      <Section className="text-center py-16">
        <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full text-blue-900">
                <Microscope size={40} />
            </div>
        </div>
        <h2 className="text-3xl font-bold text-blue-900 mb-6">{intro.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {intro.description}
        </p>
      </Section>

      {/* ================= AUTO SCROLLING GALLERY ================= */}
      <div className="py-12 bg-white overflow-hidden border-t-4 border-yellow-400 border-b border-gray-100 mb-10 shadow-sm">
         <div className="text-center mb-10 px-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">{gallery_section.title}</h2>
            <div className="h-1 w-16 bg-yellow-400 mx-auto rounded-full mb-3"></div>
            <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">{gallery_section.subtitle}</p>
         </div>

         {/* Scroll Container */}
         <div className="w-full py-8 bg-blue-50/30">
            <div className="animate-gallery gap-6 px-6">
               {loopImages.map((src, index) => (
                  <div 
                     key={index} 
                     className="relative w-[320px] h-[240px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white hover:border-yellow-400 cursor-pointer group"
                  >
                     <Image 
                       src={src} 
                       alt={`Gallery Image ${index}`} 
                       fill 
                       className="object-cover group-hover:scale-110 transition-transform duration-700"
                       onError={(e) => { e.target.style.display = 'none'; }} 
                     />
                     {/* Overlay on Hover */}
                     <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300"></div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* ================= LABS LIST ================= */}
      <div className="py-16">
        <Section>
          <div className="space-y-32">
            {labsList.map((lab, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col gap-16 items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Text Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                      <Beaker className="text-yellow-500" size={24}/>
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Advanced Learning</span>
                  </div>
                  <h3 className="text-4xl font-bold text-blue-900 mb-6">{lab.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {lab.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {lab.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Display */}
                <div className="flex-1 w-full">
                  <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                    {lab.image ? (
                      <img 
                        src={lab.image} 
                        alt={lab.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-semibold bg-gray-100">
                        Image Not Found
                      </div>
                    )}
                    {/* Blue Tint on Hover */}
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
                    
                    {/* Decorative Element */}
                    <div className="absolute bottom-0 right-0 bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-tl-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        View Facility
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="bg-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">{cta.description}</p>
            <Link 
                href={cta.button_link}
                className="inline-block bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-full text-lg hover:bg-white transition-all shadow-lg hover:scale-105 transform duration-200"
            >
                {cta.button_text}
            </Link>
        </div>
      </div>
    </div>
  );
}