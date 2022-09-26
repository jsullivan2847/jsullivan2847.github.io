import React from 'react'
import ProjectLinks from './ProjectLinks'
import Image from 'next/image'

export default function Project({link,github,trello,name,pic}) {
  return (
    <div className='relative hover:cursor-pointer hover:drop-shadow-2xl bg-special-grey flex w-[300px] h-[300px] m-1 transition-all duration-300 z-0'>
        <Image className='mix-blend-soft-light lg:mix-blend-normal transition-all duration-500 w-[300px] h-[300px] z-0' src={pic} alt="" />
        <ProjectLinks link={link} github={github} trello={trello} name={name}/>
   </div>
  )
}
