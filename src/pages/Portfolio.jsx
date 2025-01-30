import React from 'react'
import Banner from '../components/Banner'
import PortfolioItem from "../data/portfolio.json";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
     <Banner title="Portfolio" />

     <div>
      <div className='container flex md:flex-row flex-col items-center gap-8 py-20 px-4 md:px-0'>
        <div className='flex-1'>
          <h3 className='font-bold text-sm uppercase mb-5'>Our Project</h3>
          <h2 className='text-4xl font-bold'>We create places that deserve to be called home.</h2>
        </div>
        <a 
            href="https://drive.google.com/file/d/1xPVN1Ff0sgoKo1hNjhMtBsUaxVl3BKcL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            PDF Document
          </a>

        <div className='flex-1'>
          <p className='mb-5'></p>
          <button className='p-3 px-10 bg-[#1F3745] text-white rounded-lg'>Contact</button>
        </div>
      </div>

      <div className='grid md:grid-cols-3 mb-24'>
        {PortfolioItem.map((items, index) => (

            <div key={index} style={{ backgroundImage: `url(${items.image})` }}  className='bg-[url("/images/ForPortfolio/cat1.jpg")] h-[60vh] bg-cover relative group overflow-hidden'>
              <div></div>
              <div className='text-white w-full p-8 bg-black bg-opacity-50 absolute bottom-0 translate-y-64 group-hover:-translate-y-0 duration-500 backdrop-blur-sm'>
              <h2 className='text-2xl font-bold'>{items?.name}</h2>
              <p className='py-3'></p>
              <Link to={`/portfolio/${items?.path}`}>
               <button className='flex items-center gap-2'>View More <GoArrowRight /></button>
              </Link>
              </div>
            </div>

        ))}
      </div>

     </div>
    </>
  )
}

export default Portfolio