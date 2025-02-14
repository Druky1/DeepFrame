import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto p-4 text-center">
        <div className="text-sm text-center mb-10 gap-2 flex items-center justify-center text-[#6C6E74]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            style={{
              userSelect: "none",
              width: "20px",
              height: "20px",
              display: "inline-block",
              fill: "rgb(108, 110, 116)", // Set a default fallback color
              color: "rgb(108, 110, 116)",
              flexShrink: 0,
            }}
          >
            <g color="rgb(108, 110, 116)">
              <path d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z"></path>
            </g>
          </svg>
          FEATURES
        </div>
        <h1 className="text-3xl md:text-4xl mb-10 font-medium tracking-tight inline-block">
          <AuroraText className="leading-loose font-bold">
            Just Imagine.
          </AuroraText>{" "}
          Deep Frame helps you bring it to life.
        </h1>
        <p className="text-md md:text-lg text-[#6C6E74] font-medium tracking-tight">
          Explore the features that work to bring your art to life
        </p>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto py-20">
          <Card className="bg-card h-[250px] flex flex-col items-center justify-center border-2 border-primary/10 shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center mb-7">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground tracking-tight">
                Experience blazing-fast performance with our AI-powered video
                generation.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card h-[250px] flex flex-col items-center justify-center border-2 border-primary/10 shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center mb-7">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground tracking-tight">
                Experience blazing-fast performance with our AI-powered video
                generation.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card h-[250px] flex flex-col items-center justify-center border-2 border-primary/10 shadow-lg">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center mb-7">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground tracking-tight">
                Experience blazing-fast performance with our AI-powered video
                generation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Features;
