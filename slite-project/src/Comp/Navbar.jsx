import { useState } from 'react'
import Button from './Button'
import Slite from '../assets/frame.svg'
import { BsFillMenuAppFill } from 'react-icons/bs'
import '../Header.css'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <div className='w-screen h-20 p-5 justify-between inline-flex'>
     <div className='w-screen flex justify-between gap-5 items-center'>
        <img 
          className='w-16 h-6' 
          src={Slite} alt={Slite} 
        />

        <BsFillMenuAppFill
          className='block md:hidden animate-bounce transition 3s ease cursor-pointer'
          onClick={toggleMenu}
        />
     </div>

      <div className={`bg-rose-100 rounded   transition ease-in md:flex  ${showMenu ? 'block animate-bounce' : 'hidden'}`}>
        <ul className='md:flex md:gap-5'>
          <li><a className='w-8 h-5 text-right text-zinc-800 text-sm font-medium leading-relaxed' href="#">Products</a></li>
          <li><a className='w-8 h-5 text-center text-zinc-800 text-sm font-medium leading-relaxed' href="#">Template</a></li>
          <li><a className='w-8 h-5 text-center text-zinc-800 text-sm font-medium leading-relaxed' href="#">Pricing</a></li>
          <li><a className='w-8 h-5 text-center text-zinc-800 text-sm font-medium leading-relaxed' href="#">Blog</a></li>

          <ul className={`md:flex md:gap-3 ${showMenu ? 'block' : 'hidden'}`}>
            <Button 
              props={"Sign in"} 
              className={`mb-2 w-12 h-5 text-center text-zinc-800 text-sm font-medium leading-relaxed`}
            />
            <Button 
              props={"Request a demo"} 
              className={`mb-2 w-40 h-11 px-5 pt-2.5 pb-2 text-zinc-800 text-sm font-medium leading-relaxed rounded-3xl border hover:border-blue-600 transition 5s ease border-zinc-800 justify-center items-center inline-flex animate-bounce`}
            />
            <Button 
              props={"Start for free"} 
              className={`mb-2 w-40 h-11 px-5 pt-3 pb-3.5 bg-blue-600 hover:border text-zinc-800 text-sm font-medium leading-relaxed hover:border-zinc-600 hover:bg-transparent transition 5s ease rounded-3xl justify-center items-center inline-flex animate-bounce`}
            />
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
