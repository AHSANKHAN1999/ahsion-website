"use client";

import { useState, useEffect } from "react"; 
import Link from "next/link";
import Image from "next/image"; 
import { siteData } from "@/data/siteData"; 
import Section from "@/components/Section"; 
import { X } from "lucide-react"; 

// --- SLIDER IMAGES LIST ---
const heroImages = [
  "/images/hero/hero1.jpg", 
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
  "/images/hero/hero4.jpeg",
  "/images/hero/hero5.jpg",
];

export default function Home() { 
  // --- STATES ---
  const [showPopup, setShowPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // --- DATA LOAD ---
  const { sections } = siteData.pages.home;
  const hero = sections.find((s) => s.type === "hero");
  const about = sections.find((s) => s.type === "about_short");
  const programs = sections.find((s) => s.type === "program_highlights");

  // --- POPUP TIMER ---
  useEffect(() => {
    const timer = setTimeout(() => {
      // setShowPopup(true); // Jab popup dikhana ho, ye line uncomment kr dena
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // --- SLIDER TIMER (Main Logic) ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 Seconds speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      {/* ================= HERO SECTION (SLIDER) ================= */}
      <div className="relative w-full h-[600px] md:h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
        
        {/* Images Loop */}
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/80 text-sm font-semibold tracking-wide mb-6 border border-blue-300 backdrop-blur-sm">
            Admissions Open 2025
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            {hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto drop-shadow-md">
            {hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={hero.button.link}
              className="inline-block bg-white text-blue-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              {hero.button.text}
            </Link>
            
            <Link
              href="/programs"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
            >
              View Programs
            </Link>
          </div>
        </div>
      </div>


      {/* --- About Short Section --- */}
      <Section className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{about.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          {about.text}
        </p>
        <Link
          href={about.button.link}
          className="text-primary font-bold text-lg hover:text-blue-800 flex items-center justify-center gap-2 group"
        >
          {about.button.text} 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </Section>


      {/* --- Program Highlights --- */}
      <div className="bg-gray-50 py-16">
        <Section>
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            {programs.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.items.map((program, idx) => (
              <Link
                key={idx}
                href={program.link}
                className="bg-white rounded-2xl shadow-sm hover:shadow-2xl p-8 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
                  <span className="text-2xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {program.name}
                </h3>
                <span className="text-sm text-blue-600 font-semibold mt-auto uppercase tracking-wider">
                  View Details
                </span>
              </Link>
            ))}
          </div>
        </Section>
      </div>
      
      {/* POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-bounce-in">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 bg-white/80 hover:bg-red-500 hover:text-white text-gray-600 rounded-full p-2 transition-colors z-10 shadow-sm"
            >
              <X size={20} />
            </button>
            <div className="relative w-full bg-gray-100">
               {/* Make sure popup.jpg exists in public/images folder */}
               <img src="/images/popup.jpg" alt="Admissions Open" className="w-full h-auto max-h-[60vh] object-contain mx-auto"/>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Admissions Open 2025!</h3>
              <p className="text-gray-600 mb-6">Enroll now in BS Nursing. Limited seats.</p>
              <div className="flex gap-3 justify-center">
                <Link href="/admissions" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">Apply Now</Link>
                <button onClick={() => setShowPopup(false)} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}