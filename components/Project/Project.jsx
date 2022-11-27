import React from 'react'
import ProjectLinks from './ProjectLinks'
import Image from 'next/image'
import { useState } from 'react';

export default function Project({link,github,trello,name,pic,description}) {

  const [hovered, setIsHovered] = useState();
  function handleMouseOver(){
    setIsHovered(true);
  }
  function handleMouseLeave(){
    setIsHovered(false);
  }
  return (
    <div className='flex flex-col w-[320px] justify-center text-center'>
     <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='relative hover:cursor-pointer hover:drop-shadow-2xl bg-special-grey flex w-[300px] h-[300px] m-1 transition-all duration-300 z-0'>
        <Image className='mix-blend-soft-light lg:mix-blend-normal transition-all duration-500 w-[300px] h-[300px] z-0' src={pic} alt={name} layout='fill' />
        <ProjectLinks link={link} github={github} trello={trello} name={name}/>
   </div>
   {hovered ? <p className='text-center bg-light-grey shadow-lg shadow-special-grey '>{description}</p> : <></>}
    </div>
  )
}
