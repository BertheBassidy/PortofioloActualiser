import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        {/* <img src={Logo} alt='Logo Image' style={{ width: '200px' }} /> */}
        <h3>BASSIDY MOHAMED BERTHE</h3>
      </div>

      {/* menu */}
      <ul className='hidden md:flex nav_Link'>
            <li>
            <Link to='home' smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li>
            <Link to='about' smooth={true} duration={500}>
                About
            </Link>
            </li>
            <li>
            <Link to='skills' smooth={true} duration={500}>
                Skills
            </Link>
            </li>
            <li>
            <Link to='work' smooth={true} duration={500}>
                Work
            </Link>
            </li>
            <li>
            <Link to='contact' smooth={true} duration={500}>
                Contact
            </Link>
            </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[200px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/bassidy-m-berthe-1b9220210/' target='blank'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[200px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/BertheBassidy' target='blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[200px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://wa.me/71876413' target='blank'
            >
              WhatsApp <FaWhatsapp size={30} />
            </a>
          </li>
          <li className='w-[200px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:bassidyberthe99@gmail.com' target='blank'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
// import React,{useState} from 'react'

// import {
//     FaBars,
//     FaTimes,
//     FaGithub,
//     FaLinkedin,
//     FaFacebook,
//     FaLinkedinIn,
//   } from 'react-icons/fa';
//   import { HiOutlineMail } from 'react-icons/hi';
//   import { BsFillPersonLinesFill } from 'react-icons/bs';
// //   import Logo from '../assets/logo.png';
//   import { Link } from 'react-scroll';

// const NavBar = () => {
//     const [nav, setNav] = useState(false);
//     const handleClick = () => setNav(!nav);
//   return (
//     <div className='fixed w-full h-[80px] flex justify-between items-center  px-4 bg-[#0a192f] text-[#f5f5f5] j'>
//         <div>
//             <h3>BASSIDY MOHAMED BERTHE</h3>
//         </div>

//         {/* menu */}
//         <ul className='hidden md:flex nav text-#f5f5f5-900 size-35'>
//             <li className=' text-white-300'>
//                 <Link to='home' smooth={true} duration={500}>
//                 Home
//                 </Link>
//             </li>
//             <li>
//                 <Link to='about' smooth={true} duration={500}>
//                 About
//                 </Link>
//             </li>
//             <li>
//                 <Link to='skills' smooth={true} duration={500}>
//                 Skills
//                 </Link>
//             </li>
//             <li>
//                 <Link to='skills' smooth={true} duration={500}>
//                 Work
//                 </Link>
//             </li>
            
//             <li>
//                 <Link to='contact' smooth={true} duration={500}>
//                 Contact
//                 </Link>
//             </li>
//             </ul>

//             {/* Hamburger */}
//             <div onClick={handleClick} className='md:hidden z-10'>
//             {!nav ? <FaBars /> : <FaTimes />}
//             </div>

//             {/* Mobile menu */}
//             <ul
//             className={
//                 !nav
//                 ? 'hidden'
//                 : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
//             }
//             >
//             <li className='py-6 text-4xl'>
//                 <Link onClick={handleClick} to='home' smooth={true} duration={500}>
//                 Home
//                 </Link>
//             </li>
//             <li className='py-6 text-4xl'>
//                 {' '}
//                 <Link onClick={handleClick} to='about' smooth={true} duration={500}>
//                 About
//                 </Link>
//             </li>
//             <li className='py-6 text-4xl'>
//                 {' '}
//                 <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
//                 Skills
//                 </Link>
//             </li>
//             <li className='py-6 text-4xl'>
//                 {' '}
//                 <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
//                 Work
//                 </Link>
//             </li>
            
//             <li className='py-6 text-4xl'>
//                 {' '}
//                 <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
//                 Contact
//                 </Link>
//             </li>
//         </ul>

        
//     </div>
//   )
// }

// export default NavBar