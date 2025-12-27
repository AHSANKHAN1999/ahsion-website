"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import Section from "@/components/Section";
import Gallery from "@/components/Gallery";
import { ArrowRight, Megaphone, Stethoscope, GraduationCap, Baby, HeartPulse, Activity as ActivityIcon, Shield as ShieldIcon, Users, Building2, Globe } from "lucide-react";

// --- CUSTOM CSS FOR TICKER ---
const tickerAnimation = `
  @keyframes scroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  .animate-scroll {
    display: inline-block;
    white-space: nowrap;
    animation: scroll 30s linear infinite;
  }
  @media (max-width: 768px) {
    .animate-scroll {
      animation: scroll 20s linear infinite;
    }
  }
`;

// Hero Images Array
const heroImages = [
  "/images/about-main.jpg", // Filhal about image use ki hai, baad mein change kar lein
  "/images/hero1.jpg",
  "/images/hero2.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // --- SAFE DATA LOADING (Old Logic) ---
  const homeData = siteData.pages.home || {};
  const sections = homeData.sections || [];
  
  const hero = sections.find((s) => s.type === "hero") || { title: "AHSION", subtitle: "Nursing Education", button: { link: "#", text: "Apply" } };
  const about = sections.find((s) => s.type === "about_short") || { title: "About Us", text: "", button: { link: "#", text: "Read More" } };
  const programs = sections.find((s) => s.type === "program_highlights") || { title: "Programs", items: [] };

  // Slider Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Icons Mapping for Programs (Naya Feature)
  const getIcon = (index) => {
    const icons = [
        <Stethoscope size={32} key="1"/>, 
        <GraduationCap size={32} key="2"/>, 
        <Baby size={32} key="3"/>, 
        <HeartPulse size={32} key="4"/>, 
        <ActivityIcon size={32} key="5"/>, 
        <ShieldIcon size={32} key="6"/>
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="font-sans text-gray-900">
      <style>{tickerAnimation}</style>

      {/* ================= HERO SECTION (Grand Style) ================= */}
      <div className="relative w-full h-[650px] flex items-center justify-center overflow-hidden bg-gray-900">
        
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
            {/* Blue Gradient Overlay (Naya Look) */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70 mix-blend-multiply"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
          <span className="inline-block py-1 px-4 rounded-full bg-yellow-400 text-blue-900 font-bold text-sm uppercase tracking-wider mb-6 animate-fadeIn shadow-lg">
             Admissions Open 2025-26
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-extrabold tracking-tight mb-6 drop-shadow-xl leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light mb-10 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
                href={hero.button.link} 
                className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-white transition-all shadow-lg hover:scale-105 transform flex items-center justify-center gap-2"
            >
                {hero.button.text} <ArrowRight size={20} />
            </Link>
            <Link 
                href="/programs" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center"
            >
                View Programs
            </Link>
          </div>
        </div>
      </div>

      {/* ================= NEWS TICKER (Blue & Yellow) ================= */}
      <div className="bg-blue-900 border-t border-blue-800 relative z-30">
        <div className="max-w-7xl mx-auto flex items-center h-12">
            {/* Label */}
            <div className="bg-yellow-400 text-blue-900 font-bold px-6 h-full flex items-center gap-2 z-10 shadow-md">
                <Megaphone size={20} />
                <span className="hidden md:inline">LATEST NEWS</span>
            </div>
            {/* Text */}
            <div className="flex-1 overflow-hidden relative h-full flex items-center">
                <div className="animate-scroll text-white font-medium px-4 flex items-center h-full">
                    <span className="mr-12">New Admissions Open: Generic BS Nursing (Batch 7th) Session 2025-26</span>
                    <span className="mr-12 text-yellow-400">•</span>
                    <span className="mr-12">Apply Online Today!</span>
                    <span className="mr-12 text-yellow-400">•</span>
                    <span className="mr-12">Limited Seats Available</span>
                </div>
            </div>
        </div>
      </div>

      {/* ================= WELCOME / ABOUT SECTION ================= */}
      <Section className="py-20 text-center">
        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Welcome to AHSION</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
          {about.title}
        </h2>
        <p className="max-w-3xl mx-auto mb-10 text-gray-600 text-lg leading-relaxed">
          {about.text || "AHSION is dedicated to providing quality nursing education with modern facilities, experienced faculty, and a strong commitment to professional excellence."}
        </p>

        {/* Why Choose Us Grid (Naya Feature) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-10 text-left">
            {[
                { icon: <Users size={32}/>, title: "Expert Faculty", desc: "Learn from qualified professionals." },
                { icon: <Building2 size={32}/>, title: "Modern Campus", desc: "State-of-the-art labs & library." },
                { icon: <Globe size={32}/>, title: "Recognized Degree", desc: "Affiliated with DUHS, PNMC & NEB." },
            ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mb-4">
                        {item.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>

        <Link href={about.button.link} className="inline-block border-b-2 border-blue-900 text-blue-900 font-bold pb-1 hover:text-yellow-600 hover:border-yellow-600 transition-colors">
          {about.button.text} &rarr;
        </Link>
      </Section>
<Gallery />
      {/* ================= PROGRAMS GRID (New Card Style) ================= */}
      <div className="bg-gray-50 py-20">
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-blue-900">{programs.title}</h2>
                <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.items.map((program, idx) => (
                    <Link href={program.link} key={idx} className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-900 hover:border-yellow-400 relative overflow-hidden">
                        {/* Background Icon Opacity */}
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                            <div className="text-blue-900 scale-[2]">{getIcon(idx)}</div>
                        </div>
                        
                        {/* Main Icon */}
                        <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-yellow-400 transition-colors shadow-sm">
                            {getIcon(idx)}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-900 transition-colors">
                            {program.name}
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">Click to view program details and eligibility criteria.</p>
                        
                        <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wide">
                            View Details <ArrowRight size={16}/>
                        </span>
                    </Link>
                ))}
            </div>
        </Section>
      </div>

      {/* ================= CTA STRIP ================= */}
      <div className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
                <h2 className="text-3xl font-extrabold text-blue-900 mb-2">Ready to Start Your Career?</h2>
                <p className="text-blue-800 font-medium text-lg">Admissions are open for the upcoming session. Don't miss out!</p>
            </div>
            <Link 
                href="/admissions" 
                className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 shadow-xl transition-all transform hover:-translate-y-1"
            >
                Apply Now
            </Link>
        </div>
      </div>

    </div>
  );
}