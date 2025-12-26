import Image from "next/image";

export default function Gallery() {
  // Yahan bas apni files ke naam likh dein (gallery1, gallery2 etc.)
  const images = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.jpg",
    "/images/gallery/9.jpg",
    "/images/gallery/10.jpg",
    "/images/gallery/11.jpg",
    "/images/gallery/12.jpg",
    "/images/gallery/13.jpg",
    "/images/gallery/14.jpg",
    "/images/gallery/15.jpg",
    "/images/gallery/16.jpg",
    "/images/gallery/17.jpg",
    "/images/gallery/18.jpg",
    "/images/gallery/19.jpg",
    "/images/gallery/20.jpg",
    "/images/gallery/21.jpg",
    "/images/gallery/22.jpg",
    "/images/gallery/23.jpg",
    "/images/gallery/24.jpg",
    "/images/gallery/25.jpg",
    "/images/gallery/26.jpg",
    "/images/gallery/27.jpg",
    "/images/gallery/28.jpg",
    "/images/gallery/29.jpg",
    "/images/gallery/30.jpg",
    "/images/gallery/31.jpg",
    "/images/gallery/32.jpg",
    "/images/gallery/33.jpg",
    "/images/gallery/34.jpg",
    "/images/gallery/35.jpg",

  ];

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
        </div>

        {/* --- SIMPLE IMAGE GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative group h-64 w-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Halki si Blue Shade on Hover (Optional - remove if not needed) */}
              <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}