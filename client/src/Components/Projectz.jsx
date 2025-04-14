import React from 'react'
import { pix } from './Pic'

const Projectz = () => {
  return (
    <div id='projects'>
        <div className='w-full flex flex-col items-center justify-center p-2'>
            <h2 className='bg-gradient-to-r from-cyan-300 to-orange-400 bg-clip-text text-transparent underline text-2xl max-sm:text-xl font-bold'>My Projects.</h2>
            <hr className='w-[10%] bg-gradient-to-r from-cyan-300 to-orange-400 p-[2px] rounded-full'/>
        </div>
        <div className='grid gap-2 p-2 md:grid-cols-3 max-md:grid-cols-1'>
          <div className='border bg-lude-600 p-2 border-cyan-300 rounded-md'>
            <div>
              <img src={pix.ecomm1} alt="shoplake" />
            </div>
            <div>
              <p className='text-slate-50 font-medium'>Ecommerce Website</p>
              <p className='text-slate-50 font-medium text-xs'>Mern Stack</p>
            </div>
          </div>
          <div className='border bg-lude-600 p-2 border-cyan-300 rounded-md'>
            <div>
              <img src={pix.zdark} alt="zoney" />
            </div>
            <div>
              <p className='text-slate-50 font-medium'>Social Media</p>
              <p className='text-slate-50 font-medium text-xs'>Mern Stack</p>
            </div>
          </div>
          <div className='border bg-lude-600 p-2 border-cyan-300 rounded-md'>
            <div>
              <img src={pix.dep} alt="deepz" />
            </div>
            <div>
              <p className='text-slate-50 font-medium'>Blog Website</p>
              <p className='text-slate-50 font-medium text-xs'>Mern Stack</p>
            </div>
          </div>
          <div className='border bg-lude-600 p-2 border-cyan-300 rounded-md'>
            <div>
              <img src={pix.porto} alt="deepz" />
            </div>
            <div>
              <p className='text-slate-50 font-medium'>Portfolio Website</p>
              <p className='text-slate-50 font-medium text-xs'>Mern Stack</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projectz