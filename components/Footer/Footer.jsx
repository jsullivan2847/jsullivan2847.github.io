/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className=' flex content-center justify-between fixed bottom-0 bg-special-grey w-full h-20'>
      <div className='flex-col w-36 ml-5 mt-2'>
        <p className=' text-white text-sm'> Developed by James Sullivan</p>
        <p className='text-white text-sm'>© 2022</p>
      </div>
      <div className='flex justify-between mr-5 w-[100px]'>
        <a href="https://github.com/jsullivan2847">
        <img className=" h-9 mt-5"src="../images/github.png" alt="" />
        </a>
        <Link href="https://www.linkedin.com/in/james-d-sullivan/">
        <img className=' h-9 mt-5' src="../images/linkedIn.png" alt="" />
        </Link>
      </div>
    </div>
  )
}
