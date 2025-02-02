import React from 'react'
import Banner from '../components/Banner'
import { CiLocationOn, CiPhone, CiMail, CiUser, CiCircleInfo, CiPen } from "react-icons/ci";
import { SlScreenSmartphone } from "react-icons/sl";

const Contact = () => {
  return (
    <>
     <Banner title="Contact Us" />

     <div className='container md:flex gap-5 py-24 items-center px-4 md:px-0'>
          <div className='flex-1 pb-16 md:pb-0'>
               <h3 className='uppercase text-sm tracking-widest font-bold'>contact us</h3>
               <div className='py-8 pt-5'>
               <h2 className='text-5xl md:text-6xl font-bold text-[#1F3745]'>Have Questions?</h2>
               <h2 className='text-5xl md:text-6xl font-bold text-[#1F3745]'>Get in Touch!</h2>
               </div>
               <p className='w-[90%] pb-8'></p>
               <ul className='leading-10'>
                    <li className='flex items-center gap-3'><CiLocationOn className='text-xl' />Nairobi, Kenya</li>
                    <li className='flex items-center gap-3'><CiPhone className='text-xl' />+254202013921 / 0722885687</li>
                    <li className='flex items-center gap-3'><CiMail className='text-xl' />gridconsulteng@gmail.com</li>
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
          <div className='container rounded-lg overflow-hidden border border-gray-300 shadow-lg mb-20 w-full h-[60vh] md:h-[40vh] lg:h-[60vh]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3441071958964!2d36.740874974543765!3d-1.3327257986546388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1ad968ce8f5f%3A0xa7eba0eb79e2c5a!2sProfessional%20House%2C%20Professional%20Consultants%20Ltd!5e1!3m2!1sen!2ske!4v1738255311384!5m2!1sen!2ske" width="100%" height="100%" style={{border: 0, outline: "none", filter: "grayscale(0.5) contrast(1.2) hue-rotate(180deg) opacity(0.8)"}} referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
    </>
  )
}

export default Contact