import React from 'react';

const social = () => {
  const socialImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80",
      alt: "Lilac flowers bouquet"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
      alt: "Person reading by bookshelf"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/48/15/77/481577e2dcc654b2d9fb4dd032d3f77e.jpg",
      alt: "Coffee and notebook flatlay"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&q=80",
      alt: "Lilac flowers in hands"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .font-display {
          font-family: 'Outfit', sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      

      {/* Decorative Banner */}
      <div className="h-16 bg-[#8C9A7E]"></div>

      {/* Social Gallery Section */}
      <section className="px-8 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <div className="mb-16 animate-fadeIn">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-[#2C2C2C]">
              Find me on social.
            </h2>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {socialImages.map((image, index) => (
              <a
                key={image.id}
                href="#"
                className={`group relative overflow-hidden bg-gray-200 aspect-square rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fadeIn delay-${(index + 1) * 100}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#2C2C2C]/0 group-hover:bg-[#2C2C2C]/10 transition-all duration-500"></div>
              </a>
            ))}
          </div>

          {/* Optional: Follow CTA */}
          <div className="mt-16 text-center animate-fadeIn delay-400">
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-base text-[#2C2C2C] hover:text-[#5C7A5E] transition-colors underline"
            >
              Follow on Instagram
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default social;