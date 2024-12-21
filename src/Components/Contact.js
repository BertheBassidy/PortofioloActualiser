import React from 'react'


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#f5f5f5] text-center flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ayvvjrgb" className='flex flex-col w-2000 -full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#0a192f]'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email</p>
            </div>
            <input className='bg-[#f5f5f5] p-2 border border-2 border-black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f5f5f5] border border-2 border-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f5f5f5] p-2 border border-2 border-black' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white bg-primary border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
        



    </div>















        





       
                       








  )
}

export default Contact