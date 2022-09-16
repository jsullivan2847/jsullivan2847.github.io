import React from 'react'
import Title from '../Title/Title'

export default function Window({children,history}) {

 
  return (
     <div className='lg:mx-[120px] text-left lg:max-w-[600px] mb-[100px]'>
      {children}
    </div>
   
  )
}
