"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className="flex justify-between items-center py-4 px-7 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div>
        <Link href="/">
          <span className="text-lg md:text-2xl hover:border-b border-black cursor-pointer">
            Deep Frame
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between items-center gap-12">
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
          {user ? <Button className="text-sm">Dashboard</Button> : null}
        </Link>
        <Link href="/sign-in">
          {user ? <UserButton /> : <Button>Sign In</Button>}
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (

        <div className="absolute top-16 right-5 bg-white shadow-md rounded-lg p-4 flex flex-col gap-4 md:hidden tracking-tight">
          {["features", "pricing", "FAQ"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="font-medium text-gray-700 transition-colors hover:text-black"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <Link href="/dashboard">
            {user ? <Button className="w-full text-sm">Dashboard</Button> : null}
          </Link>
          <Link href="/sign-in" className="flex justify-center">
            {user ? <UserButton /> : <Button className="w-full">Sign In</Button>}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
