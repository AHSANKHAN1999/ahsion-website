"use client";

export default function Gallery() {
  // 1 se 146 tak images
  const allImages = Array.from({ length: 146 }, (_, i) => `/images/gallery/${i + 1}.jpg`);

  // Images ko 2 Hisson mein baant diya
  const half = Math.ceil(allImages.length / 2);
  const row1 = allImages.slice(0, half);
  const row2 = allImages.slice(half, allImages.length);

  return (
    <section className="bg-white py-12 overflow-hidden border-t border-b border-gray-100 flex flex-col gap-10">
      
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
      <div className="relative w-full"> 
        <div className="flex w-max animate-scroll-left hover:pause">
          {[...row1, ...row1].map((src, index) => (
            <div key={`row1-${index}`} className="relative h-48 w-72 mx-3 flex-shrink-0 rounded-lg overflow-hidden shadow-md cursor-pointer border-4 border-white hover:border-yellow-400 transition-all bg-white">
              <img
                src={src}
                alt="Gallery"
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => e.target.parentElement.style.display = 'none'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* === ROW 2: Left to Right (⏪) === */}
      <div className="relative w-full"> 
        <div className="flex w-max animate-scroll-right hover:pause">
          {[...row2, ...row2].map((src, index) => (
            <div key={`row2-${index}`} className="relative h-48 w-72 mx-3 flex-shrink-0 rounded-lg overflow-hidden shadow-md cursor-pointer border-4 border-white hover:border-blue-900 transition-all bg-white">
              <img
                src={src}
                alt="Gallery"
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => e.target.parentElement.style.display = 'none'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- ANIMATION CSS --- */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* SPEED SETTING: 400s kar diya hai (bohot slow aur sukoon wala) */
        .animate-scroll-left {
          display: flex;
          animation: scrollLeft 400s linear infinite;
        }
        
        .animate-scroll-right {
          display: flex;
          animation: scrollRight 400s linear infinite;
        }

        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}