import React, { useState } from 'react';
import {useRouter} from "next/navigation";
import office1 from "@/components/assets/office1.jpeg"
import office2 from "@/components/assets/office2.jpeg"
import Image from "next/image"
const LilacOurWork = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
const router=useRouter();
  const projects = [
    {
      id: 1,
      title: "Mindful Healing",
      category: "Therapy Session",
      image: {office1},
      description: "One-on-one therapy sessions focused on understanding your experiences with anxiety, stress, and emotional overwhelm. Sessions are gentle, collaborative, and grounded in helping you feel more present and supported in daily life."
    },
    {
      id: 2,
      title: "Sacred Spaces",
      category: "Wellness Design",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80",
      description: "The therapy space is intentionally designed to feel calm, private, and welcoming. From soft lighting to natural elements, every detail supports comfort, reflection, and emotional safety during your sessions."
    },
    {
      id: 3,
      title: "Morning Rituals",
      category: "Daily Practice",
      image: "https://www.mindtales.me/wp-content/uploads/2023/08/Introduction-to-a-Morning-Routine_-Energize-Your-Day-with-Purpose-and-Productivity.png",
      description: "Simple practices for intentional living"
    },
  
    
  ];

  return (
    <div id="OurOffice" className="min-h-screen bg-gray-300">
      

      <section className="px-8 py-20 md:py-28">
        <div className="max-w-7xl  p-10 mx-auto">
          
          {/* Section Header */}
          <div className="mb-20 animate-fadeIn">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-[#2D4A2E] mb-6">
              Our Office
            </h2>
            <p className="font-display text-lg md:text-xl text-[#2C2C2C] font-light max-w-2xl leading-relaxed">
              Explore the transformative experiences and healing spaces we've created for our community.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 text-gray-300  gap-6 md:gap-8 lg:gap-10 2xl:gap-12">
         <div className="border w-auto drop-shadow-lg h-auto border-[#2f3b1f] text-[#2f3b1f] p-8 flex flex-col">
                     <h3 className="mb-4 text-3xl font-medium ">
                    Space That Feels Safe 
                     </h3>
         
                     <p className="mb-10 text-md ">
                      A private office in Santa Monica designed to help you feel at ease.
                       The office is designed to feel calm, comfortable, and welcoming. With natural light and a simple, uncluttered setting, it’s a space where you can slow down, breathe, and focus on yourself.
                     </p>
         
                     <div className="mt-auto flex justify-center">
                       <div className="h-64 w-64 rounded-full bg-neutral-300" >
                       <Image
                       className="h-64 w-64 rounded-full"
                       src={office1}
                       alt="p1"></Image></div>
                     </div>
                   </div>
                   <div className="border w-auto drop-shadow-lg h-auto border-[#2f3b1f] text-[#2f3b1f] p-8 flex flex-col">
                               <h3 className="mb-4 text-3xl font-medium ">
                              Space to Begin
                               </h3>
                   
                               <p className="mb-10 text-md ">
                                 Dr. Maya Reynolds’ office is a quiet, welcoming space created with comfort and privacy in mind. Filled with natural light and a simple, uncluttered design, the environment is intentionally calming—allowing you to slow down, settle in, and focus on your therapy session without distraction.
                               </p>
                   
                               <div className="mt-auto flex justify-center">
                                 <div className="h-64 w-64 rounded-full bg-neutral-300" >
                                 <Image
                                 className="h-64 w-64 rounded-full"
                                 src={office2}
                                 alt="p1"></Image></div>
                               </div>
                             </div>
</div>
        
               

          {/* CTA Section */}
          <div className="mt-20 text-center animate-fadeIn delay-600">
            <div className="space-y-6">
              <p className="font-display text-lg text-[#2C2C2C] font-light">
                Ready to begin your own journey?
              </p>
              <a
                href="#contact"
                onClick={()=> router.push("/Contact")}
                className="inline-block bg-[#2f3b1f] text-white font-display text-base font-medium px-12 py-4 rounded-sm hover:bg-[#1E3A1F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Decorative Transition */}
      <div className="h-24 bg-gradient-to-b from-[#FAF7F2] to-[#8C9A7E]"></div>
    </div>
  );
};

export default LilacOurWork;