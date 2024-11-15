import React from 'react'
import { IoNewspaperOutline } from "react-icons/io5";
import { PiArmchairLight, PiLightbulbFilamentLight } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import { BsBuilding, BsChatDots } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

const WhatWeOffer = () => {
  return (
    <>
     <div className='container pt-12'>
          <div className='text-center lg:w-[45%] md:w-[70%] mx-auto mb-14 px-4 md:px-0'>
               <h3 className='font-bold text-sm uppercase'>what we offer</h3>
               <h2 className='text-4xl font-bold py-5'>The great buildings that changed the world all start with a visionary.</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 items-center gap-5 pb-8 lg:pb-0'>
               <div className='space-y-5'>
                    <div className='border border-gray-300 rounded-xl p-4 flex gap-5'>
                         <div><i><IoNewspaperOutline className='text-5xl bg-gray-100 rounded p-2 txt' /></i></div>
                         <div>
                              <h2 className='font-bold text-xl'>Planning</h2>
                              <p>Rutrum phasellus ante viverra vulputate morbi sollicitudin id odio pretium montes iaculis.</p>
                         </div>
                    </div>
                    <div className='border border-gray-300 rounded-xl p-4 flex gap-5'>
                         <div><i><PiArmchairLight className='text-5xl bg-gray-100 rounded p-2 txt' /></i></div>
                         <div>
                              <h2 className='font-bold text-xl'>Interior Design</h2>
                              <p>Rutrum phasellus ante viverra vulputate morbi sollicitudin id odio pretium montes iaculis.</p>
                         </div>
                    </div>
                    <div className='border border-gray-300 rounded-xl p-4 flex gap-5'>
                         <div><i><VscTools className='text-5xl bg-gray-100 rounded p-2 txt' /></i></div>
                         <div>
                              <h2 className='font-bold text-xl'>Restoration</h2>
                              <p>Rutrum phasellus ante viverra vulputate morbi sollicitudin id odio pretium montes iaculis.</p>
                         </div>
                    </div>
               </div>

               <div className='md:hidden lg:block'>
                    <img src="/images/ForService/offer1.png" alt="" />
               </div>

               <div className='space-y-5'>
                    <div className='border border-gray-300 rounded-xl p-4 flex gap-5'>
                         <div><i><BsBuilding className='text-5xl bg-gray-100 rounded p-2 txt' /></i></div>
                         <div>
                              <h2 className='font-bold text-xl'>Construction</h2>
                              <p>Rutrum phasellus ante viverra vulputate morbi sollicitudin id odio pretium montes iaculis.</p>
                         </div>
                    </div>
                    <div className='border border-gray-300 rounded-xl p-4 flex gap-5'>
                         <div><i><PiLightbulbFilamentLight className='text-5xl bg-gray-100 rounded p-2 txt' /></i></div>
                         <div>
                              <h2 className='font-bold text-xl'>Concept Design</h2>
                              <p>Rutrum phasellus ante viverra vulputate morbi sollicitudin id odio pretium montes iaculis.</p>
                         </div>
                    </div>
                    <div className='border border-gray-300 rounded-xl p-4 flex gap-5'>
                         <div><i><BsChatDots className='text-5xl bg-gray-100 rounded p-2 txt' /></i></div>
                         <div>
                              <h2 className='font-bold text-xl'>Consultation</h2>
                              <p>Rutrum phasellus ante viverra vulputate morbi sollicitudin id odio pretium montes iaculis.</p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     <div className='bg-[url("/images/ForService/offerbg.jpg")] bg-cover bg-fixed'>
          <div className='text-white bg-black bg-opacity-50 h-[70vh] md:h-[50vh] lg:h-[70vh] flex flex-col items-center justify-center'>
          <div className='lg:w-[40%] md:w-[70%] text-center px-4 md:px-0'>
          <h2 className='text-2xl md:text-4xl font-bold'>Honesty and authenticity are the hallmarks of great architecture.</h2>
          <p className='py-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className='bg-[#1F3745] text-white p-3 px-6 rounded flex items-center gap-2 mx-auto'>Discover More <GoArrowRight /></button>
          </div>
          </div>
     </div>
    </>
  )
}

export default WhatWeOffer;