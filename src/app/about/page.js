import { siteData } from "@/data/siteData";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function About() {
  const { sections } = siteData.pages.about;
  const banner = sections.find((s) => s.type === "banner");
  const content = sections.find((s) => s.type === "content");
  const mv = sections.find((s) => s.type === "mission_vision");

  return (
    <div>
      <PageHeader title={banner.title} subtitle={banner.subtitle} />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.text}
            </p>
          </div>
          {/* Agar content.image majood hai to Image dikhao, warna Placeholder */}
          {content.image ? (
            <div className="rounded-2xl h-64 md:h-80 w-full overflow-hidden shadow-lg">
              <img 
                src={content.image} 
                alt="About AHSION" 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="bg-gray-200 rounded-2xl h-64 md:h-80 w-full flex items-center justify-center text-gray-400">
              <span>About Image Placeholder</span>
            </div>
          )}
        </div>
      </Section>

      <div className="bg-primary text-white">
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">{mv.mission}</p>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">{mv.vision}</p>
                </div>
            </div>
        </Section>
      </div>
    </div>
  );
}
