import Image from "next/image";

export default function Gallery() {
  // Ye 1 line ka code khud hi 1 se 35 tak images bana lega
  // Path: /images/gallery/1.jpg se lekar 35.jpg tak
  const images = Array.from({ length: 35 }, (_, i) => `/images/gallery/${i + 1}.jpg`);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <span className="text-blue-900 font-bold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Gallery
          </span>
          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Life at <span className="text-yellow-500">AHSION</span>
          </h2>
          <p className="text-gray-500 mt-2">Moments from our campus activities and events.</p>
        </div>

        {/* --- IMAGE GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative group h-64 w-full overflow-hidden rounded-xl bg-gray-100 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Blue Overlay Effect */}
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}