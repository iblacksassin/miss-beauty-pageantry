import React from 'react'
import image from '../public/pageant.jpg'

const More = () => {
  return (
    <div className='bg-gray-800 py-6 px-6'>
      <div className='md:flex justify-evenly sm:flex-row m-auto md:w-full sm:w-80 w-60'>
        <div>
            <img src={image} className="md:w-80 sm:w-80 w-60" />
        </div>
        <div className='md:w-90 sm:w-90 w-65'> 
            <h2 className='md:text-3xl text-xl font-bold text-white pb-3'>Miss Beauty Pageantry</h2>
            <p className='text-white/50 md:text-xl text-sm'>
                Miss Beauty Pageantry contests is organized events that evaluate and celebrate contestants based 
                on a combination of physical appearance, 
                personality, intelligence, talent, and community advocacy. Far more than simple beauty shows, 
                modern pageants provide platforms for women to champion social causes, 
                develop public speaking and leadership skills, and gain global visibility.
            </p>
        </div>
      </div>
    </div>
  )
}

export default More
