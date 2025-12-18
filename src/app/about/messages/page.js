import { siteData } from "@/data/siteData";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Image from "next/image";

export default function Messages() {
  const { sections } = siteData.pages.messages;
  
  // Filter out the messages (assuming all sections here are messages)
  const messages = sections.filter(s => s.type === "message");

  return (
    <div>
      <PageHeader title="Leadership Messages" subtitle="Visionary leadership guiding our path to excellence" />

      <Section>
        <div className="grid grid-cols-1 gap-12">
          {messages.map((msg, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row">
<div className="relative w-full md:w-80 md:shrink-0 min-h-[300px] md:h-auto bg-white">               
<div className="relative w-full md:w-80 md:shrink-0 min-h-[300px] md:h-auto bg-white">                 
  {msg.image ? (
                   // Agar siteData mein image path hai, to ye chalega:
<Image 
      src={msg.image} 
      alt={msg.name}
      fill
      sizes="(max-width: 768px) 100vw, 320px"
      style={{ 
        objectFit: "cover", 
        objectPosition: "top center" // Chehra aur body center mein rahegi
      }} 
      className="absolute inset-0 w-full h-full"
    />
                 ) : (
                   // Agar image nahi mili, to purana wala placeholder dikhega:
                   <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
      {msg.name} Photo
    </div>
                 )}
              </div>
              </div>
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{msg.title}</h2>
                    <h3 className="text-xl text-primary font-semibold">{msg.name}</h3>
                    <p className="text-gray-500 text-sm">{msg.designation} | {msg.qualification}</p>
                </div>
                <blockquote className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-primary pl-6">
                  &quot;{msg.text}&quot;
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
