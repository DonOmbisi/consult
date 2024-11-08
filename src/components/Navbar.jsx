import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='text-white fixed top-5 z-50 container right-0 left-0'>
     <div className='p-5 px-6 flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-[7px] rounded-full'>
          <div><img src="/images/logo2.webp" alt="logo" className='w-36' /></div>
          <div>
               <ul className='flex items-center gap-8'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/teams"><li>Our Teams</li></Link>
                    <Link to="/service"><li>Services</li></Link>
                    <Link to="/portfolio"><li>Portfolio</li></Link>
                    <Link to="/contact"><li className='p-3 bg-white text-black rounded-full px-8'>Contact</li></Link>
               </ul>
          </div>
     </div>
    </div>
  )
}

export default Navbar;