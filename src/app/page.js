"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";

const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Safe Data Loading
  const homeData = siteData.pages.home || {};
  const sections = homeData.sections || [];
  
  // Data fetch kar rahe hain
  const hero = sections.find((s) => s.type === "hero") || { title: "AHSION", subtitle: "Nursing Education", button: { link: "#", text: "Apply" } };
  const about = sections.find((s) => s.type === "about_short") || { title: "About Us", text: "", button: { link: "#", text: "Read More" } };
  const programs = sections.find((s) => s.type === "program_highlights") || { title: "Programs", items: [] };

  // Slider Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black">
      
      {/* ================= HERO SLIDER (NEW FONTS) ================= */}
      <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">
        
        {/* Slider Images */}
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Hero Slide"
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark Overlay taake Text Safed chamke */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}

        {/* --- TEXT CONTENT (Updated with New Fonts) --- */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
          
          {/* Main Heading - "Wedding" Style (Playfair) */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight mb-4 drop-shadow-2xl"
            style={{ fontFamily: 'var(--font-playfair)' }} 
          >
            {hero.title}
          </h1>

          {/* Subtitle - "Opulence" Style (Great Vibes) */}
          <p 
            className="text-4xl md:text-6xl text-yellow-500 drop-shadow-md -mt-2 opacity-90"
            style={{ fontFamily: 'var(--font-great-vibes)' }} 
          >
            {hero.subtitle}
          </p>

          {/* Button */}
          <div className="mt-12">
            <Link 
              href={hero.button.link} 
              className="inline-block border-2 border-white text-white px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition duration-300 rounded-full"
            >
              {hero.button.text}
            </Link>
          </div>
        </div>
        {/* --- END TEXT CONTENT --- */}

      </div>

      {/* --- ABOUT SECTION --- */}
      <div className="py-20 text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-blue-900" style={{ fontFamily: 'var(--font-playfair)' }}>
          {about.title}
        </h2>
        <p className="max-w-4xl mx-auto mb-8 text-gray-600 text-lg leading-relaxed">
          {about.text}
        </p>
        <Link href={about.button.link} className="text-blue-600 font-bold hover:underline tracking-wide uppercase text-sm">
          {about.button.text} &rarr;
        </Link>
      </div>

      {/* --- PROGRAMS SECTION --- */}
      <div className="bg-gray-50 py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900" style={{ fontFamily: 'var(--font-playfair)' }}>
          {programs.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.items.map((program, idx) => (
            <Link key={idx} href={program.link} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition border-t-4 border-transparent hover:border-blue-900 group">
              <div className="text-5xl text-gray-200 font-bold mb-4 group-hover:text-blue-200 transition" style={{ fontFamily: 'var(--font-playfair)' }}>
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{program.name}</h3>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mt-auto">View Details</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}