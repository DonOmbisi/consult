import React from 'react'

const Banner = ({title}) => {
  return (
    <div className='bg-[url("/images/bannerbg.jpg")] bg-cover bg-center'>
     <div className='text-center text-white'>
          <h2 className='text-5xl font-bold bg-blue-950 bg-opacity-50 h-[70vh] flex flex-col justify-center pt-20'>{title}</h2>
     </div>
    </div>
  )
}

export default Banner