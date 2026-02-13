import Image from "next/image";
import Img from "@/components/assets/office1.jpeg";
import { useRouter } from "next/navigation";
import { UserRound } from "lucide-react";
export default function GIT() {
const router = useRouter(); 
  return (
    <section className="w-full bg-[#b4b5c4]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-auto lg:min-h-[80vh]">

        {/* LEFT CONTENT */}
       {/* LEFT CONTENT */}
<div className="order-2 lg:order-1 flex items-center justify-center sm:p-6  2xl:pr-16">
          <div className="flex flex-col w-full max-w-xl lg:max-w-2xl">

            {/* TEXT BLOCK */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 py-8 sm:py-12 md:py-16 lg:py-20 2xl:py-24 px-4 sm:px-6 md:px-10 lg:px-12 2xl:px-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium tracking-tight text-[#2f3b1f]">
               A calmer way through anxiety and burnout
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-[#2f3b1f]/80 leading-relaxed">
                Life can feel overwhelming when anxiety, stress, or constant pressure become part of your daily routine. Many people I work with appear capable and successful on the outside, while internally feeling tense, exhausted, or stuck in overthinking.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-[#2f3b1f]/80 leading-relaxed">
                Therapy can be a place to slow down, understand what's happening beneath the surface, and develop steadier ways of coping both emotionally and physically. My approach is collaborative, grounded, and paced carefully to support lasting change without feeling rushed or overwhelming.
              </p>
            </div>

            {/* BUTTON AT BOTTOM */}
          
            <button onClick={() => router.push("/Contact")} className=" p-5 border-t-2  border-black flex justify-center items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-medium text-[#2f3b1f] hover:bg-black hover:text-white transition">
              Schedule a consultation →
            </button>
            
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-auto">
          <Image
            src={Img}
            alt="Lifestyle flatlay"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}