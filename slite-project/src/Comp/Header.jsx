import React from 'react'
import Line from '../assets/line.svg'
import Slite from '../assets/slitepeople.svg'
import Pic from '../assets/pic.png'
import Button from './Button'

const Header = () => {
  return (
    <div className='w-screen py-20 flex-col justify-center items-center inline-flex bg-rose-100'>
      <div className=' w-screen  flex-col justify-start items-start flex'>
        <div className='w-screen h-[inherit] flex gap-2 justify-center mt-10 items-center'>
          <h3 className='text-center text-zinc-800 text-5xl font-medium leading-10'>Bring</h3>
          <div className=' flex-col justify-start items-start flex'>
            <h3 className='text-center  text-zinc-800 text-5xl font-medium'>clarity</h3>
            <img 
              src={Line} 
              alt="Line" 
              className='w-[130px]' 
            />
          </div>
          <h3 className='text-center text-zinc-800 text-5xl font-medium leading-10'>to your team</h3>
        </div>
      </div>
      <p className="text-center mt-5 text-zinc-800 text-[12px] font-medium leading-relaxed">Slite is a modern knowledge base that drives action with structured docs, thoughtful collaboration <br /> and confident decision-making.</p>

      <form className='w-screen h-14 relative lg:ml-[70%] mt-5  '>
        <input 
         type="email" 
         name="email" 
         id="email" placeholder='name@company.com' 
         className='h-14 pl-8 pr-44 py-5 left-0 top-0 absolute rounded-3xl border border-zinc-800 justify-start items-center inline-flex'  
         
        />
        <Button
          props={'Start for free'}
          className={`w-40 h-14 left-[236.55px] top-0 absolute bg-blue-600 rounded-3xl justify-center items-center inline-flex`}
        />
      </form>

      <img src={Slite} className='w-screen h-96 mt-10' alt="" />

      <p className="w-24 h-3 mb-5 text-center text-neutral-400 text-xs font-semibold  uppercase leading-3 tracking-wide">8:45 aM - PDT</p>

      <div className="w-96 h-28 px-5 bg-slate-300 rounded shadow justify-between items-center gap-2 inline-flex">
        <img className=" w-20 h-20" src={Pic} />
        <div className="w-96 self-stretch pl-2 pr-20 pt-2.5 pb-3 flex-col justify-center items-start gap-1.5 inline-flex">
            <h3 className=" w-60 h-5 text-zinc-800 text-base font-bold leading-relaxed">Georges made some changes</h3>
            <p className=" w-56 h-5 text-zinc-800 text-opacity-70 text-base font-medium leading-relaxed">The abnormal guide to remote</p>
        </div>
      </div>

    </div>

  )
}

export default Header
