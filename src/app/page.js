"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import Section from "@/components/Section";

// Slider Images
const heroImages = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Data Load
  const { sections } = siteData.pages.home;
  const hero = sections.find((s) => s.type === "hero");
  const about = sections.find((s) => s.type === "about_short");
  const programs = sections.find((s) => s.type === "program_highlights");

  // Slider Logic (Automatic)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section (Design same, bas Background Slider hai) */}
      <div className="relative text-white h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        
        {/* --- Background Slider Start --- */}
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Hero Background"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-blue-900/85 mix-blend-multiply"></div>
          </div>
        ))}
        {/* --- Background Slider End --- */}

        {/* Content (Waisa hi jaisa pehle tha) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto drop-shadow-md">
            {hero.subtitle}
          </p>
          <Link
            href={hero.button.link}
            className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            {hero.button.text}
          </Link>
        </div>
      </div>

      {/* About Short Section (Original) */}
      <Section className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{about.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          {about.text}
        </p>
        <Link
          href={about.button.link}
          className="text-blue-600 font-semibold hover:text-blue-800 flex items-center justify-center gap-1 group"
        >
          {about.button.text}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </Section>

      {/* Program Highlights (Original) */}
      <div className="bg-gray-50 py-16">
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
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
                  <span className="text-2xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.name}
                </h3>
                <span className="text-sm text-blue-600 font-medium mt-auto">
                  View Details
                </span>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}