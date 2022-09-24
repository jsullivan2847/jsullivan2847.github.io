import React from 'react'
import Link from 'next/link'




export default function MobileNav() {
  return (
    <nav className='bg-light-grey h-fit w-fill p-1 flex flex-col items-center justify-start z-0'>
        <a href="/About"><h3 className='transition-all duration-200 p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>About</h3></a>
        <a href="/Skills"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md' >Skills</h3></a>
        <a href="/Projects"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>Projects</h3></a>
        <a href="/Experience"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>Experience</h3></a>
        <a href="/Education"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>Education</h3></a>
        <a href="/docs/resume.pdf"
         alt="alt text"
         target="_blank"
         rel="noopener noreferrer"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>Resume</h3></a>
    </nav>
  )
}
