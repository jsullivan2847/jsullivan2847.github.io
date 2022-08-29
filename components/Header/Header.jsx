import React from 'react'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <div className='p-5 w-1/3'>
        <img className=" w-1/3 max-w-50 rounded-md mb-2 " src='../images/prof_pic.jpeg' alt="" />
    <Nav/> 
    </div>
  )
}
