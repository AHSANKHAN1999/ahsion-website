"use client";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import Section from "@/components/Section";
import { motion } from 'framer-motion';
// Purani imports ke sath yeh bhi add karein:
import { useState, useEffect } from "react"; 
import { X } from "lucide-react"; // Cross button ke liye
// ... baki imports
export default function Home() { 
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Website khulne ke 1 second baad popup dikhao
    const timer = setTimeout(() => {
      //setShowPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  const { sections } = siteData.pages.home;
  const hero = sections.find((s) => s.type === "hero");
  const about = sections.find((s) => s.type === "about_short");
  const programs = sections.find((s) => s.type === "program_highlights");

  return (
    <div>
  {/* Hero Section */}
      <div className="relative text-white h-[600px] flex items-center justify-center">
        
        {/* 1. Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            // Filhal maine ye online medical image lagayi hai.
            // Jab aap apni image 'public/images' me rakh lein, to is link ko hata kar: '/images/apni-file-ka-naam.jpg' likh dena.
            backgroundImage: "url('/images/hero/hero-bg01.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* 2. Dark Overlay (Taake text saaf nazar aye) */}
        <div className="absolute inset-0 bg-blue-900/85 z-10"></div>

        {/* 3. Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto drop-shadow-md">
            {hero.subtitle}
          </p>
          <Link
            href={hero.button.link}
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            {hero.button.text}
          </Link>
        </div>
      </div>
 
      {/* About Short Section */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{about.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          {about.text}
        </p>
        <Link
          href={about.button.link}
          className="text-primary font-semibold hover:text-blue-800 flex items-center justify-center gap-1 group"
        >
          {about.button.text} 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </Section>

      {/* Program Highlights */}
      <div className="bg-gray-50">
        <Section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {programs.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.items.map((program, idx) => (
              <Link
                key={idx}
                href={program.link}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  {/* Simple icon based on index or name */}
                  <span className="text-2xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.name}
                </h3>
                <span className="text-sm text-primary font-medium mt-auto">
                  View Details
                </span>
              </Link>
            ))}
          </div>
        </Section>
      </div>
      
   {/* --- POPUP MODAL START --- */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-bounce-in">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 bg-gray-100 hover:bg-red-500 hover:text-white text-gray-600 rounded-full p-2 transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Image Area - FIXED (Full Image Visible) */}
            <div className="relative w-full">
               <img 
                 src="/images/popup.jpg" 
                 alt="Admissions Open" 
                 className="w-full h-auto max-h-[70vh] object-contain bg-gray-50"
               />
            </div>

            {/* Content Area */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Admissions Open 2025!</h3>
              <p className="text-gray-600 mb-6">
                Enroll now in BS Nursing, Post RN, and other specialized programs. Limited seats available.
              </p>
              
              <div className="flex gap-3 justify-center">
                <Link 
                  href="/admissions" 
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Apply Now
                </Link>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
      {/* --- POPUP MODAL END --- */}

    </div> // <-- Yeh last wala div hai jo pehle se code mein tha
  );
}
