import React from 'react'
import Title from '../../components/Title/Title'

export default function Experience() {
  return (
    <div className='md:max-w-[600px] '>
      <Title text="Experience"/>
      {/* less than 3 */}
      <div className='p-5'>
        <p className='lg:ml-[120px] text-start text-md md:text-2xl sm:text-xl'>Less Than 3 Productions 
      <span className='text-sm text-special-grey'> <strong> | Brooklyn, NY | </strong>March 2022 - Present</span>
      <ul className='text-sm list-disc'>
        <li>Pickups and drop-offs to prop houses, carpentry, 
          painting, and design work.</li>
        <li>Sourced supplies from multiple vendors, scheduling and coordination of staffing for installs in and out of state</li>
      </ul>
      </p>
      </div>
      {/* bottle shoppe */}
      <div className='p-5'>
        <p className='lg:ml-[120px] text-start text-md md:text-2xl sm:text-xl'>Bottle Shoppe
      <span className='text-sm text-special-grey'> <strong> | Brooklyn, NY | </strong>March 2022 - Present</span>
      <ul className='text-sm list-disc'>
        <li>Pickups and drop-offs to prop houses, carpentry, 
          painting, and design work.</li>
        <li>Sourced supplies from multiple vendors, scheduling and coordination of staffing for installs in and out of state</li>
      </ul>
      </p>
      </div>
    </div>
  )
}
