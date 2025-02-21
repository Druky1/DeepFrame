"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const { user } = useUser();

  return (
    <header className="flex justify-between items-center py-4 px-7 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div>
        <Link href="/">
          <span className="text-lg md:text-2xl hover:border-b border-black cursor-pointer">
            Deep Frame
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex justify-between items-center gap-12 ">
        {["features", "pricing", "FAQ"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="relative group font-medium text-gray-700 transition-colors hover:text-black after:content-[''] after:absolute after:w-full after:h-[1.5px] after:bg-black after:bottom-0 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
        <Link href="/dashboard">
          {user ? (
            <div>
              <Button>Dashboard</Button>
            </div>
          ) : (
            <></>
          )}
        </Link>
        <Link href="/sign-in">
          {user ? (
            <div className="flex items-center">
              <UserButton />
            </div>
          ) : (
            <Button>Sign In</Button>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
