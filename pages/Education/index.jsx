import React from 'react'
import Head from 'next/head'
import Title from '../../components/Title/Title'
export default function Education() {
  return (
    <div className='md:max-w-[600px] pb-[80px]'>

      <Head>
      <title>Education</title>
      </Head>
      <Title text="Education"/>
      <div className='lg:pl-[100px]'>
      <div className='p-5'>
        <div className='relative rounded-3xl bg-red w-fit px-2 text-start text-md md:text-2xl sm:text-xl'>
          <p>General Assembly</p>
          </div>
      <span className='text-sm text-special-grey'> <strong> | Brooklyn, NY | </strong>April 2022 - August 2022</span>
      <ul className='text-sm list-disc'>
        <p>Full-stack software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration. </p>
      </ul>
      </div>
      <div className='p-5'>
        <div className='relative rounded-3xl bg-yellow w-fit px-2 text-start text-md md:text-2xl sm:text-xl'>
          <p>Grand Rapids Community College</p>
          </div>
      <span className='text-sm text-special-grey'> <strong> | Grand Rapids, MI | </strong>August 2014 - May 2016</span>
      <ul className='text-sm list-disc'>
        <p>Associate of Science in (Architectural Technology)</p>
      </ul>
      </div>
      </div>
    </div>
  )
}
