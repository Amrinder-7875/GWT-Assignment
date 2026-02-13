import React from 'react';

const location = () => {
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
      `}</style>

    
      {/* Top spacing */}
      <div className="h-32 bg-[#FAF7F2]"></div>

      {/* Footer Section with Map */}
      <footer className="bg-[#8C9A7E]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          
          {/* Left Column - Office Information */}
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 lg:py-24">
            <div className="space-y-12 text-white animate-fadeIn">
              
              {/* Office Section */}
              <div className="space-y-4">
                <h2 className="font-display text-5xl md:text-6xl font-medium tracking-tight">
                 Quiet Mind Therapy
                </h2>
                
                <address className="font-display text-lg md:text-xl font-light not-italic leading-relaxed">
                  23th Street 45 W, Santa Monica, CA 90401
<br />
                  Santa Monica ,CA
                </address>
              </div>

              {/* Hours Section */}
              <div className="space-y-4">
                <h3 className="font-display text-5xl md:text-6xl font-medium tracking-tight">
                  Hours
                </h3>
                
                <div className="font-display text-lg md:text-xl font-light leading-relaxed">
                  <p>Monday – Friday</p>
                  <p>10am – 6pm</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative min-h-[400px] lg:min-h-full bg-gray-200 animate-fadeIn delay-100">
            {/* Google Maps Embed */}
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps/place/Santa+Monica,+CA,+USA/@34.0087862,-118.5445135,13z/data=!3m1!4b1!4m6!3m5!1s0x80c2a4cec2910019:0xb4170ab5ff23f5ab!8m2!3d34.0118828!4d-118.4915504!16zL20vMDZfa2g?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy"
             
              className="grayscale contrast-125 opacity-90"
            ></iframe>
        
          </div>

        </div>
      </footer>
    </div>
  );
};

export default location;