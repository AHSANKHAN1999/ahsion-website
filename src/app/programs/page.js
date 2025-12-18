import { siteData } from "@/data/siteData";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function Programs() {
  const { sections } = siteData.pages.programs;
  const banner = sections.find((s) => s.type === "banner");
  const list = sections.find((s) => s.type === "program_list");

  return (
    <div>
      <PageHeader title={banner.title} />

      <Section>
        <div className="space-y-12">
          {list.programs.map((program) => (
            <div
              key={program.id}
              id={program.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow scroll-mt-24"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {program.name}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="block text-sm text-gray-500 uppercase tracking-wider font-semibold">
                        Duration
                      </span>
                      <span className="text-gray-900 font-medium">{program.duration}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="block text-sm text-gray-500 uppercase tracking-wider font-semibold">
                        Eligibility
                      </span>
                      <span className="text-gray-900 font-medium">{program.eligibility}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
