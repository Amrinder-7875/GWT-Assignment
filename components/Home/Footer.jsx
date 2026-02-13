export default function Footer() {
    return(
        <div className="bg-[var(--background2)] p-2 text-gray-800  sm:pt-12 md:pt-8 lg:pt-9 2xl:pt-12  text-center px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="text-[0.7rem]  font-[0.4rem] text-[var(--text-color)] tracking-[0.02rem] sm:text-sm md:text-sm  lg:text-lg 2xl:text-2xl  max-w-6xl mx-auto">
          <ul className="flex flex-wrap justify-center px-10 gap-2 sm:gap-4 md:gap-3 lg:gap-4 items-center mb-3  sm:mb-4 md:mb-4 lg:mb-5 2xl:mb-6 text-gray-800 underline underline-offset-4"> 
            <li>Privacy & Cookies Policy</li>
            <li>Good Faith Estimate</li>
            <li>Website Terms & Conditions</li>
            <li>Disclaimer</li>
            </ul>
            <p className="my-2 sm:mb-5 md:mb-5 lg:mb-10 2xl:mb-8 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl">Website Credit:<span className="text-gray-600 underline"> <a href=" https://www.linkedin.com/in/amrinder-singh-345b2a324/">Amrinder-7875</a></span></p>
            <p className=" sm:m-2 md:m-3 lg:m-2 2xl:m-5 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl">All rights reserved. &copy; 2024 Dr.Maya therapist </p>
        </div> 
       </div>  
    )
}