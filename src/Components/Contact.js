import React, { useState } from 'react'
import HTML from '../assets/projects/html.png';
import WorkImg from '../assets/projects/workImg.jpeg';
const Contact = () => {
  const [userName, setUserName]= useState("")
  const [userEmail, setUserEmail]= useState("")
  const [userMessage, setUserUserMessage]= useState("")
  console.log(userName)
  console.log(userEmail)
  console.log(userEmail)
  return (
    <div name='contact' className='contact   h-screen bg-[#f5f5f5] text-center flex justify-center items-center p-4 mt-14 ' >
      
        <div>
          <form method='POST' action="https://getform.io/f/ayvvjrgb" className='flex flex-col  -full ' >
            <div className='pb-8'>
              <p className='text-6xl font-bold inline border-b-4 border-pink-600 text-[#0a192f]'>Contact</p>
              <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email</p>
            </div>
            
            <input className='bg-[#f5f5f5] p-2 border border-2 border-black' type="text" placeholder='Name' name='name' value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <input className='my-4 p-2 bg-[#f5f5f5] border border-2 border-black' type="email" placeholder='Email' name='email' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} />
            <textarea className='bg-[#f5f5f5] p-2 border border-2 border-black' name="message" rows="10" placeholder='Message' value={userMessage} onChange={(e)=>setUserUserMessage(e.target.value)}></textarea>
            <button className='text-white bg-primary border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
          </form>
        </div>
      </div>
   
  )
}

export default Contact