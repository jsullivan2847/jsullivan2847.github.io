import React from 'react'
import Link from 'next/link'

export default function HomeNav() {
  return (
    <div>
         <nav className='hidden lg:inline-flex w-[256px] p-3 flex-col bg-light-grey md:rounded-br-[40px]'>
        <Link href="/About"><h3 className='transition-all duration-200 p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>About</h3></Link>
        <Link href="/Skills"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md' >Skills</h3></Link>
        <Link href="/Projects"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>Projects</h3></Link>
        <Link href="/Experience"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md hover:rounded-br-[40px]'>Experience</h3></Link>
        <Link href="/Education"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md hover:rounded-br-[40px]'>Education</h3></Link>
        <Link href="/Contact"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md hover:rounded-br-[40px]'>Contact</h3></Link>
        <Link href="/docs/resume.pdf"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md hover:rounded-br-[40px]'>Resume</h3></Link>
    </nav>
    </div>
  )
}
