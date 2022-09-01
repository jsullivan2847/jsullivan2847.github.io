import React from 'react'

export default function Footer() {
  return (
    <div className=' flex content-center justify-between fixed bottom-0 bg-special-grey w-full h-20'>
      <div className='flex-col w-36 ml-5 mt-2'>
        <p className=' text-white text-sm'> Developed by James Sullivan</p>
        <p className='text-white text-sm'>© 2022</p>
      </div>
      <div className='flex justify-between mr-5 w-36'>
      <img className=" h-9 mt-5"src="../images/github.png" alt="" />
      <img className=' h-9 mt-5' src="../images/twitter.png" alt="" />
      <img className=' h-9 mt-5' src="../images/linkedIn.png" alt="" />

      </div>
    </div>
  )
}
