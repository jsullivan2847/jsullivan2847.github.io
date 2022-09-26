
import React from 'react'
import Title from '../../components/Title/Title'
import Window from '../../components/Window/Window'
import Head from 'next/head'

export default function index() {
  return (
    <div>
		<Head>
			<title>Skills</title>
		</Head>
        <Title text='Skills'/>
        <Window>
            <div className='w-fill flex flex-wrap'>
                <div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>JavaScript</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40"/>
                </div>
                <div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>HTML</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50"/>
                </div>
                <div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>CSS</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50"/>
                </div>
                <div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>Python</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="50" />
                </div>
                <div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>React</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50"/>
                </div>
                <div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>Django</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" width="50"/>
                </div>
                <div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>Unity</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" width="50"/>
                </div>
				<div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>MongoDB</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="50"/>
				</div>
				<div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>PostgreSQL</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="50"/>
				</div>
				<div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>Github</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50"/>
				</div>
				<div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>AWS Bucket</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" width="50"/>
				</div>
				<div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>Postman</p>
					<img className='m-0' src="https://www.svgrepo.com/show/354202/postman-icon.svg" width="50"/>
				</div>
				<div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>Figma</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="50"/>
				</div>
				<div className='pt-4 pr-4 pb-4'>
					<p className='text-sm'>Trello</p>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" width="50"/>
				</div>
                








            {/* <h3>JavaScript 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40"/>
				 </h3>
				<h3>HTML 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50"/>
				</h3>
				<h3>CSS 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50"/>
				</h3>
				<h3>Python <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="50" /></h3>
				<h3>Node 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50"/>
				</h3>
				<h3>React 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50"/>
				</h3>								
				<h3>Django <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" width="50"/></h3>
				</div>
				<div class="column-2">
				<h3>Unity 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" width="50"/>
				</h3>
				<h3>MongoDB 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="50"/>
				</h3>
				<h3>PostgreSQL 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="50"/>
				</h3>
				<h3>Github 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50"/>
				</h3>
				<h3>AWS Bucket 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" width="50"/>
				</h3>
				<h3>Postman <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" width="50"/></h3>
				<h3>Figma 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="50"/>
				</h3>
				<h3>Trello 
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" width="50"/>
				</h3> */}
            
            </div>

        </Window>
        
    </div>
  )
}
