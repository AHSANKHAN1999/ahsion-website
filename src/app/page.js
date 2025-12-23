"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";

// Images List
const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Data Load (Safe Mode)
  const homeData = siteData.pages.home || {};
  const sections = homeData.sections || [];
  
  // Sections find karna (Fallback ke sath taake crash na ho)
  const hero = sections.find((s) => s.type === "hero") || { title: "Welcome", subtitle: "", button: { link: "#", text: "Apply" } };
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
      
      {/* --- HERO SLIDER --- */}
      <div className="relative text-white h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        
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
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
          </div>
        ))}

        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">{hero.title}</h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">{hero.subtitle}</p>
          <Link href={hero.button.link} className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
            {hero.button.text}
          </Link>
        </div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <div className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">{about.title}</h2>
        <p className="max-w-4xl mx-auto mb-8 text-gray-600">{about.text}</p>
        <Link href={about.button.link} className="text-blue-600 font-bold hover:underline">
          {about.button.text} &rarr;
        </Link>
      </div>

      {/* --- PROGRAMS SECTION --- */}
      <div className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{programs.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.items.map((program, idx) => (
            <Link key={idx} href={program.link} className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">{idx + 1}</div>
              <h3 className="text-xl font-bold mb-2">{program.name}</h3>
              <span className="text-blue-600 text-sm font-medium mt-auto">View Details</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}