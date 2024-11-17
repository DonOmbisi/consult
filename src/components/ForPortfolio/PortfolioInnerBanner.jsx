import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { RiArrowRightWideLine } from "react-icons/ri";

const PortfolioInnerBanner = () => {
     const {category} = useParams();

  return (
    <>
     <div className='bg-[url("/images/ForPortfolio/portfoliobanner.jpg")] bg-cover bg-fixed'>
          <div className='h-[100vh] flex flex-col items-center justify-center bg-black text-white bg-opacity-30'>
               <h3 className='pb-5 font-bold text-lg uppercase flex items-center gap-1'><Link to="/portfolio">Portfolio</Link> <RiArrowRightWideLine /> <span className=''>{category}</span></h3>
               <h2 className='font-bold text-4xl md:w-[50%] text-center px-4 md:px-0'>Innovative and sustainable, our architecture stands out with style.</h2>
          </div>
     </div>
    </>
  )
}

export default PortfolioInnerBanner