import React from 'react'
import styles from '/styles/Layout/Nav/Nav.module.css'



export default function Nav() {
  return (
    <nav className=' w-1/2 p-3 flex-col bg-light-grey md:rounded-br-[40px]'>
        <a href="/About"><h3 className='transition-all duration-200 p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>About</h3></a>
        <a href="/Skills"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md' >Skills</h3></a>
        <a href="/Projects"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md'>Projects</h3></a>
        <a href="/Experience"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md hover:rounded-br-[40px]'>Experience</h3></a>
    </nav>
  )
}


