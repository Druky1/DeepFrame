import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";
import GetStartedButton from "../_components/GetStartedButton"

function Pricing() {
  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto p-4 text-center">
        <div className="text-sm text-center mb-10 gap-2 flex items-center justify-center text-[#6C6E74]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            className="w-[20px] h-[20px] inline-block fill-gray-500 text-gray-500 flex-shrink-0"
          >
            <path d="M198.51,56.09C186.44,35.4,169.92,24,152,24H104C86.08,24,69.56,35.4,57.49,56.09,46.21,75.42,40,101,40,128s6.21,52.58,17.49,71.91C69.56,220.6,86.08,232,104,232h48c17.92,0,34.44-11.4,46.51-32.09C209.79,180.58,216,155,216,128S209.79,75.42,198.51,56.09ZM199.79,120h-32a152.78,152.78,0,0,0-9.68-48H188.7C194.82,85.38,198.86,102,199.79,120Zm-20.6-64H150.46a83.13,83.13,0,0,0-12-16H152C162,40,171.4,46,179.19,56ZM56,128c0-47.7,22-88,48-88s48,40.3,48,88-22,88-48,88S56,175.7,56,128Zm96,88H138.49a83.13,83.13,0,0,0,12-16h28.73C171.4,210,162,216,152,216Zm36.7-32H158.12a152.78,152.78,0,0,0,9.68-48h32C198.86,154,194.82,170.62,188.7,184Z"></path>
          </svg>
          PRICING
        </div>
        <h1 className="text-3xl md:text-4xl mb-10 font-medium tracking-tight inline-block">
          Plans for your every need
        </h1>
        <p className="text-md md:text-lg text-[#6C6E74] font-medium tracking-tight mx-auto max-w-2xl">
          Whether you’re just starting out or scaling up, we’ve got a pricing
          plan that’s right for you. Explore our options and find your perfect
          fit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto py-20">
          {/* Free Plan */}
          <Card className="bg-card h-auto flex flex-col items-center justify-center border-2 border-primary/10 shadow-lg p-6">
            <div className="w-full flex flex-col items-start">
              <h1 className="text-lg font-medium tracking-tight">Free</h1>
              <h3 className="text-3xl font-light italic mt-3">$0</h3>
            </div>
            <div className="w-full mt-8 flex justify-center items-center">
              <GetStartedButton />
            </div>
            <div className="w-full border-b border-gray-300 border-dashed my-6"></div>
            <div className="w-full flex flex-col space-y-4 py-1">
              <div className="flex items-center space-x-2 text-black">
                <CheckCircle className="w-4 h-4 text-gray-400" />
                <span className="text-sm">Imagine and prompt</span>
              </div>
              <div className="flex items-center space-x-2 text-black">
                <CheckCircle className="w-4 h-4 text-gray-400" />
                <span className="text-sm">Upto 3 videos per day</span>
              </div>
            </div>
          </Card>

          {/* Pro Annual Plan */}
          <Card className="bg-card h-auto flex flex-col items-center justify-center border-2 border-primary/10 shadow-lg p-6 bg-black text-white">
            <div className="w-full flex flex-col items-start">
              <h1 className="text-lg font-medium tracking-tight">
                Pro - Annually (SAVE 60% ✨)
              </h1>
              <div className="text-3xl font-light italic mt-3">
                $12
                <span className="text-sm font-medium tracking-tight text-gray-300">
                  / month, billed annually
                </span>
              </div>
            </div>
            <div className="w-full mt-8 flex justify-center items-center">
              <GetStartedButton />
            </div>
            <div className="w-full border-b border-gray-500 border-dashed my-6"></div>
            <div className="w-full flex flex-col space-y-4 py-1">
              <div className="flex items-center space-x-2 text-white">
                <CheckCircle className="w-4 h-4 text-gray-200" />
                <span className="text-sm">Additional Credits</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <CheckCircle className="w-4 h-4 text-gray-200" />
                <span className="text-sm">More videos every day</span>
              </div>
            </div>
          </Card>

          {/* Pro Monthly Plan */}
          <Card className="bg-card h-auto flex flex-col items-center justify-center border-2 border-primary/10 shadow-lg p-6">
            <div className="w-full flex flex-col items-start">
              <h1 className="text-lg font-medium tracking-tight">Pro - Monthly</h1>
              <div className="text-3xl font-light italic mt-3">
                $30
                <span className="text-sm font-medium tracking-tight text-gray-600">
                  / month
                </span>
              </div>
            </div>
            <div className="w-full mt-8 flex justify-center items-center">
              <GetStartedButton />
            </div>
            <div className="w-full border-b border-gray-300 border-dashed my-6"></div>
            <div className="w-full flex flex-col space-y-4 py-1">
              <div className="flex items-center space-x-2 text-black">
                <CheckCircle className="w-4 h-4 text-gray-400" />
                <span className="text-sm">Additional Credits</span>
              </div>
              <div className="flex items-center space-x-2 text-black">
                <CheckCircle className="w-4 h-4 text-gray-400" />
                <span className="text-sm">More videos every day</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
