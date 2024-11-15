import React from 'react'
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const AboutCompany = () => {
  return (
    <>
     <div className='container py-24 pb-28 md:flex gap-16 items-center px-4 md:px-0'>
          <div className='flex-1 pb-14 md:pb-0'><img src="/images/ForAbout/about1.png" alt="" /></div>
          <div className='flex-1'>
               <h3 className='font-bold text-sm uppercase'>about our company</h3>
               <h2 className='text-4xl font-bold pt-3 w-[90%] tracking-wide'>Artfully Blending Interior Designs & Style</h2>
               <h2 className='py-6 text-3xl flex items-center gap-3'><span className='text-5xl font-bold'>10+</span> Years of Experiences</h2>
               <p className='pb-8'>Our core business is all about aligning our clients’ brands and businesses with environments crafted around real people’s wants and needs, seeking to balance brand expression with end-user ergonomics. Specialize in mixed-use projects.</p>
               <ul className='grid md:grid-cols-2 gap-4'>
                    <li className='flex items-center gap-3'><IoCheckmarkDoneOutline className='text-xl' />No hidden commission</li>
                    <li className='flex items-center gap-3'><IoCheckmarkDoneOutline className='text-xl' />3D Design Included</li>
                    <li className='flex items-center gap-3'><IoCheckmarkDoneOutline className='text-xl' />Fully Vastu Optimized</li>
                    <li className='flex items-center gap-3'><IoCheckmarkDoneOutline className='text-xl' />Personalized Designs</li>
               </ul>
          </div>
     </div>
    </>
  )
}

export default AboutCompany