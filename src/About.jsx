import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-800 lg:w-full md:w-full sm:w-full w-full'>
      <div className='md:w-120 sm:w-90 w-70 m-auto py-6 px-6'>
        <h2 className='text-center md:text-3xl sm:text-2xl text-xl font-bold text-white'>Miss Beauty Pagaentry</h2>
        <p className='text-white/50 text-center md:text-xl sm:text-sm text-sm'>Vote for your favorite contenstant to win !! <br />
         First Place <span className='text-[coral]'>$50,000 </span> <br />
         Second Place <span className='text-[coral]'>$30,000 </span> <br />
         Third Place <span className='text-[coral]'>$15,000</span>
        </p> 
        
      </div>
    </div>
  )
}

export default About
