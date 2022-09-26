import Head from 'next/head'
import HomeNav from '../components/Nav/HomeNav'
import Window from '../components/Window/Window'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full h-screen pb-[80px]'>
      <Head>
        <title>James Sullivan</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap" rel="stylesheet"></link>
      </Head>
      <div className='w-full h-3/4 flex-col items-center text-center justify-center'>
      <h1 className='font-extrabold text-5xl text-black'>James Sullivan</h1>
      <div className='w-full h-full flex justify-center items-center'>
      <div className='relative bg-gradient-to-t from-white to-blue animate-spin-slow rounded-full w-[300px] ring-8 ring-yellow h-[296px] flex justify-center items-center'>
      </div>
      <div className='absolute rounded-full w-[200px] ring-8h-[200px] flex justify-center items-center'>
      <div className='animate-none text-center'>
        <Link href="/About"><h3 className='transition-all duration-200 p-1  hover:bg-white hover:text-black rounded-md'>About</h3></Link>
        <Link href="/Skills"><h3 className='transition-all p-1  hover:bg-white hover:text-black rounded-md' >Skills</h3></Link>
        <Link href="/Projects"><h3 className='transition-all p-1  hover:bg-white hover:text-black rounded-md'>Projects</h3></Link>
        <Link href="/Experience"><h3 className='transition-all p-1  hover:bg-white hover:text-black rounded-md '>Experience</h3></Link>
        <Link href="/Education"><h3 className='transition-all p-1  hover:bg-white hover:text-black rounded-md '>Education</h3></Link>
        <Link href="/docs/resume.pdf"
         alt="alt text"
         target="_blank"
         rel="noopener noreferrer"><h3 className='transition-all p-1 hover:mb-2 hover:bg-white hover:text-black rounded-md hover:rounded-br-[40px]'>Resume</h3></Link>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}
