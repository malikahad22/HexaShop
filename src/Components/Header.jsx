import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import logo from '../images/images/logo.png';
import { Link } from 'react-router-dom';
function Header() {
    const [status,setStatus] = useState(false);
  return (
    <div className=' h-24 bg-slate-100 border-b-4 border-dotted md:bg-white flex justify-between px-14 lg:px-28 md:px-16 items-center'>

        <div className='cursor-pointer'>
            <img src={logo} alt="logo" />
        </div>
        {
            status? 
            <div className='w-full  md:hidden absolute  top-32 left-0 z-10   '>
            <ul className=' space-y-5 w-full pb-5 flex flex-col justify-center items-center  z-10 bg-white'>
                <li className=''><a className='h-10 border-b border-zinc-200 w-full' href="/">Home</a></li>
                <li className=''><a className='h-10 border-b border-zinc-200 '  href="./#Section-2">Men's</a>
                        
                </li>
                <li className=''><a className='h-10 border-b border-zinc-200 ' href="/">Women's</a></li>
                <li className=''><a className='h-10 border-b border-zinc-200 ' href="/">Kid's</a></li>
                <li className=''><a className='h-10 border-b border-zinc-200 ' href="/">Pages</a></li>
                <li className=''><a className='h-10 border-b border-zinc-200 ' href="/">Features</a></li>
                <li className=''><a className='h-10 border-b border-zinc-200 ' href="/">Explore</a></li>
            </ul> 
        </div>:
        <div>
        <ul className=' hidden md:flex'>
            <li><a className='md:px-2 lg:px-5  font-Roboto tracking-widest hover:text-zinc-400 duration-300¦' href="/">Home</a></li>
            <li ><a className='md:px-2 lg:px-5  font-Roboto tracking-widest hover:text-zinc-400 duration-300 h-full relative' href="/">Men's</a>
         
            </li>
            <li><a className='md:px-2 lg:px-5  font-Roboto tracking-widest hover:text-zinc-400 duration-300' href="/">Women's</a></li>
            <li><a className='md:px-2 lg:px-5  font-Roboto tracking-widest hover:text-zinc-400 duration-300' href="/">Kid's</a></li>
            <li className='group'><a className='md:px-2 lg:px-5  font-Roboto tracking-widest hover:text-zinc-400 duration-300 py-5' href="/">Pages</a>
            <div className='absolute top-16 text-sm  z-10 bg-zinc-100 hidden group-hover:flex w-48 py-10 rounded-md shadow-md shadow-black  duration-700 transition-all ease-linear'>
                            <ul className='duration-500 font-poppins font-extralight w-full space-y-5 text-center ' >
                                <li className='border-b-2 hover:scale-105 duration-300 mx-5'><a href="/">About Us</a></li>
                                <li className='border-b-2 hover:scale-105 duration-300 mx-5'><a href="/">Products</a></li>
                                <li className='border-b-2 hover:scale-105 duration-300 mx-5'><Link to='./singleProduct'>Single Products</Link></li>
                                <li className='border-b-2 hover:scale-105 duration-300 mx-5'><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
            </li>
            <li className='group'><a className='md:px-2 lg:px-5  font-Roboto tracking-widest hover:text-zinc-400 duration-300 py-5' href="/">Features</a>
            <div className='absolute top-16 text-sm  z-10 bg-zinc-100 hidden group-hover:flex w-48 py-10 rounded-md shadow-md shadow-black  duration-700 transition-all ease-linear'>
                            <ul className='duration-500   font-extralight font-poppins w-full space-y-5 text-center ' >
                                <li className='border-b-2 hover:scale-105 duration-300 mx-5'><a href="/">Option 1</a></li>
                                <li className='border-b-2 hover:scale-105 duration-300 mx-5'><a href="/">Option 1</a></li>
                                <li className='border-b-2 hover:scale-105 duration-300 mx-5'><a href="/">Option 1</a></li>
                            </ul>
                        </div>
            </li>
            <li><a className='md:px-2 lg:px-5  font-Roboto tracking-widest hover:text-zinc-400 duration-300¦' href="/">Explore</a></li>
        </ul>
    </div>
        }
        <div className=' cursor-pointer md:hidden'>
           {
            status ? <AiOutlineClose onClick={()=>setStatus(!status)} size={30} /> :   <FaBars onClick={()=>setStatus(!status)}  size={30}/>
           }
        </div>

        
    </div>
  )
}
export default Header;