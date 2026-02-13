import React from 'react';
import pfp from "@/components/assets/maya.png"
import Image from "next/image"
const LilacBlogHero = () => {
  return (
    <div className="min-h-screen bg-[var(--greenbg)]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .font-display {
          font-family: 'Outfit', sans-serif;
        }

        .arch-shape {
          border-radius: 50% 50% 0 0 / 40% 40% 0 0;
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
      `}</style>

      {/* Header Navigation */}
     

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Arched Image */}

            <div className="flex items-center justify-center drop-shadow-lg px-6 sm:px-8 md:px-22 lg:px-16 py-12 md:py-30">
                    <div className="relative w-full   max-w-md lg:max-w-lg xl:max-w-xl aspect-[3/4] rounded-t-full overflow-hidden bg-gradient-to-b from-blue-100 to-blue-50">
                      {/* Replace with your actual image */}
                      <Image
                        src={pfp} // Update this path to your image
                        alt="Person holding lilac flowers"
                        fill
                        className="object-cover "
                        
                        priority
                      />
                    </div>
                  </div>
            {/* Right Side - Text Content */}
            <div className="flex flex-col justify-center space-y-8 animate-fadeIn delay-200">
              <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl font-semibold text-[#1E3A1F] leading-[0.95] tracking-tight">
                Thoughts from my work
              </h2>
              
              <div className="space-y-6 text-lg sm:text-xl text-[#2C2C2C] font-display font-light leading-relaxed">
                <p>
                 Reflections on mental health, therapy, and the small but meaningful steps toward emotional wellbeing.
                </p>
                
                <p className="font-medium text-[#2C2C2C]">
                  Glad you're here.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Optional: Scroll indicator */}
      <div className="flex justify-center pb-12 animate-fadeIn delay-300">
        <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity cursor-pointer">
          <span className="font-display text-sm uppercase tracking-widest text-[#2C2C2C]">Scroll</span>
          <svg 
            className="w-5 h-8 animate-bounce" 
            fill="none" 
            stroke="#2C2C2C" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LilacBlogHero;