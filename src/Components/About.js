import React from 'react'
import Photo_Bassidy from './Photo_Bassidy.jpg'
import { Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f5f5f5] text-[#0a192f] text-center items-center  about' >
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4 mt-96'>
                <h1 className='text-6xl font-bold inline border-b-4 border-pink-600'>
                 About
                </h1>
            </div>
            </div>
            <div className='max-w-[2000px] w-full grid sm:grid-cols-2 gap-32 px-4'>
                <div className='sm:text-right'>
                    <p className=' Presentation pt-5 text-justify '  >
                        I'm <strong>Bassidy Mohamed Berthé</strong> web developer passionate about creating interactive and responsive websites. I recently learned HTML, CSS, and JavaScript, and I also specialize in using React to build dynamic applications.
                        I enjoy solving problems and learning new technologies to create smooth and engaging user experiences.   
                    </p> 
                </div>
                <div>
                   <img src={Photo_Bassidy} alt="" className='rounded-circle border border-5 border-black profilPhoto ' />
                </div>
          </div>    
       </div>   
   </div>
  )
}

export default About