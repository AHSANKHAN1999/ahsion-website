"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import {
    Activity,
    Calendar,
    Globe,
    ShieldCheck,
    Baby,
    Wind,
    Lungs, // approximate for COPD
    Bed,
    UserPlus, // approximate for child care/CP
    Zap,
    ArrowRight,
    CheckCircle2
} from "lucide-react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const { home } = siteData.pages;

  // Slider Effect for Hero Images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % home.hero.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [home.hero.images.length]);

  // Map icon strings to actual Lucide components
  const getIcon = (iconName, size = 32) => {
      const icons = {
          "activity": <Activity size={size} />,
          "calendar": <Calendar size={size} />,
          "globe": <Globe size={size} />,
          "shield": <ShieldCheck size={size} />,
          "baby": <Baby size={size} />,
          "wind": <Wind size={size} />,
          "lungs": <Activity size={size} />, // Fallback
          "bed": <Bed size={size} />,
          "child": <UserPlus size={size} />, // Fallback
          "zap": <Zap size={size} />,
      };
      return icons[iconName] || <Activity size={size} />;
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-[#1E3A8A]">
        
        {/* Background Images with Overlay */}
        {home.hero.images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Carevia Hero Background"
              fill
              className="object-cover object-top"
              priority={index === 0}
            />
            {/* Deep Navy Blue Gradient Overlay for Corporate Look */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/95 via-[#1E3A8A]/80 to-transparent"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 text-left px-4 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto pb-20">
          <div className="max-w-2xl">
              <span className="inline-block py-1 px-4 rounded bg-[#D4AF37] text-[#1E3A8A] font-bold text-sm uppercase tracking-wider mb-6 shadow-md">
                 Professional At-Home Care
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight mb-6 drop-shadow-lg leading-tight">
                {home.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-blue-100 font-light mb-10 leading-relaxed">
                {home.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/services"
                    className="px-8 py-4 bg-[#D4AF37] text-[#1E3A8A] font-bold rounded hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
                >
                    View Our Services <ArrowRight size={20} />
                </Link>
                <Link
                    href="/contact"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-[#1E3A8A] transition-all flex items-center justify-center"
                >
                    Request a Consultation
                </Link>
              </div>
          </div>
        </div>
      </div>

      {/* ================= OVERLAPPING ACTION GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 -mt-24 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {home.hero_actions.map((action, idx) => (
                  <Link href={action.link} key={idx} className="bg-white rounded-lg p-6 shadow-xl border-t-4 border-[#1E3A8A] hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-[#D4AF37] flex items-center justify-center mb-4 transition-colors">
                          {getIcon(action.icon, 28)}
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#1E3A8A]">{action.label}</h3>
                  </Link>
              ))}
          </div>
      </div>

      {/* ================= TRUST / STATISTICS SECTION ================= */}
      <div className="bg-white py-16 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-[#1E3A8A]">Why Choose Carevia?</h2>
                  <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {home.trust_stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center p-4">
                          <span className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-2">{stat.stat}</span>
                          <span className="text-gray-600 font-medium uppercase tracking-wide text-sm">{stat.label}</span>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* ================= SERVICES SECTION ================= */}
      <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                  <div className="max-w-2xl">
                      <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Specialized Care</span>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]">Expert Home Health Services</h2>
                      <p className="text-gray-600 mt-4 text-lg">We bring hospital-standard ICU and medical care directly to your doorstep, ensuring comfort, safety, and recovery.</p>
                  </div>
                  <Link href="/services" className="hidden md:flex items-center gap-2 text-[#1E3A8A] font-bold hover:text-[#D4AF37] transition-colors pb-2 border-b-2 border-transparent hover:border-[#D4AF37]">
                      View All Services <ArrowRight size={20} />
                  </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {home.services.map((service, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden">
                          {/* Accent bar */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1E3A8A] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

                          <div className="w-14 h-14 bg-blue-50 text-[#1E3A8A] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A] group-hover:text-[#D4AF37] transition-colors shadow-sm">
                              {getIcon(service.icon, 28)}
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-6">
                              {service.description}
                          </p>

                          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#D4AF37] transition-colors">
                              Request Care <ArrowRight size={16}/>
                          </Link>
                      </div>
                  ))}
              </div>

              <div className="mt-8 md:hidden text-center">
                  <Link href="/services" className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold hover:text-[#D4AF37] transition-colors">
                      View All Services <ArrowRight size={20} />
                  </Link>
              </div>
          </div>
      </div>

      {/* ================= CTA STRIP ================= */}
      <div className="bg-[#D4AF37] py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
                <h2 className="text-3xl font-extrabold text-[#1E3A8A] mb-2">Need Immediate Assistance?</h2>
                <p className="text-[#1E3A8A] opacity-90 font-medium text-lg">Our certified BSN/RN staff is available 24/7 for on-spot services.</p>
            </div>
            <Link 
                href={`tel:${siteData.contact.phone}`}
                className="bg-[#1E3A8A] text-white px-10 py-4 rounded font-bold text-lg hover:bg-white hover:text-[#1E3A8A] shadow-xl transition-all transform hover:-translate-y-1"
            >
                Call Now: {siteData.contact.phone}
            </Link>
        </div>
      </div>

    </div>
  );
}