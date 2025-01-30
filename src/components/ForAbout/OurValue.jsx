import React from 'react'
// import { GoArrowRight } from 'react-icons/go'
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { CiPen } from "react-icons/ci";

const OurValue = () => {
  return (
    <>
    <div>
    <div className='bg-[url("/images/ForService/ourvaluebg.jpg")] bg-cover bg-center'>
          <div className='text-white bg-black bg-opacity-50 h-[80vh] flex flex-col items-center justify-center pb-12'>
          <div className='md:w-[40%] text-center px-4 md:px-0'>
          <h3 className='text-sm font-bold uppercase'>Our value</h3>
          <h2 className='text-4xl font-bold py-6'>Good architecture begins with good communication</h2>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          </div>
     </div>

     <div className='container grid md:grid-cols-3 gap-8 -mt-28 px-4 md:px-0'>
          <div className='border border-gray-300 drop-shadow p-8 text-center bg-white rounded-lg'>
               <i><PiLightbulbFilamentLight className='text-6xl bg-gray-100 p-3 mx-auto rounded ' /></i>
               <h2 className='text-2xl py-4 pt-6'>Our Vision</h2>
               <p className='text-gray-600'>To be a leading architectural firm that inspires innovative designs, shapes sustainable environments, and enriches the lives of communities worldwide.</p>
          </div>
          <div className='border border-gray-300 drop-shadow p-8 text-center bg-white rounded-lg'>
               <i><BsBuildings className='text-6xl bg-gray-100 p-3 mx-auto rounded ' /></i>
               <h2 className='text-2xl py-4 pt-6'>Our Mission</h2>
               <p className='text-gray-600'>Foster a collaborative and creative work culture that nurtures the growth and development of our talented architects and designers.</p>
          </div>
          <div className='border border-gray-300 drop-shadow p-8 text-center bg-white rounded-lg'>
               <i><CiPen className='text-6xl bg-gray-100 p-3 mx-auto rounded ' /></i>
               <h2 className='text-2xl py-4 pt-6'>Our Motto</h2>
               <p className='text-gray-600'>Contribute to the betterment of communities by creating inclusive and socially responsible architectural designs. "Inspiring Designs, Transforming Spaces"</p>
          </div>

     </div>
    </div>
    </>
  )
}

export default OurValue