import React from 'react'

export default function Project({link,github,trello,name}) {
  return (
    <div className='flex w-[300px] h-[300px] m-1 bg-special-grey hover:cursor-pointer hover:drop-shadow-2xl transition-all duration-300'>
           <h1 className='absolute'>{name}</h1>
   <img className='transition-all duration-500 w-[300px] h-[300px] mix-blend-soft-light lg:mix-blend-normal' src="images/HidenSeek.jpg" alt=""/>
     <a href={link} className='p-1 rounded-xl absolute bg-green w-lg h-lg ml-[30px] mt-[120px]'>Hide & Seek</a>
     <a href={trello} className='p-1 rounded-xl absolute bg-green w-lg h-lg ml-[140px] mt-[120px]'>Trello</a>
     <a href={github} className='p-1 rounded-xl absolute bg-green w-lg h-lg ml-[210px] mt-[120px] '>Github</a>
   </div>
  )
}
