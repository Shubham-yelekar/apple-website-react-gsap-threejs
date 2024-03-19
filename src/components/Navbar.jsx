import React from 'react'

import {appleImg, bagImg, searchImg} from '../utils'
import { navLists } from '../constants'


const Navbar = () => {
  return (
    <header className='w-full py-4 sm:px-8 px-5 flex just-between items-center'>
      <nav className='flex w-full screen-max-width'>
      <img src={appleImg} alt="Apple" width={12} height={14} />

      <div className='flex flex-1 justify-center max-sm:hidden'>
        {navLists.map((nav)=>(<div key='nav' className='px-5 cursor-pointer text-xs text-gray-400 hover:text-white transition-all'>{nav}</div>))}
      </div>

      <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
        <img src={searchImg} alt="search" width={14} height={14} />
        <img src={bagImg} alt="bag" width={14} height={14} />
      </div>
      </nav>
      
    </header>
  )
}

export default Navbar