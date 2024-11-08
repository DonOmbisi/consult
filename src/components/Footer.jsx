import React from "react";
import { LuPlus } from "react-icons/lu";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[url('/images/footerbg.png')] bg-center text-white">
      <div className="container grid grid-cols-4 gap-20 py-20">
        <div className="">
          <img src="/images/logo2.webp" alt="" className="pb-5" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero error odio repellendus? Adipisci.
          </p>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-5">Useful Links</h2>
          <ul className="leading-9">
            <li className="flex items-center gap-2"><LuPlus />Home</li>
            <li className="flex items-center gap-2"><LuPlus />About</li>
            <li className="flex items-center gap-2"><LuPlus />Service</li>
            <li className="flex items-center gap-2"><LuPlus />Project</li>
            <li className="flex items-center gap-2"><LuPlus />Contact</li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-5">Our Services</h2>
          <ul className="leading-9">
            <li className="flex items-center gap-2"><LuPlus />Architecture Design</li>
            <li className="flex items-center gap-2"><LuPlus />Town Planning</li>
            <li className="flex items-center gap-2"><LuPlus />Structure Design</li>
            <li className="flex items-center gap-2"><LuPlus />Consultation</li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-bold pb-5">Contact Us</h2>
          <ul className="leading-9">
            <li className="flex items-center gap-2"><BiCurrentLocation className="text-xl" />kathmandu, Nepal</li>
            <li className="flex items-center gap-2"><MdOutlineMail className="text-xl" />info@example.com</li>
            <li className="flex items-center gap-2"><MdOutlinePhone className="text-xl" />9801234567</li>
          </ul>
        </div>
      </div> <hr className="border border-gray-500" />

      <div className="flex justify-between container py-5">
        <p>Callegaribuilders copyright © 2022. All Rights Reserved.</p>
        <p>Design & Developed by SysQube Technology</p>
      </div>
    </div>
  );
};

export default Footer;
