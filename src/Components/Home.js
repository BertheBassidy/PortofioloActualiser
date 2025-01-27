import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#f5f5f5] mb-48'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 myName '>Hi, my name is</p>
        {/* <h2 className='text-4xl sm:text-9xl font-bold text-[#0a192f] name'>
          Bassidy Mohamed Berthé
        </h2> */}
        <h2 className='text-4xl sm:text-7xl font-bold text-[#0a192f]'>
          Bassidy Mohamed Berthé
        </h2>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#0a192f] mb-60'>
          I'm a Front-end Developer junior.
        </h2>
        {/* <p className='text-[#0a192f] py-4 max-w-[700px] text-justify presentation'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p> */}
        
      </div>


    </div>
  )
}

export default Home