"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { FileText, Download, ChevronRight, Calendar, Search, Award, AlertCircle } from "lucide-react";

// --- DATA: Yahan aap naye results add karenge ---
const resultsData = [
  {
    id: "batch-2024-28",
    title: "Session 2024 - 2028",
    status: "Current",
    semesters: [
      { id: "sem-1", name: "First Semester", date: "June 2024", pdf: "/results/sample.pdf" },
      // Jab naya result aye, yahan neechay line add karein:
      // { id: "sem-2", name: "Second Semester", date: "Dec 2024", pdf: "/results/sample.pdf" },
    ]
  },
  {
    id: "batch-2023-27",
    title: "Session 2023 - 2027",
    status: "Ongoing",
    semesters: [
      { id: "sem-1", name: "First Semester", date: "June 2023", pdf: "/results/sample.pdf" },
      { id: "sem-2", name: "Second Semester", date: "Dec 2023", pdf: "/results/sample.pdf" },
      { id: "sem-3", name: "Third Semester", date: "June 2024", pdf: "/images/results/batch23_sem3.pdf" },
    ]
  },
  {
    id: "batch-2022-26",
    title: "Session 2022 - 2026",
    status: "Ongoing",
    semesters: [
      { id: "sem-1", name: "First Semester", date: "June 2022", pdf: "/results/sample.pdf" },
      { id: "sem-2", name: "Second Semester", date: "Dec 2022", pdf: "/results/sample.pdf" },
      { id: "sem-3", name: "Third Semester", date: "June 2023", pdf: "/results/sample.pdf" },
      { id: "sem-4", name: "Fourth Semester", date: "Dec 2023", pdf: "/results/sample.pdf" },
    ]
  },
];

export default function Results() {
  const [selectedBatch, setSelectedBatch] = useState(resultsData[0]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* ================= HERO SECTION (University Style) ================= */}
      <div className="relative bg-[#002147] text-white py-24 px-4 overflow-hidden">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-semibold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm">
            <Award size={14} /> Examination Department
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-serif">
            Results & Gazettes
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Access the official semester-wise results for the B.Sc. Nursing program. 
            Select your academic session to view details.
          </p>
        </div>
        
        {/* Decorative Bottom Strip */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"></div>
      </div>

      <Section className="py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* --- LEFT SIDE: OFFICIAL SIDEBAR --- */}
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden sticky top-24">
              <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
                <h3 className="text-lg font-bold text-[#002147] flex items-center gap-2">
                  <Search size={18} className="text-yellow-600"/> Select Session
                </h3>
              </div>
              <div className="p-2">
                {resultsData.map((batch) => (
                  <button
                    key={batch.id}
                    onClick={() => setSelectedBatch(batch)}
                    className={`w-full text-left px-4 py-3 rounded-md mb-1 flex justify-between items-center transition-all duration-200 text-sm font-medium ${
                      selectedBatch.id === batch.id 
                      ? "bg-[#002147] text-white shadow-md transform scale-[1.02]" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#002147]"
                    }`}
                  >
                    <span>{batch.title}</span>
                    {selectedBatch.id === batch.id && <ChevronRight size={16} className="text-yellow-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Admin Note Box */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg shadow-sm">
              <div className="flex gap-3">
                <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-yellow-800 text-sm uppercase mb-1">Important Note</h4>
                  <p className="text-xs text-yellow-800/80 leading-relaxed">
                    Results are uploaded here after the official announcement by Dow University of Health Sciences (DUHS). 
                    If you cannot find your result, please contact the Administration Office.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: RESULTS CONTENT --- */}
          <div className="w-full lg:w-3/4">
             <div className="mb-8 flex items-end justify-between border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-3xl font-bold text-[#002147] font-serif">{selectedBatch.title}</h2>
                  <p className="text-slate-500 mt-1">Academic Performance Records</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  selectedBatch.status === "Current" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                }`}>
                  {selectedBatch.status} Batch
                </span>
             </div>

             <div className="grid gap-5">
                {selectedBatch.semesters.length > 0 ? (
                    selectedBatch.semesters.map((result, idx) => (
                        <div key={idx} className="group bg-white p-0 rounded-lg border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-900/30 transition-all duration-300 flex flex-col md:flex-row overflow-hidden">
                            
                            {/* Decorative Left Strip */}
                            <div className="w-full md:w-2 bg-[#002147] group-hover:bg-yellow-500 transition-colors"></div>

                            <div className="p-6 flex-1 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="flex items-start gap-4 w-full sm:w-auto">
                                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 group-hover:bg-[#002147] group-hover:text-white transition-colors duration-300">
                                        <FileText size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-[#002147] mb-1 font-serif">
                                            {result.name}
                                        </h4>
                                        <div className="flex items-center gap-4 text-sm text-slate-500">
                                            <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                              <Calendar size={14} className="text-yellow-600"/> {result.date}
                                            </span>
                                            <span className="text-xs uppercase tracking-wide font-semibold text-slate-400">Gazette Copy</span>
                                        </div>
                                    </div>
                                </div>

                                <a 
                                    href={result.pdf} 
                                    target="_blank" 
                                    className="w-full sm:w-auto px-6 py-3 bg-[#002147] text-white text-sm font-semibold rounded-md flex items-center justify-center gap-2 hover:bg-yellow-500 hover:text-[#002147] transition-all duration-300 shadow-md"
                                >
                                    <Download size={16} /> Download Result
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-16 bg-slate-50 rounded-xl border-2 border-dashed border-slate-300">
                        <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                          <Search size={30} />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-700">No Results Found</h3>
                        <p className="text-slate-500">Results for this session have not been uploaded yet.</p>
                    </div>
                )}
             </div>
          </div>

        </div>
      </Section>
    </div>
  );
}