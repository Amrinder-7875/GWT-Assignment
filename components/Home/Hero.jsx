"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import pfp from "@/components/assets/maya.png"
import { useRouter } from "next/navigation";
export default function Hero() {
    const router = useRouter();
  return (

    <div  className=" grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left image */}
      <div className="flex items-center justify-center drop-shadow-lg px-4 sm:px-8 md:px-22 lg:px-16 py-12 md:py-30">
        <div className="relative w-full  my-10 max-w-md lg:max-w-lg xl:max-w-xl aspect-[3/4] rounded-t-full overflow-hidden ">
          {/* Replace with your actual image */}
          <Image
            src={pfp} // Update this path to your image
            alt="Person holding lilac flowers"
            fill
            className="object-cover  "
            
            priority
          />
        </div>
      </div>

      {/* Right content */}
      <div className="flex items-center justify-center px-6  sm:px-8 md:px-12 lg:px-16 py-12 lg:py-0">
        <div className="space-y-6 sm:space-y-8 max-w-xl w-full text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-normal tracking-tight text-[#2D3319] leading-[1]">
            Calmer Way <span className="lg:font-light"> through</span><br/>
            Anxiety  <span className="lg:font-light">&</span> Stress
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#2D3319] font-light">
space to slow down with therapy in Santa Monica, CA.
          </p>

          <div className="pt-4">
            <button onClick={() => router.push("/Contact")}

            className="inline-flex drop-shadow-lg items-center gap-2 border-2 border-[#2D3319] px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-[#2D3319] hover:bg-[#2D3319] hover:text-white transition-colors duration-300 uppercase tracking-wider">
             Get Started 
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}