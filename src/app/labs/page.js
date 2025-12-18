import Link from "next/link";
import { siteData } from "@/data/siteData";
import Section from "@/components/Section";
import { CheckCircle } from "lucide-react";

export default function Labs() {
  const { labs } = siteData.pages;
  const { hero, intro, labs: labsList, gallery_section, cta } = labs;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        {/* Pattern overlay */}
        <div 
            className="absolute inset-0 opacity-10 z-0" 
            style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                backgroundSize: '20px 20px'
            }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
          <span className="inline-block bg-blue-500/30 text-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-blue-400/30 backdrop-blur-sm">
            {hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{intro.title}</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {intro.description}
        </p>
      </Section>

      {/* Labs List */}
      <div className="bg-gray-50">
        <Section>
          <div className="space-y-24">
            {labsList.map((lab, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col gap-12 items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-primary mb-4">{lab.title}</h3>
                  <div className="h-1 w-20 bg-blue-400 mb-6 rounded-full"></div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {lab.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {lab.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Display */}
                <div className="flex-1 w-full">
                  <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                    {/* Agar image majood hai to dikhao, warna grey box */}
                    {lab.image ? (
                      <img 
                        src={lab.image} 
                        alt={lab.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-semibold bg-gray-200">
                        Image Not Found
                      </div>
                    )}
                    
                    {/* Blue Overlay Effect on Hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Gallery Placeholder */}
      <Section>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{gallery_section.title}</h2>
            <p className="text-gray-600">{gallery_section.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery_section.images.map((imgSrc, idx) => (
                <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer bg-gray-100">
                    <img 
                        src={imgSrc} 
                        alt={`Gallery Image ${idx + 1}`} 
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
      </Section>

      {/* CTA Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl text-blue-100 mb-10">{cta.description}</p>
            <Link 
                href={cta.button_link}
                className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
                {cta.button_text}
            </Link>
        </div>
      </div>
    </div>
  );
}
