import React from "react";
import { Meteors } from "@/components/magicui/meteors";
import { Button } from "@/components/ui/button";

function CallToAction() {
  return (
    <section className="relative py-20 bg-primary text-primary-foreground m-8 rounded-3xl">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center rounded-3xl overflow-hidden">
        <Meteors number={60} />
      </div>

      <div className="relative container mx-auto p-4 text-center">
        <h1 className="text-3xl md:text-4xl mb-10 font-medium tracking-tight">
          Ready to get started?
        </h1>
        <p className="text-sm md:text-lg text-[#9c9ea7] font-medium tracking-tight mx-auto max-w-2xl">
          Start creating stunning videos with Deep Frame right away!
        </p>
        <div className="flex items-center justify-center mt-10">
          <Button className="bg-white text-black shadow-lg hover:bg-black hover:text-white text-sm md:text-lg p-6 rounded-xl tracking-tight">
            Get started for free
          </Button>
        </div>
        <div className="mt-20 border-b border-dashed border-[#454545] "></div>
        <p className="mt-5 text-gray-300">
          Thank you for checking out this app!
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-around p-5">
        <p className="text-sm text-gray-300">
          © 2025 Deep Frame. All rights reserved.
        </p>
        <span className="text-lg md:text-2xl hover:border-b border-white">
          Deep Frame
        </span>
      </div>
    </section>
  );
}

export default CallToAction;
