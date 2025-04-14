import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full'>
        <div className='w-full flex flex-col items-center justify-center p-2'>
            <h2 className='bg-gradient-to-r from-cyan-300 to-orange-400 bg-clip-text text-transparent underline text-2xl max-sm:text-xl font-bold'>My Skills.</h2>
            <hr className='w-[10%] bg-gradient-to-r from-cyan-300 to-orange-400 p-[2px] rounded-full'/>
        </div>
        <div className='gap-2 grid p-2 max-md:grid-cols-1 grid-cols-3'>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <div className='border border-slate-500 rounded-md bg-lude-300'>
              <i className="bx bxl-javascript text-yellow-400 text-6xl"></i>
            </div>
            <div>
              <p className='font-semibold text-slate-50'>JavaScript</p>
              <p className='text-slate-50 text-sm font-semibold'>Interaction Web Development</p>
            </div>
          </div>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <div className='border border-slate-500 rounded-md bg-lude-300'>
              <i className="bx bxl-docker text-blue-300 text-6xl"></i>
            </div>
            <div>
              <p className='font-semibold text-slate-50'>Docker</p>
              <p className='text-slate-50 text-sm font-semibold'>Containerization and Deployment</p>
            </div>
          </div>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <div className='border border-slate-500 rounded-md bg-white'>
              <i className="bx bxl-css3 text-blue-500 text-6xl"></i>
            </div>
            <div>
              <p className='font-semibold text-slate-50'>CSS</p>
              <p className='text-slate-50 text-sm font-semibold'>UI Styling</p>
            </div>
          </div>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <div className='border border-slate-500 rounded-md bg-lude-300'>
              <i className="bx bxl-nodejs text-green-400 text-6xl"></i>
            </div>
            <div>
              <p className='font-semibold text-slate-50'>NodeJS</p>
              <p className='text-slate-50 text-sm font-semibold'>Web Server</p>
            </div>
          </div>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <div className='border border-slate-500 rounded-md bg-lude-300'>
              <i className="bx bxl-react text-cyan-400 text-6xl"></i>
            </div>
            <div>
              <p className='font-semibold text-slate-50'>ReactJS</p>
              <p className='text-slate-50 text-sm font-semibold'>Frontend Framework</p>
            </div>
          </div>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <div className='border border-slate-500 rounded-md bg-lude-300'>
              <i className="bx bxl-mongodb text-green-500 text-6xl"></i>
            </div>
            <div>
              <p className='font-semibold text-slate-50'>MongoDB</p>
              <p className='text-slate-50 text-sm font-semibold'>NoSQL Database</p>
            </div>
          </div>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <div className='border border-slate-500 rounded-md bg-lude-300'>
              <i className="bx bxl-tailwind-css text-blue-300 text-6xl"></i>
            </div>
            <div>
              <p className='font-semibold text-slate-50'>Tailwing</p>
              <p className='text-slate-50 text-sm font-semibold'>UI Styling</p>
            </div>
          </div>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <i className="bx bxl-aws text-lude-300 bg-white rounded-md text-6xl"></i>
            <div>
              <p className='font-semibold text-slate-50'>Amazon Web Services</p>
              <p className='text-slate-50 text-sm font-semibold'>Cloud Computing</p>
            </div>
          </div>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <i className="bx bxl-postgresql bg-white rounded-md text-blue-500 text-6xl"></i>
            <div>
              <p className='font-semibold text-slate-50'>PostgreSQL</p>
              <p className='text-slate-50 text-sm font-semibold'>Relational Database</p>
            </div>
          </div>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <div className='border border-slate-500 rounded-md bg-lude-300'>
              <i className="bx bxl-python text-yellow-300 text-6xl"></i>
            </div>
            <div>
              <p className='font-semibold text-slate-50'>Python</p>
              <p className='text-slate-50 text-sm font-semibold'>Scripting and Data Science</p>
            </div>
          </div>
          <div className='flex border rounded-md border-slate-500 gap-2 p-1 items-center'>
            <i className="bx bxl-kubernetes bg-white rounded-full text-blue-500 text-6xl"></i>
            <div>
              <p className='font-semibold text-slate-50'>Kubernetes</p>
              <p className='text-slate-50 text-sm font-semibold'>Container Orchestration</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills