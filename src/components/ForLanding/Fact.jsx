import React from "react";

const Fact = () => {
  return (
    <>
      <div className="container flex justify-center items-center py-16 gap-12">
        <div className="relative">
          <h2 className="text-9xl font-bold text-[#F0F7F9]">98</h2>
          <h3 className="text-xl font- absolute inset-0 flex items-center justify-center text-[#11224D]">Product</h3>
        </div> <div className="border h-14 mx-5"></div>
        <div className="relative">
          <h2 className="text-9xl font-bold text-[#F0F7F9]">65</h2>
          <h3 className="text-xl font- absolute inset-0 flex items-center justify-center text-[#11224D]">Client</h3>
        </div> <div className="border h-14 mx-5"></div>
        <div className="relative">
          <h2 className="text-9xl font-bold text-[#F0F7F9]">10</h2>
          <h3 className="text-xl font- absolute inset-0 flex items-center justify-center text-[#11224D]">Years</h3>
        </div> <div className="border h-14 mx-5"></div>
        <div className="relative">
          <h2 className="text-9xl font-bold text-[#F0F7F9]">75</h2>
          <h3 className="text-xl font- absolute inset-0 flex items-center justify-center text-[#11224D]">Projects</h3>
        </div> 
      </div>
    </>
  );
};

export default Fact;
