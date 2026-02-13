import Image from "next/image";
import p1 from "@/components/assets/trauma.png"
import p2 from "@/components/assets/anxcity.jpg"
import p3 from "@/components/assets/support.png"

export default function mySpecialist() {

  return (
    <section className="bg-[#ccd1cb] py-12  sm:py-16 md:py-20 lg:py-28 2xl:py-32">
      <div className="mx-auto max-w-7xl px-4 drop-shadow-lg sm:px-6 md:px-8 lg:px-12">
        
        {/* Heading */}
        <h2 className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium tracking-tight text-[#2f3b1f]">
          My Specialties
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-gray-300 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 2xl:gap-12">
          
          {/* Card 1 */}
          <div className="border w-auto drop-shadow-lg h-auto border-[#2f3b1f] bg-[#2f3b1f] p-8 flex flex-col">
            <h3 className="mb-4 text-lg font-medium ">
           Trauma & EMDR
            </h3>

            <p className="mb-10 text-sm ">
              I support adults processing both single-incident trauma and more complex, long-standing experiences that continue to affect their sense of safety, confidence, or relationships. Trauma work is paced carefully, with an emphasis on stabilization, regulation, and safety. EMDR and body-oriented techniques are integrated when appropriate
            </p>

            <div className="mt-auto flex justify-center">
              <div className="h-64 w-64 rounded-full bg-neutral-300" >
              <Image
              className="h-64 w-64 rounded-full"
              src={p1}
              alt="p1"></Image></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border w-auto drop-shadow-lg h-140border-[#2f3b1f] bg-[#2f3b1f] p-8 flex flex-col">
            <h3 className="mb-4 text-lg font-medium ">
          Anxiety & Panic
            </h3>

            <p className="mb-10 text-sm ">
             Anxiety can show up as constant worry, physical tension, difficulty sleeping, or a sense that youâ€™re always bracing for something to go wrong. I work with adults who feel â€œfunctionalâ€ on the outside while feeling overwhelmed or on edge internally. Therapy focuses on understanding both the emotional and physical patterns driving anxiety, and building steadier ways of coping.
            </p>

            <div className="mt-auto flex justify-center">
               <div className="h-64 w-64 rounded-full " >
              <Image
              className="h-64 w-64 rounded-full"
              src={p2}
              alt="p2"></Image></div>
       
            </div>
          </div>

          <div className="border w-auto drop-shadow-lg border-[#2f3b1f] bg-[#2f3b1f] p-8 flex flex-col">
            <h3 className="mb-4 text-lg font-medium ">
              Burnout & Perfectionism
            </h3>

            <p className="mb-10 text-sm ">
              Many professionals, creatives, and high-achieving adults come to therapy feeling exhausted, disconnected, or emotionally worn down after years of pushing through stress. Therapy can become a space to slow down, reconnect with yourself, and develop more sustainable ways of living and working.
            </p>

            <div className="mt-auto flex justify-center">
              <div className="h-64 w-64 rounded-full bg-neutral-300" >
              <Image
              className="h-64 w-64 rounded-full"
              src={p3}
              alt="p3"></Image></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}