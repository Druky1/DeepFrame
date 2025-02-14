import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Questions() {
  return (
    <section className="py-20">
      <div className="container mx-auto p-4 text-center">
        <div className="text-sm text-center mb-10 gap-2 flex items-center justify-center text-[#6C6E74]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-[20px] h-[20px] inline-block fill-gray-500 flex-shrink-0"
          >
            <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
          </svg>
          FAQ
        </div>
        <h1 className="text-3xl md:text-4xl mb-10 font-medium tracking-tight inline-block">
          Your questions, answered
        </h1>
        <p className="text-md md:text-lg text-[#6C6E74] font-medium tracking-tight mx-auto max-w-2xl">
          Get detailed answers to the most common questions about our AI-Video
          Platform, so you can make the most of its powerful features.
        </p>
      </div>
      <Accordion type="single" collapsible className="mx-auto max-w-2xl mt-16">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default Questions;
