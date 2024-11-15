import React from 'react'

const Feature = () => {
  return (
    <>
     <div className='hidden container md:flex justify-between gap-20 py-20'>
          <div className='flex gap-6'>
               <div><img src="/images/ForFeature/feature2.png" alt="" className='w-40' /></div>
               <div>
                    <h2 className='font-bold text-2xl pb-4'>Dedicated Pool of Resources</h2>
                    <p className='text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro sapiente impedit vitae. Voluptates, enim!</p>
               </div>
          </div>

          <div className='flex gap-6'>
               <div><img src="/images/ForFeature/feature3.png" alt="" className='w-40' /></div>
               <div>
                    <h2 className='font-bold text-2xl pb-4'>Complete Architec Analysis</h2>
                    <p className='text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro sapiente impedit vitae. Voluptates, enim!</p>
               </div>
          </div>

          <div className='flex gap-6'>
               <div><img src="/images/ForFeature/feature4.png" alt="" className='w-40' /></div>
               <div>
                    <h2 className='font-bold text-2xl pb-4'>Dedicated Pool of Resources</h2>
                    <p className='text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro sapiente impedit vitae. Voluptates, enim!</p>
               </div>
          </div>
     </div>
    </>
  )
}

export default Feature