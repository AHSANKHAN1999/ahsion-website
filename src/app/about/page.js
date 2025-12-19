import { siteData } from "@/data/siteData";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Image from "next/image";

export default function About() {
  const { about } = siteData.pages;

  return (
    <div>
      <PageHeader 
        title={about.title} 
        subtitle={about.subtitle} 
      />

      {/* --- INTRODUCTION SECTION --- */}
      <Section className="bg-white">
        {/* Step 1: 'items-stretch' container par lagaya */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* LEFT: TEXT SIDE */}
          <div className="flex-1 space-y-6 py-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {about.introduction.title}
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed text-justify whitespace-pre-line">
              {about.introduction.text}
            </div>
          </div>

          {/* RIGHT: IMAGE SIDE */}
          {/* Step 2: 'lg:min-h-full' add kiya taake ye box text ke barabar lamba ho jaye */}
          <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full rounded-xl overflow-hidden shadow-lg">
            <Image 
              src={about.introduction.image} 
              alt="AHSION Building"
              fill
              className="object-cover" // Step 3: object-cover image ko stretch karke fit karega
            />
          </div>

        </div>
      </Section>

      {/* --- MISSION & VISION SECTION --- */}
      <Section className="bg-blue-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {about.mission.title}
            </h3>
            <p className="text-blue-100 leading-relaxed text-justify whitespace-pre-line">
              {about.mission.text}
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {about.vision.title}
            </h3>
            <p className="text-blue-100 leading-relaxed text-justify whitespace-pre-line">
              {about.vision.text}
            </p>
          </div>

        </div>
      </Section>
    </div>
  );
}