import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const OurService = () => {
  return (
    <>
      <div className="container py-20 flex md:flex-row flex-col-reverse gap-16 items-center px-4 md:px-0">
        <div className="flex-1">
          <img src="/images/ForService/ourservice1.jpg" alt="" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-sm uppercase">Our service</h3>
          <h2 className="text-4xl font-bold pt-3 w-[90%] tracking-wide">
            Architecture adds efficiency to every space in your life.
          </h2>
          <p className="py-5 pb-8">
            
          </p>
          <ul className="grid grid-cols-1 gap-4">
            <li className="flex items-center gap-3">
              <IoCheckmarkDoneOutline className="text-xl" />
              No hidden commission
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkDoneOutline className="text-xl" />
              3D Design Included
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkDoneOutline className="text-xl" />
              Fully Vastu Optimized
            </li>
            <li className="flex items-center gap-3">
              <IoCheckmarkDoneOutline className="text-xl" />
              Personalized Designs
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurService;
