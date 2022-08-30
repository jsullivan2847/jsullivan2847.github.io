import React from 'react'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <div className='p-5 w-1/3'>
        <img className="w-64 mb-2 rounded-tr-[40px]" src='../images/prof_pic.jpeg' alt="" />
        <h5 className='mb-3'>Software Engineer in Brooklyn, NY</h5>
    <Nav/> 
    </div>
  )
}
