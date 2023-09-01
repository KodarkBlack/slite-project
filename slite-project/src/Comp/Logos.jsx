import React from 'react'
import Adam from '../assets/adam.svg'
import Bambo from '../assets/bambo.png'
import Panger from '../assets/panger.svg'
import Give from '../assets/give.svg'
import Ife from '../assets/ife.svg'





const Logos = () => {
  return (
    <div className='w-screen flex-col justify-center p-10 items-center inline-flex'>
      <p className='text-center text-zinc-800 text-base font-sm leading-relaxed mb-5'><span className=''>200,000+</span> teams have found focus with Slite</p>
      <div className='flex flex-wrap justify-center gap-5'>
        <img className='' src={Adam} alt="" />
        <img src={Bambo} alt="" />
        <img src={Panger} alt="" />
        <img src={Give} alt="" />
        <img src={Ife} alt="" />
      </div>
    </div>
  )
}

export default Logos
