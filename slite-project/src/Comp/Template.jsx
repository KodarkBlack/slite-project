import React from 'react'
import Button from './Button'

const Template = () => {
  return (
    <div className='w-full h-96 pt-28  flex-col  items-center inline-flex'>
      <div className='w-full  flex-col  items-start inline-flex'>
        <h3 className='w-full text-center text-zinc-800 text-2xl font-medium '>Beat the blank canvas with Templates</h3>
        <b className='w-full text-center text-zinc-800 text-base font-medium '>Ready-to-use Templates for product specs, company handbooks, meeting notes and more.</b>
      </div>
      <Button 
          props={'Browse template'} 
          className={` mt-5 w-40 h-11 px-5 pt-3 pb-3.5 bg-blue-600 hover:border text-zinc-800 text-sm font-medium leading-relaxed hover:border-zinc-600 hover:bg-transparent transition 5s ease rounded-3xl justify-center items-center inline-flex animate-bounce`}
        /> 
    </div>

    
  )
}

export default Template
