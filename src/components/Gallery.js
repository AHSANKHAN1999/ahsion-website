"use client";

export default function Gallery() {
  // 1 se 35 tak images ka link generate kar rahe hain
  const allImages = Array.from({ length: 35 }, (_, i) => `/images/gallery/${i + 1}.jpg`);

  // Images ko 2 Hisson mein baant diya (Adhi upar, Adhi neechay)
  const row1 = allImages.slice(0, 18);   // Pehli line (1-18)
  const row2 = allImages.slice(18, 35);  // Dusri line (19-35)

  return (
    <section className="bg-white py-12 overflow-hidden border-t border-b border-gray-100 flex flex-col gap-8">
      
      {/* Title */}
      <div className="text-center mb-2">
        <span className="text-blue-900 font-bold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          Campus Life
        </span>
        <h2 className="text-3xl font-extrabold text-blue-900 mt-3">
            Life at <span className="text-yellow-500">AHSION</span>
        </h2>
      </div>

      {/* === ROW 1: Right to Left (⏩) === */}
      <div className="relative w-full rotate-1 hover:rotate-0 transition-transform duration-500"> 
        <div className="flex w-max animate-scroll-left hover:pause">
          {/* Original + Duplicate (Loop ke liye) */}
          {[...row1, ...row1].map((src, index) => (
            <div key={`row1-${index}`} className="relative h-40 w-64 mx-3 flex-shrink-0 rounded-lg overflow-hidden shadow-md cursor-pointer border-4 border-white hover:border-yellow-400 transition-colors">
              <img
                src={src}
                alt="Gallery"
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* === ROW 2: Left to Right (⏪) === */}
      <div className="relative w-full -rotate-1 hover:rotate-0 transition-transform duration-500"> 
        <div className="flex w-max animate-scroll-right hover:pause">
          {/* Original + Duplicate (Loop ke liye) */}
          {[...row2, ...row2].map((src, index) => (
            <div key={`row2-${index}`} className="relative h-40 w-64 mx-3 flex-shrink-0 rounded-lg overflow-hidden shadow-md cursor-pointer border-4 border-white hover:border-blue-900 transition-colors">
              <img
                src={src}
                alt="Gallery"
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- ANIMATION CSS --- */}
      <style jsx>{`
        /* Right to Left Animation */
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* Left to Right Animation */
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          display: flex;
          animation: scrollLeft 50s linear infinite; /* Speed adjust karein (50s slower, 30s faster) */
        }
        
        .animate-scroll-right {
          display: flex;
          animation: scrollRight 50s linear infinite;
        }

        /* Mouse upar layen to ruk jaye */
        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}