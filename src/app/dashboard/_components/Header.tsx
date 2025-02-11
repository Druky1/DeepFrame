import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center py-4 px-7 bg-neutral-content backdrop-blur-sm sticky top-0 z-20 shadow-md '>
      <div>
        <Link href="/">
          <span className='text-2xl hover:border-b border-black'>Deep Frame</span>
        </Link>
      </div>
      <div className='flex gap-5'>
        <Button>Sign In</Button>
        <UserButton />
      </div>
    </div>
  )
}

export default Header