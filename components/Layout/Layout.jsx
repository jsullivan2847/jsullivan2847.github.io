
import React from 'react'
import Footer from '../Footer/Footer'
import Hamburger from '../Hamburger/Hamburger'
import Nav from '../Nav/Nav'
import Window from '../Window/Window'

export default function Layout({children}) {
  let home = false;
  if(children[0].type.name === "Home"){
    home = true;
  }
  else{
    home = false;
  }
  return (
    <div>
      <div className='font-poppins h-screen overflow-scroll transition-all duration-200 flex flex-col items-center p-3 lg:flex-row lg:items-start lg:p-5'>
        {!home ? <><Hamburger/>
      <div className='hidden lg:w-1/3 lg:flex lg:flex-col justify-center items-center lg:border-r-2 lg:pr-10 border-light-grey'>
        <img className="w-2/5 max-w-md lg:w-64 mb-2 lg:rounded-tr-[40px]" src='/images/prof_pic.jpeg' alt="" width={0} height={0}/>
        <p className='mb-3 text-sm'><strong>Software Engineer</strong> in Brooklyn, NY</p>
    <Nav/> </div> </> : <></>}
    {children}
      </div>
      <Footer/>
    </div>
  )
}
