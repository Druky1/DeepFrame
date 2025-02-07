import React from 'react'
import {Manrope } from 'next/font/google'
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const manrope = Manrope({ subsets: ["latin"], weight: "400"});

const Logo = () => {
  return (
    <Link href={'/'}>
      <span className={twMerge(manrope.className, "text-2xl text-white/90 border-b border-white/70")}>Deep Frame</span>
    </Link>
  )
}

export default Logo