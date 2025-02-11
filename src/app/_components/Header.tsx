import React from 'react'
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-7 bg-neutral-content backdrop-blur-sm sticky top-0 z-20 shadow-md ">
      <div>
        <Link href="/">
          <span className="text-2xl hover:border-b border-black">
            Deep Frame
          </span>
        </Link>
      </div>
      <div className="flex gap-5">
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
      </div>
    </div>
  )
}

export default Header