import React from 'react'
import {IoMdImage} from 'react-icons/io'


import {data} from './data'

const Type = () => {
  return (
    <section className='w-full max-w-[1024px]mx-auto'>
        <h1 className='w-full text-left text-sm font-semibold mt-6 mb-2'>Type</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-[1024px] gap-4 mx-auto'>
            {
                data.map((item) => {
                    return (         
                <div className='w-full p-4 border border-gray-300 outline-none rounded-md flex flex-col justify-center text-left' key={item.id}>
                <span className='flex items-center font-[500] text-[16px] gap-4'> {<item.icon/>} {item.name}</span>
                <p className='font-light text-gray-500 text-[14px] mt-4'>{item.meta}</p>
                </div>
                 )
                })
            }
        </div>
        <div>
            <h1 className='w-full text-left text-sm font-semibold mt-6 mb-2'>Type</h1>
            <div className='w-full max-w-[1024px] rounded-md border border-gray-300 flex items-center justify-center py-8 md:py-12 flex-col'>
                <IoMdImage size={50} />
                <h2 className='font-[500] text-[16px]'>Add Image</h2>
                <p className='font-light text-gray-500 text-[14px]'>Drag and drop to upload</p>
            </div>
        </div>
        <div className='w-full max-w-[1024px] mx-auto mt-6 mb-2'>
                    <p className='w-full text-left text-sm font-semibold mb-2'>
                       Categories
                    </p>
                    <input type="text" className='w-full border outline-none border-gray-300 p-[8px_16px] text-sm rounded-md'/>
                </div>
        
    </section>
  )
}

export default Type