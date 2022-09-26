import React from 'react'
import { useState } from 'react'
import MobileNav from '../Nav/MobileNav'
import Image from 'next/image'

export default function Hamburger() {


    const styles = {
        active: 'transition-all duration-200 ease-out z-10 absolute left-0 top-0 w-full ',
        hidden: 'transition-all duration-200 ease-out scale-0 absolute '
    }

    const svg = {
        hamburger: '/images/Hamburger.svg',
        x: '/images/x.jpg'
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
    <div className='w-full lg:hidden bg-white z-40 mb-10'>
        <Image onClick={handleClick}className='w-[65px] absolute z-30' src={img} alt="" width={65} height={40} />
        <div className={style}>
        <MobileNav />
        </div>
    </div>
  )
}
