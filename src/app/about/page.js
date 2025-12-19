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
        {/* SOLUTION: 'grid' use kiya hai. Grid mein dono dabbe automatically barabar height ke hote hain. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT: TEXT SIDE */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {about.introduction.title}
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed text-justify whitespace-pre-line">
              {about.introduction.text}
            </div>
          </div>

          {/* RIGHT: IMAGE SIDE */}
          {/* 'h-full' ka matlab hai: Jitna bada barabar wala text hai, utna bada main bhi hunga */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
         <Image
            src="/images/building.jpg" // Aapka image path
            alt="Campus Building"
            fill // Next.js 'fill' property use karein taake parent ki height le
            className="object-cover rounded-xl" // object-cover image ko khichne se bachayega
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