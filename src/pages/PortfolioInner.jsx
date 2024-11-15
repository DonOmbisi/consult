import React from 'react'
import PortfolioInnerBanner from '../components/ForPortfolio/PortfolioInnerBanner'

const PortfolioInner = () => {
  return (
    <>
    <PortfolioInnerBanner />
    <div>
     <div className='bg-[url("/images/ForPortfolio/port1.jpg")] bg-cover bg-fixed'>
     <div className='h-[100vh] relative'>
          <div className='md:w-[50%] text-white absolute bottom-0 bg-black bg-opacity-50 backdrop-blur-md p-8 md:p-12 rounded-tr-3xl'>
               <h2 className='text-4xl font-bold pb-5'>Project 1</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate veritatis atque eligendi repellat, nihil velit quidem et dignissimos voluptas!</p>
          </div>
     </div>
     </div>

     <div className='bg-[url("/images/ForPortfolio/port2.jpg")] bg-cover bg-fixed'>
     <div className='h-[100vh] relative'>
          <div className='md:w-[50%] text-white absolute bottom-0 bg-black bg-opacity-50 backdrop-blur-md p-8 md:p-12 rounded-tr-3xl'>
               <h2 className='text-4xl font-bold pb-5'>Project 2</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate veritatis atque eligendi repellat, nihil velit quidem et dignissimos voluptas!</p>
          </div>
     </div>
     </div>

     <div className='bg-[url("/images/ForPortfolio/port3.jpg")] bg-cover bg-fixed'>
     <div className='h-[100vh] relative'>
          <div className='md:w-[50%] text-white absolute bottom-0 bg-black bg-opacity-50 backdrop-blur-md p-8 md:p-12 rounded-tr-3xl'>
               <h2 className='text-4xl font-bold pb-5'>Project 3</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate veritatis atque eligendi repellat, nihil velit quidem et dignissimos voluptas!</p>
          </div>
     </div>
     </div>

     <div className='bg-[url("/images/ForPortfolio/port4.jpg")] bg-cover bg-fixed'>
     <div className='h-[100vh] relative'>
          <div className='md:w-[50%] text-white absolute bottom-0 bg-black bg-opacity-50 backdrop-blur-md p-8 md:p-12 rounded-tr-3xl'>
               <h2 className='text-4xl font-bold pb-5'>Project 4</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate veritatis atque eligendi repellat, nihil velit quidem et dignissimos voluptas!</p>
          </div>
     </div>
     </div>
     
    </div>
    </>
  )
}

export default PortfolioInner