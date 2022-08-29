import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Window from '../Window/Window'

export default function Layout({children}) {
  return (
    <div className='flex flex-wrap'>
    <Header/>
    <Window>
        {children}
    </Window>
    <Footer/>
    </div>
  )
}
