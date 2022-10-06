import React from 'react'
import Email from '../../components/Email/Email'
import Title from '../../components/Title/Title'

export default function Contact() {
  return (
    <div className='md:max-w-[600px] pb-[80px]'>
        <div className='min-w-full flex flex-col items-center '>
        <Title text="Contact"/>
        <Email/>
        </div>
    </div>
  )
}
