import React from 'react'
import TopNav from './TopNav'
import Type from './Type'

const Product = () => {
  return (
    <div className='w-full max-w-[1024px] mx-auto bg-white p-[8px_16px] flex flex-col gap-2 relative'>

            <TopNav />
        <button className='bg-gray-300 text-gray-900 p-[3px_5px] rounded-[20px] text-[14px] outline-none w-[80px] font-semibold'> &larr; Back</button>
        <header className='flex items-center justify-between w-full '>
            <h1 className='text-[16px] font-semibold sm:font-[500] md:text-3xl sm:text-xl'>New product</h1> 
            <button className='bg-green-500 text-white p-[8px_16px] rounded-md text-[14px] outline-none'> Save Product</button>
        </header>
        <div className='flex justify-center items-center w-full max-w-[1024px] mt-4'>
            <form className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full'>
                <div className='w-full sm:col-span-2'>
                    <p className='w-full text-left text-sm font-semibold mb-2'>
                        Product name
                    </p>
                    <input type="text" className='w-full border outline-none border-gray-300 p-[8px_16px] text-sm rounded-md'/>
                </div>
                <div className='w-full'>
                    <p className='w-full text-left text-sm font-semibold mb-2'>
                        Product name
                    </p>
                    <input type="text" className='w-full border outline-none border-gray-300 p-[8px_16px] text-sm rounded-md placeholder:text-black'placeholder='Optional'/>
                </div>
            </form>
        </div>
        <Type />
    </div>
  )
}

export default Product