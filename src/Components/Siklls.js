import React from 'react'
import HTML from '../assets/projects/html.png';
import CSS from '../assets/projects/css.png';
import javaScript from '../assets/projects/javascript.png';
import ReactImg from '../assets/projects/react.png';
import Node from '../assets/projects/node.png';
import FireBase from '../assets/projects/firebase.png';
import GitHub from '../assets/projects/github.png';
import Tailwind from '../assets/projects/tailwind.png';
import Mongo from '../assets/projects/mongo.png';

const Siklls = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#f5f5f5] text-#f5f5f5-300 text-center text-#0a192f mb-20 skill'>
    {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-48'>
            <div className='mb-36'>
            
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#0a192f]' >My Skills</p>
                
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#2125299a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4 text-#0a192f-500 '>HTML</p>
                </div>
                <div className='shadow-md shadow-[#2125299a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#2125299a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javaScript} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#2125299a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#2125299a] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon"  />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#2125299a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                {/* <div className='shadow-md shadow-[#2125299a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                    <p className='my-4'>MONGO DB</p>
                </div> */}
                <div className='shadow-md shadow-[#2125299a] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4 text-#0a192f-500'>TAILWIND</p>
                </div>
                {/* <div className='shadow-md shadow-[#2125299a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                    <p className='my-4'>FIREBASE</p>
                </div> */}
            </div>
        </div>
  </div>
  )
}

export default Siklls