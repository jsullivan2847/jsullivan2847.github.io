import React from 'react'

export default function HomeNav() {
  return (
    <div>
         <nav className='hidden lg:inline-flex w-[256px] p-3 flex-col bg-light-grey md:rounded-br-[40px]'>
        <a href="/About"><h3 className='transition-all duration-200 p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>About</h3></a>
        <a href="/Skills"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md' >Skills</h3></a>
        <a href="/Projects"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>Projects</h3></a>
        <a href="/Experience"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md hover:rounded-br-[40px]'>Experience</h3></a>
        <a href="/Education"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md hover:rounded-br-[40px]'>Education</h3></a>
        <a href="/docs/resume.pdf"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md hover:rounded-br-[40px]'>Resume</h3></a>
    </nav>
    </div>
  )
}