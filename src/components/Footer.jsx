import React from "react";
import { LuPlus } from "react-icons/lu";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[url('/images/footerbg.png')] bg-center text-white">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-20 py-20 px-4 md:px-0">
        <div className="">
          <img src="/images/logo2.webp" alt="" className="pb-5" />
          <p className="text-sm">
            
          </p>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-5">Useful Links</h2>
          <ul className="leading-9">
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Home</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />About</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Service</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Project</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Contact</li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-5">Our Services</h2>
          <ul className="leading-9">
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Architecture Design</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Town Planning</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Structure Design</li>
            <li className="flex items-center gap-2 group"><LuPlus className="group-hover:rotate-180 duration-500" />Consultation</li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-5">Contact Us</h2>
          <ul className="leading-9">
            <li className="flex items-center gap-2"><BiCurrentLocation className="text-xl" />Nairobi, Kenya</li>
            <li className="flex items-center gap-2"><MdOutlineMail className="text-xl" />info@gridconsult.co.ke/gridconsulteng@gmail.com</li>
            <li className="flex items-center gap-2"><MdOutlinePhone className="text-xl" />+254 202013921 / 0722885687</li>
          </ul>
        </div>
      </div> <hr className="border border-gray-500" />

      <div className="md:flex justify-between container py-5 text-center">
        <p className="pb-4 md:pb-0">GAIA copyright © 2025. All Rights Reserved.</p>
        <p>Design & Developed by GAIA Technology</p>
      </div>
    </div>
  );
};

export default Footer;
