import React from 'react'

const OurClient = () => {
  return (
    <>
     <div className='container md:flex gap-12 items-center py-16 px-4 md:px-0'>
          <div className='flex-1 pb-12 md:pb-0'>
               <h3 className='font-bold text-sm uppercase'>Our Clients</h3>
               <h2 className='text-4xl font-bold py-3 pb-6'>Trusted by architects worldwide, we create enduring, inspiring designs.</h2>
               <p>Tristique pharetra mauris rutrum consequat egestas felis id laoreet nascetur nec at. Fames conubia bibendum imperdiet eleifend tortor aliquam senectus orci. Euismod aliquam sit nullam amet nisi dis quam iaculis risus consectetuer tincidunt.</p>
          </div>

          <div className='flex-1 grid grid-cols-2 md:grid-cols-3 gap-4'>
               <img src="/images/ForClients/logo1.png" alt="" />
               <img src="/images/ForClients/logo2.png" alt="" />
               <img src="/images/ForClients/logo3.png" alt="" />
               <img src="/images/ForClients/logo4.png" alt="" />
               <img src="/images/ForClients/logo5.png" alt="" />
               <img src="/images/ForClients/logo6.png" alt="" />
               <img src="/images/ForClients/logo7.png" alt="" />
               <img src="/images/ForClients/logo8.png" alt="" />
               <img src="/images/ForClients/logo9.png" alt="" />
          </div>
     </div>
    </>
  )
}

export default OurClient