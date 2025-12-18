import { siteData } from "@/data/siteData";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Image from "next/image";

export default function Affiliations() {
  const { sections } = siteData.pages.affiliations;
  const banner = sections.find((s) => s.type === "banner");
  const list = sections.find((s) => s.type === "affiliation_list");

  return (
    <div>
      <PageHeader title={banner.title} />

      <Section>
        <div className="space-y-16">
          {list.groups.map((group, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
                  >
                    <div className="w-32 h-32 relative mb-6 bg-white rounded-full flex items-center justify-center p-2">
                        {item.logo ? (
                            <Image 
                                src={item.logo} 
                                alt={item.name} 
                                fill
                                className="object-contain"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center text-gray-400 text-xs">
                                No Logo
                            </div>
                        )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
