import React from 'react'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <>
    <div className='lg:w-1/3 flex flex-col justify-center items-center lg:border-r-2 lg:pr-10 border-light-grey'>
        <img className="lg:w-64 mb-2 lg:rounded-tr-[40px]" src='../images/prof_pic.jpeg' alt="profile pic"/>
        <p className='mb-3 text-sm'><strong>Software Engineer</strong> in Brooklyn, NY</p>
    <Nav/> 
    </div>
    </>
  )
}

