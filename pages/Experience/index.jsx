import React from 'react'
import Title from '../../components/Title/Title'
import Head from 'next/head'

export default function Experience() {
  return (
    <div className='md:max-w-[600px] pb-[80px]'>
      <Head>
    <title>Experience</title>
    </Head>
      <Title text="Experience"/>
      <div className='lg:pl-[120px]'>
      <div className='p-5'>
        <div className='relative rounded-3xl bg-yellow w-fit px-2 lg:ml-[120px] text-start text-md md:text-2xl sm:text-xl'>
          <p>Less Than 3 Productions </p>
          </div>
      <span className='text-sm text-special-grey'> <strong> | Brooklyn, NY | </strong>March 2022 - Present</span>
      <ul className='text-sm list-disc'>
        <li>Pickups and drop-offs to prop houses, carpentry, 
          painting, and design work.</li>
        <li>Sourced supplies from multiple vendors, scheduling and coordination of staffing for installs in and out of state</li>
      </ul>
    
      </div>
      <div className='p-5'>
        <p className='relative rounded-3xl bg-pink w-fit px-2 lg:ml-[120px] text-start text-md md:text-2xl sm:text-xl'>Bottle Shoppe     </p>
      <span className='text-sm text-special-grey'> <strong> | Brooklyn, NY | </strong>April 2021 - March 2022</span>
      <ul className='text-sm list-disc'>
        <li>Maintained a well curated and extensive inventory of over 300 new and old world wines.</li>
        <li>Provided expert recommendations for wine pairings, profiles, and personal taste to regular customers</li>
      </ul>
  
      </div>
      <div className='p-5'>
        <p className='relative rounded-3xl bg-green w-fit px-2 lg:ml-[120px] text-start text-md md:text-2xl sm:text-xl'>Squibb Coffee & Wine     </p>
      <span className='text-sm text-special-grey'> <strong> | Grand Rapids, MI | </strong>March 2018 - March-2021</span>
      <ul className='text-sm list-disc'>
        <li>Oversaw a wine, cheese, and charcuterie program, developing recipes for a scalable & seasonally changing menu</li>
        <li>Handled customer relations, inventory management, social media and marketing</li>
        <li>Worked with owners of the business on big picture decisions before and throughout the pandemic</li>
      </ul>
      </div>
      <div className='p-5'>
        <p className='relative rounded-3xl bg-blue w-fit px-2 lg:ml-[120px] text-start text-md md:text-2xl sm:text-xl'>DAAC (Division Avenue Arts Collective)</p>
      <span className='text-sm text-special-grey'> <strong> | Grand Rapids, MI | </strong>March 2018 - March-2021</span>
      <ul className='text-sm list-disc'>
        <li>Managed events at multiple venues including setup, volunteer organization, and live mixing audio</li>
        <li>Utilized an ever-growing database of booking contacts and scheduling in Google Sheets</li>
        <li>Engineered live sessions in studio and remote using multiple DAWs</li>
      </ul>
      </div>
      </div>
    </div>
  )
}
