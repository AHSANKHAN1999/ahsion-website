"use client";

import Link from "next/link";
import Image from "next/image"; // Next.js Image component import kiya
import { siteData } from "@/data/siteData";
import Section from "@/components/Section";
import { CheckCircle } from "lucide-react";

// --- CUSTOM CSS FOR GALLERY SCROLL ---
const scrollStyle = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-gallery {
    display: flex;
    width: max-content;
    /* 30s speed hai. Agar tez karni ho to 20s karein, slow karni ho to 40s */
    animation: scroll 30s linear infinite; 
  }
  /* Mouse upar le jane par gallery ruk jaye */
  .animate-gallery:hover {
    animation-play-state: paused;
  }
`;

export default function Labs() {
  const { labs } = siteData.pages;
  const { hero, intro, labs: labsList, gallery_section, cta } = labs;

  // --- GALLERY IMAGES LOGIC ---
  // Yahan aap apni nayi images add karein comma laga kar
  const allGalleryImages = [
    ...gallery_section.images, // Ye wo hain jo data file mein hain
    
    // Nayi images yahan niche add karein:
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

  // Images ko double kar rahe hain taake loop kabhi khatam na ho
  const loopImages = [...allGalleryImages, ...allGalleryImages];

  return (
    <div>
      {/* CSS Inject */}
      <style>{scrollStyle}</style>

      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        {/* Pattern overlay */}
        <div 
            className="absolute inset-0 opacity-10 z-0" 
            style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                backgroundSize: '20px 20px'
            }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
          <span className="inline-block bg-blue-500/30 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-blue-400/30 backdrop-blur-sm">
            {hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{intro.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {intro.description}
        </p>
      </Section>

      {/* Labs List */}
      <div className="bg-gray-50">
        <Section>
          <div className="space-y-24">
            {labsList.map((lab, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col gap-12 items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-blue-900 mb-4">{lab.title}</h3>
                  <div className="h-1 w-20 bg-blue-400 mb-6 rounded-full"></div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {lab.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {lab.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Display */}
                <div className="flex-1 w-full">
                  <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                    {lab.image ? (
                      <img 
                        src={lab.image} 
                        alt={lab.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-semibold bg-gray-200">
                        Image Not Found
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ================= AUTO SCROLLING GALLERY (UPDATED) ================= */}
      <div className="py-20 bg-white overflow-hidden border-t border-gray-100">
         <div className="text-center mb-10 px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{gallery_section.title}</h2>
            <p className="text-gray-600">{gallery_section.subtitle}</p>
         </div>

         {/* Scroll Container */}
         <div className="w-full py-8 bg-blue-50/50">
            {/* Ye div animate karega */}
            <div className="animate-gallery gap-6 px-6">
               {loopImages.map((src, index) => (
                  <div 
                     key={index} 
                     className="relative w-[300px] h-[220px] flex-shrink-0 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 cursor-pointer"
                  >
                     <Image 
                       src={src} 
                       alt={`Gallery Image ${index}`} 
                       fill 
                       className="object-cover hover:scale-110 transition-transform duration-700"
                     />
                  </div>
               ))}
            </div>
         </div>
      </div>
      {/* ================= GALLERY END ================= */}

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl text-blue-100 mb-10">{cta.description}</p>
            <Link 
                href={cta.button_link}
                className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
                {cta.button_text}
            </Link>
        </div>
      </div>
    </div>
  );
}