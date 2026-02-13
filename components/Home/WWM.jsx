import Image from "next/image"
import Img from "@/components/assets/office2.jpeg"
import { useRouter } from "next/navigation"

export default function WWM() {
  const router =useRouter();
  return (
    
      
    <div>
      <div className="flex flex-col">
        {/* Image Section - 60% height */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[60vh]">
          <Image 
            src={Img} 
            alt="Person in contemplation" 
            fill
            className="object-cover"
            priority
          />
        </div>



        <div className="flex-1 flex  bg-[#465e66] text-gray-300 flex-col justify-between px-8 sm:px-12 md:px-16 lg:px-20 py-12 lg:py-16">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-normal  leading-tight">
              You don't have to do<br />this all <em className="italic">alone.</em>
            </h2>
            
            <p className="text-sm sm:text-base  leading-relaxed">
              If you're experiencing any of the following, support is available:
            </p>

            <ul className="space-y-3 text-sm sm:text-base ">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-fgray-300 flex-shrink-0" />
                <span>Ongoing anxiety or a sense of constant internal pressure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                <span>Feeling emotionally exhausted, burnt out, or overwhelmed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                <span>Difficulty slowing down or quieting your thoughts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                <span>Trouble feeling present in relationships or daily life</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                <span>A sense that you're holding it together on the outside, while struggling internally</span>
              </li>
            </ul>

            <p className="text-sm sm:text-base  leading-relaxed pt-4">
              With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </p>

            <div className="h-[1px] w-full bg-gray-300 mt-8" />
          </div>

          <button  onClick={()=> router.push("/Contact")}className="mt-8 py-4 text-sm sm:text-base font-normal text-gray-300 hover:opacity-70 transition text-left">
            Schedule a consultation →
          </button>
        </div>
</div>
    </div>  
  )
}