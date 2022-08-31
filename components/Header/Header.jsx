import React from 'react'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <div className='md:w-1/3 max-w-full '>
        <img className="w-64 mb-2 md:rounded-tr-[40px]" src='../images/prof_pic.jpeg' alt="" />
        <p className='mb-3 text-sm'><strong>Software Engineer</strong> in Brooklyn, NY</p>
    <Nav/> 
    </div>
  )
}

//media query 425
