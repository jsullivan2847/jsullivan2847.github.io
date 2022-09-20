import React from 'react'
import Title from '../../components/Title/Title'
import Window from '../../components/Window/Window'
import Project from '../../components/Project/Project'
import ProjectLinks from '../../components/Project/ProjectLinks'
import Head from 'next/head'

export default function index() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
     <Title text='Projects'/>
    <Window>
      <div className='flex flex-wrap lg:w-[800px] justify-center lg:justify-start mb-[100px]'>
      <Project 
      name='Hide & Seek'
      pic='/images/HidenSeek.jpg'
      link='https://hideandseekv2.netlify.app/'
      github='https://github.com/jsullivan2847/Hide-and-Seek-v2'
      trello='https://trello.com/b/mnzqufd3/hideseek-v2'/>
      <Project 
      name="Brita VanTol"
      link="https://britavantol.netlify.app/"
      pic="/images/BritaSite.jpg"
      github="https://github.com/jsullivan2847/Brita-Portfolio"
      trello="https://trello.com/b/0okUAa8S/britavantol"
      />
      <Project
      name='Streepflix'
      link='https://streepflix.netlify.app/'
      pic='/images/Streepflix.jpg'
      github='https://github.com/jsullivan2847/streepflix-frontend'
      trello='https://trello.com/b/m4S8C5Ok/netflix-clone'/>
      <Project
      name='MyPix'
      link='https://django-photo-app.herokuapp.com/'
      pic='/images/MyPix.jpg'
      github='https://github.com/jsullivan2847/MyPix'
      trello='https://trello.com/b/sbd2KovY/mypix'/>
      </div>
    </Window>
    </div>
  )
}
