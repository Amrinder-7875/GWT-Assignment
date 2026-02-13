import Image from "next/image";
import maya3 from "@/components/assets/maya3.png"
import logo from "@/components/assets/therapyLogo.png"
import { useRouter } from "next/navigation";
// import ArchImg from "@/components/assets/arch.jpg";
// import CircleImg from "@/components/assets/circle.jpg";
export default function LetChat() {
 const router = useRouter();
  return (
    <div className="bg-[#2f3b1f]  grid grid-cols-1 bg- lg:grid-cols-2 min-h-screen lg:min-h-auto">
      {/*Content*/}
      <div className="order-2 lg:order-1 flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-lg lg:max-w-2xl w-full">
          <h1 className="text-4xl text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-left p-2 tracking-tight  drop-shadow-lg text-neutral-900 leading-tight">
        Hi, I'm Dr. Maya Reynolds
          
          </h1>

          <p className="block text-white text-lg sm:text-sm md:text-base lg:text-lg p-2">
        I'm a licensed clinical psychologist based in Santa Monica, California, working with adults who struggle with anxiety, trauma, and burnout. Many of the people I support are thoughtful, high-achieving, and outwardly capable yet internally feeling overwhelmed, tense, or emotionally exhausted.
          </p>
          <p className="block text-lg text-white sm:text-sm md:text-base lg:text-lg p-2">
        My approach to therapy is warm, collaborative, and grounded. I draw from evidence-based practices such as CBT, EMDR, mindfulness, and body-oriented techniques, always pacing the work carefully and prioritizing emotional safety. Therapy isn't about pushing through's about creating space to slow down, understand what's happening beneath the surface, and build steadier ways of coping.
          </p>
          <div className="flex justify-center">
             <button onClick={() => router.push("/Contact")}  className="mt-9 mb-4 sm:mt-8 lg:mt-10 inline-flex items-center  border border-white px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 lg:py-5 text-lg sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-normal text-white hover:bg-neutral-900  drop-shadow-lg hover:text-white transition">
              Let's Chat →
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}

      <div className="order-1 lg:order-2  drop-shadow-lg relative flex justify-center items-center pt-15 sm:py-10 md:py-20 px-30 sm:px-6 md:px-8">
        {/* ARCH IMAGE */}
        <div
          className="relative border-2 object-cover bg-gray-500 rounded-t-full"
          style={{
            width: "clamp(200px, 80vw, 380px)",
            height: "clamp(280px, 70vw, 600px)",
          }}
        >
          <Image
              src={maya3}
              alt="Therapy visual"
              fill
              className=" rounded-t-full "
              priority
            />
          <div
            className="absolute -bottom-1 sm:-bottom-10 md:-bottom-12 -right-18 sm:-right-10 md:-right-16 bg-gray-300 0 drop-shadow-lg rounded-full overflow-hidden "
            style={{
              width: "clamp(120px, 40vw, 220px)",
              height: "clamp(120px, 40vw, 220px)",
            }}
          >
 <Image
              src={logo}
              alt="Detail flower"
              fill
              className="object-cover p-10"
            />
          </div>
        </div>

        {/* CIRCLE IMAGE */}

   
      </div>
    </div>
  );
}