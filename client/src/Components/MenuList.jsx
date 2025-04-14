import React from 'react'

const MenuList = ({refy}) => {
  return (
    <div ref={refy} className='absolute right-3 shadow-lg top-14 gap-2 p-1 w-40 bg-lude-500 z-10 flex flex-col rounded'>
        <div className='gap-2  justify-center  border bg-facebookDark-500 border-slate-300  active:bg-green-300 hover:border-green-300 hover:border cursor-pointer font-semibold flex items-center p-1 rounded-md'>
          <a href='#home' className='dark:text-slate-200 text-slate-100 font-semibold'>Home</a>
        </div>
        <div className='gap-2 justify-center  border bg-facebookDark-500 border-slate-300  active:bg-green-300 hover:border-green-300 hover:border cursor-pointer font-semibold flex items-center p-1 rounded-md'>
          <a href='#about' className='dark:text-slate-200 text-slate-100 font-semibold'>About</a>
        </div>
        <div className='gap-2  justify-center  border bg-facebookDark-500 border-slate-300  active:bg-green-300 hover:border-green-300 hover:border cursor-pointer font-semibold flex items-center p-1 rounded-md'>
          <a href='#services' className='dark:text-slate-200 text-slate-100 font-semibold'>Services</a>
        </div>
        <div className='gap-2  justify-center  border bg-facebookDark-500 border-slate-300  active:bg-green-300 hover:border-green-300 hover:border cursor-pointer font-semibold flex items-center p-1 rounded-md'>
          <a href='#skills' className='dark:text-slate-200 text-slate-100 font-semibold'>Skills</a>
        </div>
        <div className='gap-2  justify-center  border bg-facebookDark-500 border-slate-300  active:bg-green-300 hover:border-green-300 hover:border cursor-pointer font-semibold flex items-center p-1 rounded-md'>
          <a href='#projects' className='dark:text-slate-200 text-slate-100 font-semibold'>Projects</a>
        </div>
    </div>
  )
}

export default MenuList