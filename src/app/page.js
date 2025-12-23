"use client";

import { useState, useEffect } from "react"; 
import Link from "next/link";
import Image from "next/image"; 
import { siteData } from "@/data/siteData"; 
import { Search, ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin } from "lucide-react"; 

// --- SLIDER IMAGES ---
const heroImages = [
  "/images/hero/hero1.jpg", 
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

export default function Home() { 
  const [currentImage, setCurrentImage] = useState(0);

  // --- DATA ---
  const { sections } = siteData.pages.home;
  const programs = sections.find((s) => s.type === "program_highlights");

  // --- SLIDER LOGIC ---
  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  // Auto-play Slider (Har 5 second baad)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">
      
      {/* ================= HEADER (NAVBAR) START ================= */}
      <header className="absolute top-0 left-0 w-full z-50 text-white">
        
        {/* Top Bar (Dark Blue) */}
        <div className="bg-blue-900/90 border-b border-white/10 py-2 px-4 md:px-8 flex justify-between items-center text-[10px] md:text-xs uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Admissions Open 2025 - Apply Online</span>
            <span className="md:hidden">Admissions Open</span>
          </div>
          <div className="flex gap-4">
             <a href="#" className="hover:text-blue-300 transition"><Facebook size={14} /></a>
             <a href="#" className="hover:text-blue-300 transition"><Instagram size={14} /></a>
             <a href="#" className="hover:text-blue-300 transition"><Linkedin size={14} /></a>
          </div>
        </div>

        {/* Main Navbar (Transparent) */}
        <nav className="flex justify-between items-center py-6 px-4 md:px-12 backdrop-blur-[2px]">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tighter font-serif drop-shadow-md">
              AHS<span className="text-blue-400">ION</span>
            </div>
          </div>

          {/* Center Links (Desktop) */}
          <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-shadow-sm">
            <li className="hover:text-blue-300 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-300 cursor-pointer transition">About</li>
            <li className="hover:text-blue-300 cursor-pointer transition">Programs</li>
            <li className="hover:text-blue-300 cursor-pointer transition">Labs</li>
          </ul>

          {/* Apply Button */}
          <div className="flex items-center gap-4">
             <Search className="w-5 h-5 cursor-pointer hover:text-blue-300" />
             <Link href="/admissions" className="border border-white px-5 py-2 text-xs font-bold uppercase hover:bg-white hover:text-blue-900 transition duration-300 tracking-wider">
               Apply Now
             </Link>
          </div>
        </nav>
      </header>


      {/* ================= HERO SECTION (BLUE THEME + BUTTONS) ================= */}
      <div className="relative w-full h-[100vh] flex items-center bg-blue-950 overflow-hidden">
        
        {/* Background Images Loop */}
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
            {/* Blue Overlay (Ye Theme Color ko Control kar raha hai) */}
            <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/20"></div> {/* Thora sa dark taake text parha jaye */}
          </div>
        ))}
        
        {/* HERO TEXT CONTENT */}
        <div className="relative z-20 px-6 md:px-16 lg:px-24 mt-10 max-w-5xl">
          
          <p className="text-blue-200 text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in font-bold">
            Committed to Excellence
          </p>

          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[0.95] tracking-tight drop-shadow-2xl">
            NURSING <br />
            <span className="italic font-light">EDUCATION</span>
          </h1>

          {/* Stylish Script Text (Blue Color) */}
          <div className="relative -mt-4 md:-mt-6 ml-10 md:ml-32">
            <span className="font-cursive text-blue-400 text-6xl md:text-8xl lg:text-9xl drop-shadow-lg opacity-90" style={{ fontFamily: 'var(--font-great-vibes)' }}>
              Redefined
            </span>
          </div>

          <p className="text-gray-100 mt-8 max-w-lg text-lg font-light leading-relaxed drop-shadow-md">
            Join Advanced Health Sciences Institute. World-class clinical training, expert faculty, and a future of dignity.
          </p>

          <div className="mt-10 flex gap-4">
            <Link href="/programs" className="bg-white text-blue-900 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition duration-300 shadow-lg">
              View Programs
            </Link>
          </div>

        </div>

        {/* --- SCROLL BUTTONS (ARROWS) --- */}
        <div className="absolute bottom-10 right-10 z-30 flex gap-4">
          
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition duration-300 backdrop-blur-sm group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition duration-300 backdrop-blur-sm group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
        {/* --- END BUTTONS --- */}

      </div>


      {/* ================= PROGRAMS SECTION ================= */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-serif mb-4 text-blue-900">Our Programs</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.items.map((program, idx) => (
              <Link
                key={idx}
                href={program.link}
                className="group relative block h-80 overflow-hidden bg-white shadow-lg rounded-sm"
              >
                 <div className="absolute inset-0 bg-blue-900 group-hover:bg-blue-800 transition"></div>
                 
                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 border border-white/10 group-hover:border-blue-400 transition duration-500">
                    <span className="text-blue-400 font-serif text-5xl mb-4 opacity-30 group-hover:opacity-100 transition">0{idx + 1}</span>
                    <h3 className="text-2xl font-serif text-white mb-2">{program.name}</h3>
                    <span className="text-xs text-white uppercase tracking-widest border-b border-transparent group-hover:border-blue-400 pb-1">View Details</span>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}