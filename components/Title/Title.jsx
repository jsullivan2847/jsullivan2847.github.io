import React from 'react'

export default function Title({text}) {
    console.log(text)
  return (
    <div className='lg:inline font-bold w-full lg:w-4/5 lg:ml-4 text-5xl h-fit text-start font-size-5xl my-10'>
        {text}
    </div>
  )
}
