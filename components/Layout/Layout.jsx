import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Title from '../Title/Title'
import Window from '../Window/Window'

export default function Layout({children}) {
  return (
    <div>
      <div className='overflow-scroll transition-all duration-200 flex sm:justify-center md:justify-between lg:justify-between flex-wrap p-5'>
      <Header/>
      <Title/>
    <Window>
        {children}
    </Window>
      </div>
      <Footer/>
    </div>
  )
}
