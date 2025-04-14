import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";
import { pix } from './Pic';
import { FaSquareFacebook } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
    const typedElement = useRef(null);
    useEffect(() => {
        const options = {
          strings: ["Fullstack Developer", "JavaScript Enthusiast", "React Specialist"],
          typeSpeed: 50, // Speed of typing
          backSpeed: 25, // Speed of deleting
          loop: true,    // Loop through phrases
        };
    
        const typed = new Typed(typedElement.current, options);
    
        // Cleanup Typed.js instance on component unmount
        return () => {
          typed.destroy();
        };
      }, []);
    
  return (
    <div id='home' className='text-white relative min-h-screen items-center w-full flex justify-center max-md:items-center p-4'>
      <div className='w-full flex gap-2 max-md:flex-col-reverse'>
        <div className='w-full'>
            <h2 className='text-3xl max-sm:text-xl animate-slideRight'>Hello, it's me</h2>
            <h2 className='text-4xl animate-slideLeft max-sm:text-2xl font-bold'>Chibuzor Henry Amaechi</h2>
            <h1 className='text-3xl max-sm:text-xl animate-slideRight'>And I'm a <span className='text-cyan-300 max-sm:text-2xl font-semibold' ref={typedElement}></span> </h1>
            <p className='animate-slideLeft mt-3'>
                With over four years of experience as a Fullstack Developer, I specialize in crafting scalable and efficient web applications. 
                I have a proven track record of building robust frontend interfaces and backend systems using modern technologies like React, Node.js, MongoDB, PostgreSQL and Express. 
                Passionate about solving complex problems, I strive to deliver impactful digital solutions that meet user needs and business goals.
            </p>
            <div className='flex head-Content2 gap-2 p-2 mt-2'>
              <div className='border hover:transition-all group hover:bg-cyan-300 p-2 rounded-full cursor-pointer border-cyan-300'>
                <FaSquareFacebook className='text-cyan-300 group-hover:text-lude-200' />
              </div>
              <div className='border group hover:transition-all hover:bg-cyan-300 p-2 rounded-full cursor-pointer border-cyan-300'>
                <BsLinkedin  className='text-cyan-300 group-hover:text-lude-200'/>
              </div>
              <div className='border group hover:transition-all p-2 hover:bg-cyan-300 rounded-full cursor-pointer border-cyan-300'>
                <IoLogoWhatsapp className='text-cyan-300 group-hover:text-lude-200 ' />
              </div>
            </div>
            <div className='flex head-Content2 gap-2 p-2 mt-2 items-center'>
              <button className='p-2 rounded-full bg-cyan-300 text-lude-200 font-semibold'>My Resume</button>
              <a href='#contact' className='p-2 rounded-full bg-cyan-300 text-lude-200 font-semibold'>Contact Me</a>
            </div>
        </div>
        <div className='w-full flex  justify-center p-2'>
          <div style={{ boxShadow: '0px 0px 15px 10px #22d3ee' }} className='max-h-96 shadow-cyan-400 shadow-lg rounded-full flex w-96 max-md:w-80 max-sm:h-72 max-sm:w-72 flex-shrink-0 max-md:h-80'>
            <img src={pix?.me} alt="" className=' rounded-full h-full w-full'/>
          </div>
        </div>
        <span className='head-Content1 max-md:hidden'></span>
      </div>
    </div>
  )
}

export default Home