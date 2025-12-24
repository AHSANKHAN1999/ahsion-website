"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { FileText, Download, ChevronRight, Calendar, Search } from "lucide-react";

// --- DATA: Yahan aap naye results add karenge ---
const resultsData = [
  {
    id: "batch-2024-28",
    title: "Session 2024 - 2028",
    status: "Current",
    semesters: [
      { id: "sem-1", name: "1st Semester", date: "June 2024", pdf: "/results/sample.pdf" },
      // Jab naya result aye, yahan neechay line add karein:
      // { id: "sem-2", name: "2nd Semester", date: "Dec 2024", pdf: "/results/sample.pdf" },
    ]
  },
  {
    id: "batch-2023-27",
    title: "Session 2023 - 2027",
    status: "Ongoing",
    semesters: [
      { id: "sem-1", name: "1st Semester", date: "June 2023", pdf: "/results/sample.pdf" },
      { id: "sem-2", name: "2nd Semester", date: "Dec 2023", pdf: "/results/sample.pdf" },
      { id: "sem-3", name: "3rd Semester", date: "June 2024", pdf: "/results/sample.pdf" },
    ]
  },
  {
    id: "batch-2022-26",
    title: "Session 2022 - 2026",
    status: "Ongoing",
    semesters: [
      { id: "sem-1", name: "1st Semester", date: "June 2022", pdf: "/results/sample.pdf" },
      { id: "sem-2", name: "2nd Semester", date: "Dec 2022", pdf: "/results/sample.pdf" },
      { id: "sem-3", name: "3rd Semester", date: "June 2023", pdf: "/results/sample.pdf" },
      { id: "sem-4", name: "4th Semester", date: "Dec 2023", pdf: "/results/sample.pdf" },
    ]
  },
  // Purane batches mazeed add kar sakte hain...
];

export default function Results() {
  const [selectedBatch, setSelectedBatch] = useState(resultsData[0]); // Default pehla batch khulega

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative bg-blue-900 text-white py-20 px-4 overflow-hidden">
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
            Select your session to view and download semester-wise result gazettes.
          </p>
        </div>
      </div>

      <Section className="py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- LEFT SIDE: BATCH SELECTOR --- */}
          <div className="w-full lg:w-1/3 space-y-4">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Search size={20}/> Select Session
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {resultsData.map((batch) => (
                    <button
                        key={batch.id}
                        onClick={() => setSelectedBatch(batch)}
                        className={`w-full text-left px-6 py-4 border-b border-gray-100 last:border-0 flex justify-between items-center transition-all ${
                            selectedBatch.id === batch.id 
                            ? "bg-blue-50 border-l-4 border-l-blue-900 text-blue-900 font-bold" 
                            : "hover:bg-gray-50 text-gray-600 border-l-4 border-l-transparent"
                        }`}
                    >
                        <span>{batch.title}</span>
                        {selectedBatch.id === batch.id && <ChevronRight size={18} />}
                    </button>
                ))}
            </div>
            
            {/* Note Box */}
            <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl text-sm text-yellow-800 mt-6">
                <strong>Note:</strong> Results are uploaded after official announcement by Dow University (DUHS). If you can't find your result, please contact the admin office.
            </div>
          </div>

          {/* --- RIGHT SIDE: RESULTS LIST --- */}
          <div className="w-full lg:w-2/3">
             <div className="mb-6 border-b border-gray-200 pb-2">
                <h2 className="text-2xl font-bold text-gray-900">{selectedBatch.title}</h2>
                <p className="text-gray-500 text-sm">List of announced results</p>
             </div>

             <div className="space-y-4">
                {selectedBatch.semesters.length > 0 ? (
                    selectedBatch.semesters.map((result, idx) => (
                        <div key={idx} className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
                            
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-900 group-hover:text-yellow-400 transition-colors">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-800 group-hover:text-blue-900 transition-colors">
                                        {result.name}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar size={14} />
                                        <span>Announced: {result.date}</span>
                                    </div>
                                </div>
                            </div>

                            <a 
                                href={result.pdf} 
                                target="_blank" 
                                // download // Agar chahte ho direct download ho to ye uncomment karo
                                className="w-full sm:w-auto px-6 py-3 bg-white text-blue-900 border-2 border-blue-900 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-900 hover:text-white transition-all shadow-sm hover:shadow-lg"
                            >
                                <Download size={18} /> View Result
                            </a>

                        </div>
                    ))
                ) : (
                    <div className="text-center py-10 bg-white rounded-xl border border-dashed border-gray-300 text-gray-500">
                        No results uploaded for this session yet.
                    </div>
                )}
             </div>
          </div>

        </div>
      </Section>
    </div>
  );
}// Fixed file name