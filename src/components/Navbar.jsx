import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex item-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer mt-2' src={assets.arrow_left} alt="" />
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer mt-2' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block mt-2 cursor-pointer'>Explore premium</p>
            <p className='bg-black py-1 px-3 rounded-2xl text-[15px] mt-2 cursor-pointer'>Install app</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex item-center justify-center mt-2 cursor-pointer'>A</p>
        </div>
    </div>
    <div className='flex gap-2 items-center mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
    </div>
    </>
  )
}

export default Navbar