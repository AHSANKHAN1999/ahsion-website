"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { FileText, Download, ChevronRight, Calendar, Search, CheckCircle } from "lucide-react";

// --- DATA: Yahan aap naye results add karenge ---
const resultsData = [
  {
    id: "batch-2024-28",
    title: "Session 2024 - 2028",
    status: "Current Batch",
    semesters: [
      { id: "sem-1", name: "First Semester Result", date: "June 2024", pdf: "/results/sample.pdf" },
      // Naya result yahan add hoga
    ]
  },
  {
    id: "batch-2023-27",
    title: "Session 2023 - 2027",
    status: "Ongoing",
    semesters: [
      { id: "sem-1", name: "First Semester Result", date: "June 2023", pdf: "/results/sample.pdf" },
      { id: "sem-2", name: "Second Semester Result", date: "Dec 2023", pdf: "/results/sample.pdf" },
      { id: "sem-3", name: "Third Semester Result", date: "June 2024", pdf: "/results/sample.pdf" },
    ]
  },
  {
    id: "batch-2022-26",
    title: "Session 2022 - 2026",
    status: "Ongoing",
    semesters: [
      { id: "sem-1", name: "First Semester Result", date: "June 2022", pdf: "/results/sample.pdf" },
      { id: "sem-2", name: "Second Semester Result", date: "Dec 2022", pdf: "/results/sample.pdf" },
      { id: "sem-3", name: "Third Semester Result", date: "June 2023", pdf: "/results/sample.pdf" },
      { id: "sem-4", name: "Fourth Semester Result", date: "Dec 2023", pdf: "/results/sample.pdf" },
    ]
  },
];

export default function Results() {
  const [selectedBatch, setSelectedBatch] = useState(resultsData[0]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* ================= HERO SECTION (Matches About Page) ================= */}
      <div className="relative bg-blue-900 text-white py-20 px-4 overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400 text-blue-900 font-bold text-xs uppercase tracking-wider mb-4 shadow-md">
             Examination Department
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
             Exam Results
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            View and download semester-wise gazettes and result sheets.
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <Section className="py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* --- LEFT SIDE: SELECTOR (SIDEBAR) --- */}
          <div className="w-full lg:w-1/3 space-y-6">
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-blue-900 p-4">
                    <h3 className="text-white font-bold flex items-center gap-2">
                        <Search size={20} className="text-yellow-400"/> Select Session
                    </h3>
                </div>
                <div>
                  {resultsData.map((batch) => (
                    <button
                      key={batch.id}
                      onClick={() => setSelectedBatch(batch)}
                      className={`w-full text-left px-6 py-4 border-b border-gray-100 last:border-0 flex justify-between items-center transition-all duration-200 ${
                        selectedBatch.id === batch.id 
                        ? "bg-blue-50 text-blue-900 font-bold border-l-4 border-l-yellow-400" 
                        : "hover:bg-gray-50 text-gray-600 hover:text-blue-900"
                      }`}
                    >
                      <span>{batch.title}</span>
                      {selectedBatch.id === batch.id && <ChevronRight size={18} className="text-blue-900" />}
                    </button>
                  ))}
                </div>
            </div>

            {/* Note Box */}
            <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200 shadow-sm">
                <h4 className="font-bold text-yellow-800 mb-2 text-sm flex items-center gap-2">
                    <CheckCircle size={16}/> Important Note
                </h4>
                <p className="text-xs text-yellow-800/80 leading-relaxed">
                    Results are uploaded here after the official announcement by DUHS. If you cannot find your result, please contact the Admin Office.
                </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: RESULTS LIST --- */}
          <div className="w-full lg:w-2/3">
             <div className="mb-6 flex items-center justify-between border-b-2 border-gray-100 pb-4">
                <h2 className="text-3xl font-bold text-blue-900">
                    {selectedBatch.title}
                </h2>
                <span className="bg-blue-100 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {selectedBatch.status}
                </span>
             </div>

             <div className="space-y-4">
                {selectedBatch.semesters.length > 0 ? (
                    selectedBatch.semesters.map((result, idx) => (
                        <div key={idx} className="group bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-900 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                            
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-900 group-hover:text-yellow-400 transition-colors duration-300">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-800 group-hover:text-blue-900 transition-colors">
                                        {result.name}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar size={14} className="text-yellow-500" />
                                        <span>Announced: {result.date}</span>
                                    </div>
                                </div>
                            </div>

                            <a 
                                href={result.pdf} 
                                target="_blank" 
                                className="w-full sm:w-auto px-6 py-2.5 bg-white text-blue-900 border-2 border-blue-900 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-900 hover:text-white transition-all duration-300"
                            >
                                <Download size={16} /> Download
                            </a>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-400">No results found for this session.</p>
                    </div>
                )}
             </div>
          </div>

        </div>
      </Section>
    </div>
  );
}
// Fixed file name