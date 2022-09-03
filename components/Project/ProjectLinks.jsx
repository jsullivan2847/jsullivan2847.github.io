import React from 'react'

export default function ProjectLinks({link,github,trello,name}) {
  return (
    <div className='absolute transition-all duration-300 hover:opacity-100 inline-flex w-[300px] h-[300px] z-4 lg:opacity-0 lg:bg-special-grey '>
            <div className='absolute flex flex-wrap justify-around w-full mt-[130px]'>
            <h1 className='font-bold text-white text-4xl w-full mb-5'>{name}</h1>
            <a href={link} className='transition-all duration-150 hover:bg-white p-1 rounded-xl bg-green w-lg h-md'>{name}</a>
            <a href={trello} className='transition-all duration-150 hover:bg-white p-1 rounded-xl bg-green w-lg h-lg'>Trello</a>
            <a href={github} className='transition-all duration-150 hover:bg-white p-1 rounded-xl bg-green w-lg h-lg'>Github</a>
            </div>
        </div>  
  )
}
