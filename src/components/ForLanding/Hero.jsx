import React from "react";

const Hero = () => {
  return (
    <>
      {/* <div className="flex items-center bg-[#F3F0EE] text-gray-200 pb-8 relative font-vastago">
        <div className="text-7xl flex-1 ml-[95px] mb-8 font-bold z-20">
          <h2>Innovation & Disruption for a</h2>
          <h2 className="text-9xl absolute font-light tracking-tight">
            <span className="text-[#897968]">Positive</span> Impact
          </h2>
          <button className="text-lg mt-48 text-[#897968] border p-2 px-6 border-[#897968]">Find Out More</button>
        </div>
        <div className="flex-1 relative">
          <div className="flex gap-">
          <img
            src="/images/herobg.jpg"
            alt="hero bg"
            className="rounded-l-full w-full object-cover h-[95vh]"
          />
          <img src="/images/herobg3.png" alt="" />
          </div>
          <div className="h-[95vh] w-full absolute z-10 bg-[#F3F0EE] top-0 bg-opacity-40"></div>
        </div>
      </div> */}

      <div className="bg-[url('/images/mainherobg.jpg')] pb-16 pt-6 h-[100vh] bg-cover bg-left-top">
        <div className="container flex gap-16 items-center">
        <div className="w-[60%]">
          <div className="text-black text-[75px] leading-[5rem]">
            <h2>Innovation & Disruption for a</h2>
            <h2 className="">
              <span className="text-[#897968]">Positive</span> Impact
            </h2>
            <button className="text-lg mt-12 text-[#897968] border p-2 px-6 border-[#897968] rounded-lg">
              Find Out More
            </button>
          </div>
        </div>

        <div className="w-[40%] relative h-[100vh]">
          {/* <div className="flex">
          <img src="/images/herobg.jpg" alt="" className="w-[40%] h-[70vh] rounded-t-full rounded-b-full object-cover absolute left-16 bottom-0" />
          <div className="absolute w-[40%] h-[70vh] rounded-t-full rounded-b-full bg-black opacity-40 left-16 bottom-0"></div>
          <img src="/images/herobg3.png" alt="" className="w-[40%] h-[70vh] rounded-t-full rounded-b-full object-cover absolute right-8 " />
          <div className="absolute right-8  w-[40%] h-[70vh] rounded-t-full rounded-b-full bg-black opacity-40"></div>
          </div> */}
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;