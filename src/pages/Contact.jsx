import React from 'react'
import Banner from '../components/Banner'
import { CiLocationOn, CiPhone, CiMail, CiUser, CiCircleInfo, CiPen } from "react-icons/ci";
import { SlScreenSmartphone } from "react-icons/sl";

const Contact = () => {
  return (
    <>
     <Banner title="Contact Us" />

     <div className='container flex gap-5 py-24 items-center'>
          <div className='flex-1'>
               <h3 className='uppercase text-sm tracking-widest font-bold'>contact us</h3>
               <div className='py-8 pt-5'>
               <h2 className='text-6xl font-bold text-[#1F3745]'>Have Questions?</h2>
               <h2 className='text-6xl font-bold text-[#1F3745]'>Get in Touch!</h2>
               </div>
               <p className='w-[90%] pb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae reprehenderit omnis quo sed repellat cupiditate.</p>
               <ul className='leading-10'>
                    <li className='flex items-center gap-3'><CiLocationOn className='text-xl' />Kathmandu, Nepal</li>
                    <li className='flex items-center gap-3'><CiPhone className='text-xl' />980134567</li>
                    <li className='flex items-center gap-3'><CiMail className='text-xl' />info@example.com</li>
               </ul>
          </div>

          <div className='flex-1'>
               <div className='grid grid-cols-2 gap-7 gap-y-12 mb-14'>
               <div className='border-b border-gray-400 flex gap-2 pb-2'><CiUser className='text-2xl text-[#1F3745]' /><input type="text" placeholder='Name' className='bg-transparent placeholder:text-black focus:outline-none w-full' /></div>
               <div className='border-b border-gray-400 flex gap-2 pb-2'><CiMail className='text-2xl text-[#1F3745]' /><input type="email" placeholder='Email' className='bg-transparent placeholder:text-black focus:outline-none w-full' /></div>
               <div className='border-b border-gray-400 flex gap-2 pb-2'><SlScreenSmartphone className='text-2xl text-[#1F3745]' /><input type="text" placeholder='Phone' className='bg-transparent placeholder:text-black focus:outline-none w-full' /></div>
               <div className='border-b border-gray-400 flex gap-2 pb-2'><CiCircleInfo className='text-2xl text-[#1F3745]' /><input type="text" placeholder='Subject' className='bg-transparent placeholder:text-black focus:outline-none w-full' /></div>
               <div className='border-b border-gray-400 flex gap-2 pb-2 col-span-2'><CiPen className='text-2xl text-[#1F3745]' /><textarea type="text" placeholder='Message' className='bg-transparent placeholder:text-black focus:outline-none w-full h-20' /></div>
               </div>
               <button className='p-3 px-6 bg-[#1F3745] text-white flex items-center gap-1 rounded'>Get in Touch</button>
          </div>
     </div>
    </>
  )
}

export default Contact