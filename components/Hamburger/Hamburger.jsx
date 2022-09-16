import React from 'react'
import { useState } from 'react'
import MobileNav from '../Nav/MobileNav'

export default function Hamburger() {


    const styles = {
        active: 'transition-all duration-200 ease-out fixed top-0 left-0 w-full z-0 transform-100 ',
        hidden: 'transition-all duration-200 ease-out fixed scale-0'
    }

    const svg = {
        hamburger: 'images/Hamburger.svg',
        x: 'images/x.jpg'
    }

    const [style, setStyle] = useState(styles.hidden)
    const [img, setImg] = useState(svg.hamburger)


    function handleClick(){
        if(style === styles.hidden){
            setStyle(styles.active)
            setImg(svg.x) 
        }
        else{
            setStyle(styles.hidden)
            setImg(svg.hamburger)

        }
    }

  return (
    <div className='fixed z-30 bg-white w-[65px] h-[50px] left-0 p-2 top-0 justify-start lg:hidden '>
        <img onClick={handleClick}className='w-12 fixed z-30' src={img} alt=""  />
        <div className={style}>
        <MobileNav />
        </div>
    </div>
  )
}
