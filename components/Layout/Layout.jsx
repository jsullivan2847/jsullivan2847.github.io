import React from 'react'
import Footer from '../Footer/Footer'
import Hamburger from '../Hamburger/Hamburger'
import Header from '../Header/Header'
import Title from '../Title/Title'
import Window from '../Window/Window'

export default function Layout({children}) {
  return (
    <div>
      <div className='font-poppins h-screen overflow-scroll transition-all duration-200 flex flex-col items-center p-3 lg:flex-row lg:items-start lg:p-5'>
      <Hamburger/>
      <Header/>
    <Window>
        {children}
    </Window>
      </div>
      <Footer/>
    </div>
  )
}
