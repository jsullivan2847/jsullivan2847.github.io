import React from 'react'
import Title from '../../components/Title/Title'
import Window from '../../components/Window/Window'
import Project from '../../components/Project/Project'

export default function index() {
  return (
    <div>
     <Title text='Projects'/>
    <Window>
      <div className='lg:w-[800px]'>
      <Project 
      name='Hide & Seek'
      link=''
      github=''
      trello=''/>
      </div>
    </Window>
    </div>
  )
}
