import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-7 bg-neutral-content backdrop-blur-sm sticky top-0 z-20 ">
      <div>
        <Link href="/">
          <span className="text-lg md:text-2xl hover:border-b border-black">
            Deep Frame
          </span>
        </Link>
      </div>
      <div className="hidden md:flex justify-between items-center gap-16">
        <div className="relative group after:content-[''] after:absolute after:w-full after:h-[1.5px] after:bg-black after:bottom-0 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
          <a href="#features" className="font-medium">Features</a>
        </div>
        <div className="relative group after:content-[''] after:absolute after:w-full after:h-[1.5px] after:bg-black after:bottom-0 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
          <a href="#pricing" className="font-medium">Pricing</a>
        </div>
        <div className="relative group after:content-[''] after:absolute after:w-full after:h-[1.5px] after:bg-black after:bottom-0 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
          <a href="#faq" className="font-medium">FAQ</a>
        </div>
        <div className="flex gap-5">
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
