"use client";
import Image from "next/image";
import { useState } from "react";
import faq from "@/components/assets/faq.png"

export default function Faq() {
  const [open, setOpen] = useState(null);
  const sections = [
    {
      id: "do you take insurance",
      title: "Do you take insurance?",
      content:
        "I am an out-of-network provider and do not accept insurance directly. However, many clients choose to use out-of-network benefits, and I'm happy to provide a superbill that you can submit to your insurance company for potential reimbursement.",
    },
    {
      id: "what are your rates",
      title: "What are your rates?",
      content:
        "Session fees vary depending on the type and length of therapy. I'm happy to discuss current rates and answer any questions during a consultation, so you can decide whether working together feels like a good fit.",
    },
    {
      id: "do you have any openings",
      title: "Do you have any openings?",
      content:
        "Availability can change, and I occasionally have openings for new clients. The best way to find out is to reach out directly to schedule a brief consultation or ask about current availability.",
    },
  ];

  return (
    <div className="bg-[#d1d6d0] flex flex-col lg:grid lg:grid-cols-2 ">
      <div className="flex  items-center justify-center pt-19 lg-min-h-lg lg:py-32">
        {/* Left image - Arch */}
        <div
          className="bg-[#9fa9b8] rounded-t-full"
          style={{
            width: "200px",
            height: "260px",
          }}
        >
          <Image 
          src={faq}
          alt="faq"
          className=" rounded-t-full "
                        priority
                      />
        </div>
      </div>
      
      <div className="flex items-center justify-center px-6 lg:px-12 py-12 lg:py-32">
        <div className="w-auto max-w-md">
          {/* Header */}
          <div className="">
            <h1 className="text-4xl font-normal tracking-tight uppercase mb-4">
              FAQ<span className="text-2xl">s</span>
            </h1>
            <div className="h-[1px] w-full bg-[#2f3b1f]" />
          </div>

          {/* Accordion Items */}
          <div className=" ">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="border-b  border-[#2f3b1f] py-5"
              >
                <button
                  onClick={() => setOpen(open === section.id ? null : section.id)}
                  className="flex w-full items-start gap-4 text-left"
                >
                  <span className="text-6xl font-thin leading-none mt-0.5 text-[#2f3b1f]">
                    {open === section.id ? "-" : "+"}
                  </span>
                  <h2 className=" font-normal  text-3xl tracking-[0.04rem] flex-1">
                    {section.title}
                  </h2>
                </button>

                {open === section.id && section.content && (
                  <div className="ml-10 mt-4">
                    <p className="text-sm leading-relaxed text-[#2f3b1f]">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}