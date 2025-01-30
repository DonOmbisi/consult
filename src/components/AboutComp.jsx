import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Fact from './ForLanding/Fact';

const AboutComp = () => {
  return (
    <>
     <div className='container flex md:flex-row flex-col  gap-5 items-center px-4 md:px-0'>

          <div className='flex-1 md:ml-12 mt-12 md:mt-0'>
               <h3 className='font-bold text-sm uppercase'>about us</h3>
               <h2 className='text-4xl font-bold py-5 pb-10'>Providing Solutions For Construction, Management & Restoration.</h2>
               <ul className='md:w-[80%]'>
                    <div className='flex gap-5'>
                         <div>
                              <i><IoMdCheckmarkCircleOutline className='text-2xl mt-px' /></i>                              
                         </div>
                         <div>
                         <h2 className='text-lg font-bold'>Certified & Awards winner</h2>
                         <p>Architects and engineers design and build the structure with that location in mind.</p>
                         </div>
                    </div>
                    <div className='flex gap-5 my-6'>
                         <div>
                              <i><IoMdCheckmarkCircleOutline className='text-2xl mt-px' /></i>                              
                         </div>
                         <div>
                         <h2 className='text-lg font-bold'>Work with energetic team</h2>
                         <p>Architects and engineers design and build the structure with that location in mind.</p>
                         </div>
                    </div>
                    <div className='flex gap-5'>
                         <div>
                              <i><IoMdCheckmarkCircleOutline className='text-2xl mt-px' /></i>                              
                         </div>
                         <div>
                         <h2 className='text-lg font-bold'>Professional engineers</h2>
                         <p>Architects and engineers design and build the structure with that location in mind.</p>
                         </div>
                    </div>
               </ul>
          </div>

          <div className='flex-1'>
               <div className='flex gap-5 mt-10 md:mt-0'>
               <img src="/images/about1.jpg" alt="" className='w-[48%] rounded-tl-full' />
               <img src="/images/about2.jpg" alt="" className='w-[48%] rounded-br-full' />
               </div>
          </div>
     </div>
     <Fact />
    </>
  )
}

export default AboutComp