import React from 'react'
import { useState } from 'react'
import MobileNav from '../Nav/MobileNav'

export default function Hamburger() {


    const styles = {
        active: ' absolute top-0 left-0 w-full transition-all duration-200 z-0 ',
        hidden: 'absolute hidden transition-all duration-200'
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
    <div className='w-full flex flex-col justify-start lg:hidden '>
        <img onClick={handleClick}className='w-12 z-20' src={img} alt=""  />
        <div className={style}>
        <MobileNav />
        </div>
    </div>
  )
}
