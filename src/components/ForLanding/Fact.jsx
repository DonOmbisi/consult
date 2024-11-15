import React from "react";

const Fact = () => {
  return (
    <>
      {/* <div className="container flex justify-center items-center py-16 gap-12">
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
      </div> */}

      <div className="container md:flex justify-between items-center py-20 gap-14 px-4 md:px-0 space-y-12 md:space-y-auto">
        <div>
          <h2 className="text-7xl font-bold text-[#1F3745]">92</h2>
          <h3 className="text-2xl font-bold py-2 text-[#1F3745]">No of Clients</h3>
          <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.</p>
        </div>
        <div>
          <h2 className="text-7xl font-bold text-[#1F3745]">10+</h2>
          <h3 className="text-2xl font-bold py-2 text-[#1F3745]">Years of experience</h3>
          <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.</p>
        </div>
        <div>
          <h2 className="text-7xl font-bold text-[#1F3745]">75+</h2>
          <h3 className="text-2xl font-bold py-2 text-[#1F3745]">Completed Projects</h3>
          <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.</p>
        </div>
      </div>
    </>
  );
};

export default Fact;
