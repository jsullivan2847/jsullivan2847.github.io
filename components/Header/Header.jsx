import React from 'react'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <>
    <div className='my-20 lg:hidden'>
    <h1 className=' font-bold w-full lg:w-4/5 lg:ml-4 text-5xl h-fit text-start'>Experience</h1>
    </div>
    <div className='lg:w-1/3 flex flex-col justify-center items-center lg:border-r-2 lg:pr-10 border-light-grey'>
        <img className="w-2/5 max-w-md lg:w-64 mb-2 lg:rounded-tr-[40px]" src='../images/prof_pic.jpeg' alt="" />
        <p className='mb-3 text-sm'><strong>Software Engineer</strong> in Brooklyn, NY</p>
    <Nav/> 
    </div>
    </>
  )
}

//media query 425
