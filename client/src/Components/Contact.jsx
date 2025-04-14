import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  
  return (
    <div id='contact' className='p-1 flex flex-col gap-2'>
      <div className='w-full flex flex-col items-center justify-center p-1'>
        <h2 className='bg-gradient-to-r from-cyan-300 to-orange-400 bg-clip-text text-transparent underline text-2xl max-sm:text-xl font-bold'>Contact Me.</h2>
        <hr className='w-[10%] bg-gradient-to-r from-cyan-300 to-orange-400 p-[2px] rounded-full'/>
      </div>
      <div className='grid md:grid-cols-2 max-md:gap-2 max-md:grid-cols-1'>
        <div className='flex flex-col gap-3'>
          <h3 className=' text-xl text-orange-300 font-semibold'>Lets Talk</h3>
          <p className='text-slate-50 text-sm'>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can reach out to me anytime.</p>
          <div className='text-sm w-full flex-col flex gap-4'>
            <p className='text-slate-50 flex items-center gap-2'><span className='text-cyan-300'><MdEmail /></span>amaechihenrychibuzor@gmail.com</p>
            <p className='text-slate-50 flex items-center gap-2'><span className='text-cyan-300'><FaPhoneVolume /></span>+234705218910</p>
            <p className='text-slate-50 flex items-center gap-2'><span className='text-cyan-300'><FaLocationDot /></span>Imo state, Nigeria</p>
          </div>
        </div>
        <form action={'https://formspree.io/f/xnnpllnq'} method='POST' className='flex flex-col gap-2 p-1'>
          <div>
            <p className='text-slate-50 text-sm'>Your Name</p>
            <input name='name' required className='w-full bg-lude-700 p-2 rounded-md outline-none text-slate-300' type="text" placeholder='Enter your name' />
          </div>
          <div>
            <p className='text-slate-50 text-sm'>Your Email</p>
            <input name='email' required className='w-full bg-lude-700 p-2 rounded-md outline-none text-slate-300' placeholder='Enter your email' type="text" />
          </div>
          <div>
            <p className='text-slate-50 text-sm'>Your Message</p>
            <textarea name='message' className='w-full bg-lude-700 p-2 rounded-md outline-none text-slate-300' placeholder='Enter message here...'  rows="5" cols="16" required></textarea>
          </div>
          <div className='w-full'>
            <button className='bg-cyan-300 font-bold active:bg-cyan-700 p-2 rounded-full w-[40%]' type='submit'>Submit</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Contact