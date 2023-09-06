import React from 'react'
import inta1 from '../images/images/instagram-01.jpg';
import inta2 from '../images/images/instagram-02.jpg';
import inta3 from '../images/images/instagram-03.jpg';
import inta4 from '../images/images/instagram-04.jpg';
import inta5 from '../images/images/instagram-05.jpg';
import inta6 from '../images/images/instagram-06.jpg';
import { AiFillInstagram } from 'react-icons/ai';
function Section6() {
    const socialImg = [
        {
            img:inta1,
            title:"Fashion"
        },
        {
            img:inta2,
            title:"New"
        },
        {
            img:inta3,
            title:"Brand"
        },
        {
            img:inta4,
            title:"Makeup"

        },
        {
            img:inta5,
            title:"Leather"
        },
        {
            img:inta6,
            title:"Bag"
        }
    ]
  return (
    <div className='px-24 border-b-4 py-24 border-dotted '>
        <div className='pb-16'>
            <p className='text-4xl font-Roboto text-gray-700 font-semibold tracking-wide'>Social Media</p>
            <p className='italic text-zinc-400'>Details to details is what makes Hexashop different from the other themes.</p>
        </div>
        <div className='flex-col flex sm:flex-row  relative'>
            {
                socialImg.map((item)=>
                <div className='relative'>
                    <img className='w-full' src={item.img} alt="" />
                    <div className=' hover:bg-black/60 duration-500 transition-all  ease-in-out opacity-0 flex flex-col justify-end p-5   hover:opacity-100 top-0 absolute w-full h-full  '>
                        <p className='text-white font-Roboto font-medium'>{item.title}</p>
                        <AiFillInstagram className='text-white text-lg'/>
                    </div>
                </div>
    
                )
            }
        </div>
    </div>
  )
}

export default Section6;