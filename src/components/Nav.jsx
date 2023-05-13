import { NavLink as Link } from 'react-router-dom'
import React from 'react'
import {GiConcentricCrescents} from 'react-icons/gi'
import {AiOutlineDown} from 'react-icons/ai'
import { link } from './Link'
import { useState } from 'react'


// use children props to display the main component of the app
const Nav = ({children}) => {

  const {subLink, setSubLink} = useState(true);

  const handleChange = () => {
    setSubLink(!subLink)
  }
  return (
    <div className='' >
        <div className='hidden sm:flex sm:fixed sm:w-40 sm:h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>

            <div className='flex flex-col items-center'>


                    <Link to={'/'} className='flex items-center flex-row justify-center gap-2'>
                        <div className='bg-green-500 text-white p-3 rounded-lg '>
                            <GiConcentricCrescents size={20} /> 
                        </div>
                        <span className='text-xl font-bold flex items-center justify-center '>Swiphr</span>
                    </Link>

                    
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>


                    {
                      link.map((list) =>{
                        return (
                          <Link to={list.to} className='w-[100%] mx-auto' key={list.id}>
                          <div className=' cursor-pointer hover:bg-green-400 my-1 p-2 rounded-lg flex items-center gap-2 active:bg-green-200 '>
                              <span className='flex items-center font-[500] text-[14px] gap-2'> {<list.icon/>} {list.name} {list.sublink ? <AiOutlineDown onClick={handleChange}/> : null}</span>

                          </div>
                          {list.sublink?.map((item, i) => {
                            return(
                              <li className='list-none text-[12px] w-[90%] mx-auto mt-2 pl-2' key={i}>{item}</li>
                            )

                          })}
                        </Link>
                        )
                      })
                    }
            </div>
            <span className='flex items-center justify-center gap-2 w-full'>
        <div className='rounded-[50%] w-[30px] h-[30px] bg-gray-300 border-none '> </div>
        <p className='text-[12px] font-semibold'>Oluwafemi</p>
        </span>
        </div>
        
        {/* main app display with the children props */}
        <main className='sm:ml-40 w-[100% - 40px]'>{children}</main>
    </div>
  )
}

export default Nav