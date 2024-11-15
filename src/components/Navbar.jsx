import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down
      setShowNavbar(false);
    } else {
      // If scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`text-white fixed top-5 z-50 container right-0 left-0 transition-transform duration-500 px-3 md:px-0 ${
          showNavbar ? 'translate-y-0' : '-translate-y-[8rem]'}`}>
      <div className='p-5 px-6 flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-[7px] rounded-full'>
        <div><img src="/images/logo2.webp" alt="logo" className='w-36' /></div>
        <div>
          <ul className='md:flex items-center gap-8 hidden'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/teams"><li>Our Teams</li></Link>
            <Link to="/service"><li>Services</li></Link>
            <Link to="/portfolio"><li>Portfolio</li></Link>
            <Link className='hidden md:block lg:hidden' to="/contact"><li>Contact</li></Link>
            <Link className='hidden lg:block' to="/contact"><li className='p-3 bg-white text-black rounded-full px-8'>Contact</li></Link>
          </ul>

          <button className='md:hidden text-2xl'><RiMenu4Line /></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;