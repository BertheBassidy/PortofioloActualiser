import React from 'react'
import Photo_Bassidy from './Photo_Bassidy.jpg'
import { Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#f5f5f5] text-[#0a192f]' >
        {/* <div className='flex flex-col justify-center items-center w-full h-full'> */}
            <Row assName='Row' className='text-center justify-center    '>
                <Col md={12} lg={8}>
                     
                    
                    <p className='text-4xl  font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                    
                    <p className='pt-10 text-justify me-10 ms-10' >
                        I'm <strong>Bassidy Mohamed Berthé</strong> web developer passionate about creating interactive and responsive websites. I recently learned HTML, CSS, and JavaScript, and I also specialize in using React to build dynamic applications.
                        I enjoy solving problems and learning new technologies to create smooth and engaging user experiences.
                            
                           
                    </p> 
                </Col>
                <Col md={12} lg={4}>
                    <img src={Photo_Bassidy} alt="" className='rounded-circle border border-5 border-black profilPhoto ms-10' />
                </Col>
           
                
                
            </Row>
        {/* </div> */}
   </div>
  )
}

export default About