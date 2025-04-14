import React, { useEffect, useRef, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import MenuList from './MenuList';

const Header = () => {
  const [menuDrop, setMenuDrop] = useState(false);
  const dropdownRef = useRef(null); 
    const iconRef = useRef(null);
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside); 
      return () => { 
        document.removeEventListener("mousedown", handleClickOutside); 
      }; 
    }, []); 
    const handleDrop= ()=> {
      setMenuDrop(prev => !prev)
    }
    const handleClickOutside = (event) => { 
      if ( dropdownRef.current && !dropdownRef.current.contains(event.target) && iconRef.current && !iconRef.current.contains(event.target)) { 
        setMenuDrop(false);
      } 
    };
  
  return (
    <div className='bg-lude-300  border-b border-b-cyan-600 p-2 w-full flex items-center justify-between'>
        <div className='text-white animate-slideRight border border-cyan-400 rounded-md p-2 font-semibold text-2xl'>Henry.</div>
        <div className='flex head-Content max-md:hidden items-center gap-5 justify-between'>
            <a href='#home' className='text-white  font-semibold'>HOME</a>
            <a href='#about' className='text-white font-semibold'>ABOUT ME</a>
            <a href='#services' className='text-white  font-semibold'>SERVICES</a>
            <a href='#skills' className='text-white  font-semibold'>SKILLS</a>
            <a href='#projects' className='text-white  font-semibold'>PROJECTS</a>
        </div>
        <div className='flex gap-1 items-center'>
          <div ref={iconRef} onClick={handleDrop} className='md:hidden border border-cyan-300 active:bg-slate-500 p-2 rounded-full'>
            <HiMenu  className='text-cyan-300 cursor-pointer text-2xl'/>
            {menuDrop && <MenuList refy={dropdownRef}/>}
          </div>
          <a href='#contact'  className='text-lude-200 hover:box-shadow transition-all ease-in-out inset-0 hover:shadow-cyan-300 rounded-full p-2 bg-cyan-300 animate-slideToTop delay-700 font-semibold'>CONTACT ME</a>
        </div>
        
    </div>
  )
}

export default Header