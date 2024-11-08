import React from 'react'

const TeamsComp = () => {
  return (
    <div className='bg-[#EEF8FC]'>
    <div className='container'>
     <div className='flex justify-between items-center py-16 pt-20'>
          <div>
               <h2 className='text-4xl font-bold mb-2'>Meet our export team</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div>
               <button className='p-2 px-6 bg-[#1F3745] text-white rounded-lg'>View All</button>
          </div>
     </div>

     <div className='grid grid-cols-2 gap-7 pb-24'>
          <div className='flex bg-white p-5 rounded-lg gap-8 items-center border border-gray-200 shadow-md'>
               <div><img src="/images/ForTeams/teams1.jpg" alt="team image" className='w-64 rounded-lg' /></div>
               <div>
                    <h2 className='text-xl font-bold'>John Andreson, CPA</h2>
                    <p className='pb-8'>Founder & CEO</p>
                         <div><button className='p-1 px-5 mb-3 rounded-xl bg-gray-200 text-gray-600'>Financial strategy</button></div>
                         <div><button className='p-1 px-5 mb-3 rounded-xl bg-gray-200 text-gray-600'>Industry leadership</button></div>
                         <div><button className='p-1 px-5 rounded-xl bg-gray-200 text-gray-600'>Business development</button></div>
               </div>
          </div>
          <div className='flex bg-white p-5 rounded-lg gap-8 items-center border border-gray-200 shadow-md'>
               <div><img src="/images/ForTeams/teams2.jpg" alt="team image" className='w-64 rounded-lg' /></div>
               <div>
                    <h2 className='text-xl font-bold'>Sarah Mitchell, MBA</h2>
                    <p className='pb-8'>Chief Financial Officer</p>
                         <div><button className='p-1 px-5 mb-3 rounded-xl bg-gray-200 text-gray-600'>Financial analysis</button></div>
                         <div><button className='p-1 px-5 mb-3 rounded-xl bg-gray-200 text-gray-600'>Strategic planning</button></div>
                         <div><button className='p-1 px-5 rounded-xl bg-gray-200 text-gray-600'>Operational optimization</button></div>
               </div>
          </div>
     </div>

    </div>
    </div>
  )
}

export default TeamsComp