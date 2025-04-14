import React from 'react'
import { pix } from './Pic'

const About = () => {
  return (
    <div id='about' className='p-1'>
      <div className='w-full flex flex-col items-center justify-center p-1'>
        <h2 className='bg-gradient-to-r from-cyan-300 to-orange-400 bg-clip-text text-transparent underline text-2xl max-sm:text-xl font-bold'>ABOUT ME.</h2>
        <hr className='w-[10%] bg-gradient-to-r from-cyan-300 to-orange-400 p-[2px] rounded-full'/>
      </div>
      <div className='flex p-1 max-sm:items-center max-sm:flex-col'>
        <div className='p-5l max-sm:w-[60%] rounded-md'>
          <img src={pix.me} className='h-full w-full rounded-md' alt="Henry" />
        </div>
        <div className='w-full p-2 flex'>
          <p className='text-slate-50'>Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text since the 1500s. When an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  )
}

export default About