import React from 'react'
import {BsFillSendFill} from 'react-icons/bs';
function Section7() {
  return (
    <div className='flex flex-col md:flex-row p-24 space-y-10 justify-center items-center space-x-10 border-b-4 border-dotted' >
        <div>
            <p className='text-4xl text-zinc-700 font-semibold font-Roboto leading-[70px]'>By Subscribing To Our Newsletter You Can Get 30% Off</p>
            <p className='italic text-zinc-500'>Details to details is what makes Hexashop different from the other themes.</p>

            <div className='flex flex-col md:flex-row w-full md:space-x-8 md:space-y-0 space-y-5 pt-10 '>
                <input className='w-[300px] h-10 outline-none border border-zinc-700 px-5 italic placeholder-zinc-700' type="text" placeholder='Your Name' />
                <input className='w-[300px] h-10 outline-none border border-zinc-700 px-5 italic placeholder-zinc-700' type="text" placeholder='Your Email Address' />
                <BsFillSendFill className='w-10 h-10 p-3 bg-zinc-700 cursor-pointer text-white '/>
            </div>
        
        </div>

        <div className='flex justify-center items-center'>

            <div className='space-y-5'>
                    <div>
                        <p className='text-xl font-Roboto text-zinc-700 font-semibold tracking-wide'>Store Location:</p>
                        <p className='text-zinc-600 text-md font-medium  '>Sunny Isles Beach, FL 33160, United States</p>
                    </div>

                    <div>
                        <p className='text-xl font-Roboto text-zinc-700 font-semibold tracking-wide'>Phone:</p>
                        <p className='text-zinc-600 text-md font-medium  '>010-020-0340</p>
                    </div>

                    <div>
                        <p className='text-xl font-Roboto text-zinc-700 font-semibold tracking-wide'> Office Location:</p>
                        <p className='text-zinc-600 text-md font-medium  '>North Miami Beach</p>
                    </div>
            </div>

            <div className='space-y-5'>

                    <div>
                        <p className='text-xl font-Roboto text-zinc-700 font-semibold tracking-wide'>Work Hours:</p>
                        <p className='text-zinc-600 text-md font-medium  '>07:30 AM - 9:30 PM Daily</p>
                    </div>

                    <div>
                        <p className='text-xl font-Roboto text-zinc-700 font-semibold tracking-wide'>Email:</p>
                        <p className='text-zinc-600 text-md font-medium  '>info@company.com</p>
                    </div>

                    <div>
                        <p className='text-xl font-Roboto text-zinc-700 font-semibold tracking-wide'>Social Media:</p>
                        <p className='text-zinc-600 text-md font-medium  '>acebook, Instagram,<br/> Behance, Linkedin</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Section7;