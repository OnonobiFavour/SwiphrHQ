import React from 'react'
import { FaBars } from 'react-icons/fa'

const TopNav = () => {
  return (
    <nav className='flex items-center justify-between w-full p-4 sm:hidden'>
        <FaBars size={20} />
        <span className='flex items-center justify-center gap-2'>
        <div className='rounded-[50%] w-[30px] h-[30px] bg-gray-300 border-none '> </div>
        <p className='text-[12px] font-semibold'>Oluwafemi</p>
        </span>
    </nav>
  )
}

export default TopNav