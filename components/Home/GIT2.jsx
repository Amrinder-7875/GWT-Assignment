import Image from "next/image"
import Img from "@/components/assets/image.png"
import { useRouter } from "next/navigation";

export default function GIT2() { 
    const router= useRouter();
    return (
       <div className="flex bg-[var(--olivebg)] justify-center w-full"> 
       <div className="text-gray-800 flex items-center justify-center flex-col py-30 sm:py-16 md:py-20 lg:py-54 2xl:py-32 px-10 sm:px-6 md:px-8 lg:px-12 2xl:px-16 max-w-6xl">
       <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-center py-8 sm:py-12 md:py-16 lg:py-8 2xl:py-24 drop-shadow-lg">Ready to begin?</h1>
<p className="text-center max-w-3xl text-md sm:text-sm md:text-base lg:text-lg 2xl:text-xl leading-relaxed">Therapy is a space to slow down, feel supported, and explore what's been weighing on you. Reach out to schedule a consultation and take the next step at your own pace</p>
<button onClick={() => router.push("/Contact")} className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 2xl:mt-16 px-8 sm:px-10 md:px-12 lg:px-10 2xl:px-16 py-3 sm:py-4 md:py-5 lg:py-3 2xl:py-8 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-light  border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-neutral-200  transition drop-shadow-lg">Get In Touch →</button>
</div>
    </div>)
}