import React from 'react'
import { FaCode } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { FaAppStore } from "react-icons/fa";
import { SiBackendless } from "react-icons/si";
import { VscDebug } from "react-icons/vsc";
import { GrHostMaintenance } from "react-icons/gr";
import { BsDatabaseFillGear } from "react-icons/bs";
import { PiStackPlusFill } from "react-icons/pi";

const Services = () => {
  return (
    <div id='services' className='p-1 flex-col gap-2 flex'>
        <div className='w-full flex flex-col items-center justify-center p-1'>
            <h2 className='bg-gradient-to-r max-sm:text-xl from-cyan-300 to-orange-400 bg-clip-text text-transparent underline text-2xl font-bold'>MY SERVICES.</h2>
            <hr className='w-[10%] bg-gradient-to-r from-cyan-300 to-orange-400 p-[2px] rounded-full'/>
        </div>
        <div className='grid grid-cols-3 max-md:grid-cols-1 gap-2'>
            <div style={{ boxShadow: '0px 0px 10px 0px #22d3ee' }} className='w-full  border p-2 flex flex-col gap-1'>
                <FaCode className='text-cyan-300 font-semibold text-2xl'/>
                <div className='flex gap-2 flex-col'>
                    <h3 className='text-slate-50 font-semibold'>UI/UX Design</h3>
                    <p className='text-slate-50 text-xs'>Implementing animations, transitions, and mobile-friendly layouts to create visually appealing designs.</p>
                    <button className='p-2 w-[40%] font-semibold rounded-full text-sm bg-cyan-300'>Learn More</button>
                </div>
            </div>
            <div style={{ boxShadow: '0px 0px 10px 0px #22d3ee' }} className='w-full  gap-2 p-2 flex flex-col border'>
                <SiWebmoney className='text-cyan-300 font-semibold text-2xl'/>
                <div className='flex gap-2 flex-col'>
                    <h3 className='text-slate-50 font-semibold'>Progressive Web Apps (PWAs)</h3>
                    <p className='text-slate-50 text-xs'>Building PWAs that deliver app-like experiences with offline capabilities and enhanced speed.</p>
                    <button className='p-2 w-[40%] font-semibold rounded-full text-sm bg-cyan-300'>Learn More</button>
                </div>
            </div>
            <div style={{ boxShadow: '0px 0px 10px 0px #22d3ee' }} className='w-full  p-2 flex flex-col gap-2 border'>
                <FaAppStore className='text-cyan-300 font-semibold text-2xl'/>
                <div className='flex gap-2 flex-col'>
                    <h3 className='text-slate-50 font-semibold'>Tech Consulting</h3>
                    <p className='text-slate-50 text-xs'>Offering consultations to businesses on the best technologies to use for their projects.</p>
                    <button className='p-2 w-[40%] font-semibold rounded-full text-sm bg-cyan-300'>Learn More</button>
                </div>
            </div>
            <div style={{ boxShadow: '0px 0px 10px 0px #22d3ee' }} className='w-full  p-2 flex flex-col gap-2 border'>
                <SiBackendless className='text-cyan-300 font-semibold text-2xl'/>
                <div className='flex gap-2 flex-col'>
                    <h3 className='text-slate-50 font-semibold'>Backend Development</h3>
                    <p className='text-slate-50 text-xs'>Designing and implementing robust server-side logic using Node.js, Python, or PHP. Likewise, Creating and managing APIs (RESTful or GraphQL) for seamless communication between frontend and backend systems.</p>
                    <button className='p-2 w-[40%] font-semibold rounded-full text-sm bg-cyan-300'>Learn More</button>
                </div>
            </div>
            <div style={{ boxShadow: '0px 0px 10px 0px #22d3ee' }} className='w-full  flex flex-col gap-2 p-2 border'>
                <PiStackPlusFill className='text-cyan-300 font-semibold text-2xl'/>
                <div className='flex gap-2 flex-col'>
                    <h3 className='text-slate-50 font-semibold'>FULLSTACK App Dev</h3>
                    <p className='text-slate-50 text-xs'>Delivering end-to-end solutions, integrating frontend, backend, and database systems into a cohesive application.</p>
                    <button className='p-2 w-[40%] font-semibold rounded-full text-sm bg-cyan-300'>Learn More</button>
                </div>
            </div>
            <div style={{ boxShadow: '0px 0px 10px 0px #22d3ee' }} className='w-full  p-2 flex flex-col gap-2 border'>
                <AiFillApi className='text-cyan-300 font-semibold text-2xl'/>
                <div className='flex gap-2 flex-col'>
                    <h3 className='text-slate-50 font-semibold'>API Integration</h3>
                    <p className='text-slate-50 text-xs'>Integrating third-party APIs such as payment gateways (Stripe, PayPal), social logins, or data services. Custom API development for unique client requirements.</p>
                    <button className='p-2 w-[40%] font-semibold rounded-full text-sm bg-cyan-300'>Learn More</button>
                </div>
            </div>
            <div style={{ boxShadow: '0px 0px 10px 0px #22d3ee' }} className='w-full  p-2 flex flex-col gap-2 border'>
                <VscDebug className='text-cyan-300 font-semibold text-2xl'/>
                <div className='flex gap-2 flex-col'>
                    <h3 className='text-slate-50 font-semibold'>Debugging and Maintenance</h3>
                    <p className='text-slate-50 text-xs'>Diagnosing and resolving bugs or issues in existing applications, As well as Providing ongoing support and updates to ensure the application evolves with client needs.</p>
                    <button className='p-2 w-[40%] font-semibold rounded-full text-sm bg-cyan-300'>Learn More</button>
                </div>
            </div>
            <div style={{ boxShadow: '0px 0px 10px 0px #22d3ee' }} className='w-full  p-2 flex flex-col gap-2 border'>
                <GrHostMaintenance className='text-cyan-300 font-semibold text-2xl'/>
                <div className='flex gap-2 flex-col'>
                    <h3 className='text-slate-50 font-semibold'>Deployment and Hosting</h3>
                    <p className='text-slate-50 text-xs'>Deploying applications to platforms like AWS, Microsoft Azure, Netlify, or Vercel. Likewise, Ensuring applications are secure, scalable, and maintainable.</p>
                    <button className='p-2 w-[40%] font-semibold rounded-full text-sm bg-cyan-300'>Learn More</button>
                </div>
            </div>
            <div style={{ boxShadow: '0px 0px 10px 0px #22d3ee' }} className='w-full  p-2 flex flex-col gap-2 border'>
                <BsDatabaseFillGear className='text-cyan-300 font-semibold text-2xl'/>
                <div className='flex gap-2 flex-col'>
                    <h3 className='text-slate-50 font-semibold'>Database Management</h3>
                    <p className='text-slate-50 text-xs'>Setting up and maintaining databases like MongoDB, PostgreSQL, or MySQL. Also, Optimizing database performance and ensuring secure storage of user data.</p>
                    <button className='p-2 w-[40%] font-semibold rounded-full text-sm bg-cyan-300'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services