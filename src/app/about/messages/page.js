import { siteData } from "@/data/siteData";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Image from "next/image";

export default function Messages() {
  // Hum 'leadership' array use kar rahe hain jo abhi humne update kiya
  const leaders = siteData.pages.leadership || [];

  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title="Leadership Messages" 
        subtitle="Visionary leadership guiding our path to excellence" 
      />

      {/* Main Content Area */}
      <Section className="bg-white">
        <div className="flex flex-col gap-20"> {/* Har leader ke beech gap */}
          
          {leaders.map((leader, index) => (
            <div 
              key={leader.id} 
              className={`flex flex-col lg:flex-row gap-12 items-start ${index !== leaders.length - 1 ? 'border-b pb-16 border-gray-200' : ''}`}
            >
              
              {/* --- LEFT SIDE: TEXT CONTENT --- */}
              <div className="flex-1 space-y-6">
                <div className="border-l-8 border-primary pl-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {leader.title}
                  </h2>
                  <h3 className="text-2xl text-primary font-bold uppercase tracking-wide">
                    {leader.name}
                  </h3>
                  <p className="text-gray-500 font-medium text-lg">
                    {leader.designation}
                  </p>
                </div>

                {/* 'whitespace-pre-line' zaroori hai taake paragraphs alag alag dikhein */}
                <div className="text-gray-700 text-lg leading-relaxed text-justify whitespace-pre-line">
                  {leader.message}
                </div>
              </div>

              {/* --- RIGHT SIDE: LARGE IMAGE --- */}
              <div className="w-full lg:w-[450px] shrink-0">
                <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-2xl border-4 border-gray-100 bg-gray-50">
                  <Image 
                    src={leader.image} 
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority={index === 0} // Pehli image jaldi load hogi
                  />
                </div>
              </div>

            </div>
          ))}

        </div>
      </Section>
    </div>
  );
}