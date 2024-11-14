import React from 'react'
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { MdOutlineDesignServices, MdArchitecture, MdOutlineHomeWork } from "react-icons/md";

const Steps = () => {
  return (
    <>

    <div className='mt-20 mb-5 container text-center'>
     <h3 className='font-bold text-sm uppercase mb-3'>Steps by Steps</h3>
     <h2 className='text-4xl font-bold '>Explore Our Unique Process and Approach</h2>
    </div>
     <div className='container flex gap-5 justify-between py-12'>
          <div className='bg-[url("/images/ForAbout/plan.jpg")] bg-cover bg-bottom text-center rounded-lg text-white group'>
               <div className='bg-black hover:bg-opacity-80 duration-300 bg-opacity-50 p-8 h-[65vh] flex flex-col justify-center rounded-lg'>
               <i className='text-5xl mx-auto text-gray-300 pb-5'><MdArchitecture /></i>
               <h2 className='text-2xl font-bold'>Planning & Concept</h2>
               <p className='py-5'>We develop the full cycle of project documentation & full details. Our clients satisfaction is most</p>
               <button className='border-b w-[30%] pb-1 mx-auto flex items-center gap-2'>Read More <HiOutlineArrowUpRight /></button>
               </div>
          </div>
          <div className='bg-[url("/images/ForAbout/design.png")] bg-cover bg-bottom text-center rounded-lg text-white group'>
               <div className='bg-black hover:bg-opacity-80 duration-300 bg-opacity-50 p-8 h-[65vh] flex flex-col justify-center rounded-lg'>
               <i className='text-5xl mx-auto text-gray-300 pb-5'><MdOutlineHomeWork /></i>
               <h2 className='text-2xl font-bold'>Design</h2>
               <p className='py-5'>We develop the full cycle of project documentation & full details. Our clients satisfaction is most</p>
               <button className='border-b w-[30%] pb-1 mx-auto flex items-center gap-2'>Read More <HiOutlineArrowUpRight /></button>
               </div>
          </div>
          <div className='bg-[url("/images/ForAbout/feature1.jpg")] bg-cover bg-bottom text-center rounded-lg text-white group'>
               <div className='bg-black hover:bg-opacity-80 duration-300 bg-opacity-50 p-8 h-[65vh] flex flex-col justify-center rounded-lg'>
               <i className='text-5xl mx-auto text-gray-300 pb-5'><MdOutlineDesignServices /></i>
               <h2 className='text-2xl font-bold'>Built & Launch</h2>
               <p className='py-5'>We develop the full cycle of project documentation & full details. Our clients satisfaction is most</p>
               <button className='border-b w-[30%] pb-1 mx-auto flex items-center gap-2'>Read More <HiOutlineArrowUpRight /></button>
               </div>
          </div>
         
     </div>
    </>
  )
}

export default Steps;