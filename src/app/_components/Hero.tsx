import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 flex items-end justify-center">
        <div className="w-[1000px] h-[300px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-50 blur-3xl"></div>
      </div>
      <div className="container mx-auto p-4 text-center flex flex-col items-center justify-center">
        <TextAnimate
          className="text-5xl sm:text-6xl font-bold tracking-tight"
          animation="blurInUp"
          by="word"
        >
          Transform Your Vision Into Reality
        </TextAnimate>
        <TextAnimate
          className="font-medium mt-7 md:text-lg text-md text-[#73757B]/80 max-w-2xl mx-auto tracking-tight"
          animation="blurInUp"
          by="line"
        >
          Create stunning videos with your imagination. Deep Frame helps you
          generate videos with your own customization and style, in just a few
          clicks.
        </TextAnimate>
        <Link href="/sign-in">
          <ShimmerButton
            className="mt-10 md:mt-16 text-center text-sm font-medium tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg animate-in"
            borderRadius="20px"
          >
            Get started for free
          </ShimmerButton>
        </Link>
        <div className="mt-16">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2064"
            alt="Dashboard Preview"
            width={680}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
