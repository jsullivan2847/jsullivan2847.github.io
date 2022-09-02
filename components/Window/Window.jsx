import React from 'react'
import Title from '../Title/Title'

export default function Window({children,history}) {

 
  return (
     <div className='lg:ml-5 lg:border-8 lg:w-4/5 lg:rounded-xl lg:max-h-[28rem] lg:overflow-scroll border-light-grey mb-20 mt-5 text-center'>
      {children}
    </div>
   
  )
}
