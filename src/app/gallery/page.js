"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function GalleryPage() {
  // Ab yahan 146 images hain
  const allImages = Array.from({ length: 146 }, (_, i) => `/images/gallery/${i + 1}.jpg`);

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* --- PAGE HEADER --- */}
      <div className="bg-blue-900 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            Campus Gallery
            </h1>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-lg">
            Explore the vibrant life at <span className="text-yellow-400 font-bold">AHSION</span>.
            </p>
        </div>
      </div>

      {/* --- MAIN GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allImages.map((src, index) => (
            <div 
                key={index} 
                className="group relative h-64 w-full overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <Image
                src={src}
                alt={`AHSION Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                // Agar koi image missing ho to box chup jaye
                onError={(e) => e.target.parentElement.style.display = 'none'}
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-yellow-400 text-blue-900 p-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                 </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}