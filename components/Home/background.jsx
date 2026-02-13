"use client";
import { useState } from "react";

export default function Accordion() {
  const [open, setOpen] = useState("education");
  const sections = [
    {
      id: "education",
      title: "Education",
      content:
        "Dr. Maya Reynolds earned her Doctorate in Clinical Psychology (PsyD) with focused training in anxiety, trauma, and evidence-based therapeutic approaches. Her education emphasized both clinical rigor and a strong foundation in relational, client-centered care. ",
    },
    {
      id: "licensure",
      title: "Licensure",
      content: "Dr. Maya Reynolds is a licensed clinical psychologist in the state of California. She provides therapy to adults through in-person sessions in Santa Monica and via secure telehealth for clients located throughout California.",
    },
    {
      id: "certifications",
      title: "Certifications",
      content: "Cognitive Behavioral Therapy (CBT),Eye Movement Desensitization and Reprocessing (EMDR),	Mindfulness-based approaches,Body-oriented and nervous systemâ€“informed techniques",
    },
  ];

  return (
    <section className="bg-[#465e66] text-gray-300 py-42 sm:py-45 md:py-20 lg:py-29 2xl:py-42">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-50 2xl:px-76 ">
 <div className="flex justify-center items-center">
     <h1 className="py-8 sm:py-12 md:py-10 lg:py-6 text-center  font-normal text-3xl sm:text-xl md:text-2xl lg:text-3xl  ">My Professional <br />Background</h1></div>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`border-gray-300 py-3 sm:py-8 md:py-5 lg:py-5 ${
              index === 0 ? "border-t border-b" : "border-b"
            }`}
          >
            <button
              onClick={() =>
                setOpen(open === section.id ? null : section.id)
              }
              className="flex w-full items-center justify-between text-left"
            >
              <h2 className="text-xl sm:text-3xl md:text-3xl lg:text-2xl  2xl:text-4xl font-light">
                {section.title}
              </h2>
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl  2xl:text-5xl font-light">
                {open === section.id ? "-" : "+"}
              </span>
            </button>

            {open === section.id && section.content && (
              <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 2xl:mt-12 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl  2xl:text-2xl leading-relaxed">
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}