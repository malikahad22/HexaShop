import React from 'react';
import { AiOutlineEye , AiFillStar,AiOutlineShoppingCart,AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
import man1 from '../images/images/kid-01.jpg';
import man2 from '../images/images/kid-02.jpg';
import man3 from '../images/images/kid-03.jpg';
function Section4() {
    const slide = [
      {
        image:man1,
        title:"School Collection",
        price: "$80.00"
      },
      {
        image:man2,
        title:"Summer Cap",
        price: "$ 90.00"
      },
      {
        image:man3,
        title:"Classic Kid",
        price: "$ 150.00"
      }
    ]
  return (
    <div className='flex flex-col  items-center justify-center md:items-start h-full py-24 border-b-4 border-dotted'>
        <div className='pb-14 flex flex-col pl-14 md:pl-24'> 
            <h1 className='text-4xl font-Roboto tracking-wide  text-zinc-700 font-semibold '>Kid's Latest</h1>
            <p className='italic font-poppins text-sm text-gray-400'>Details to details is what makes Hexashop different from the other themes.</p>
        </div>
        <div className='flex flex-col md:flex-row w-full  items-center justify-center gap-10 px-5'>
          <AiOutlineLeft className='text-lg border border-zinc-700 h-10 w-10 p-3 hidden md:flex  cursor-pointer hover:bg-zinc-700 hover:text-white'/>
            {
              slide.map((items)=>
              <div className='relative h-full '>
                <div className=' flex  '>
                  <img className='' src={items.image} alt='/'/>
                  <div className='absolute flex flex-row hover:flex duration-500 h-full w-full z-10 justify-center  opacity-0 hover:opacity-100 gap-5 pt-72'>
                    <AiOutlineEye className='bg-white h-12 w-12 p-3 hover:cursor-pointer'/>
                    <AiFillStar className='bg-white h-12 w-12 p-3 hover:cursor-pointer'/>
                    <AiOutlineShoppingCart className='bg-white h-12 w-12 p-3 hover:cursor-pointer'/>
                </div>
                </div>
                <div className='flex justify-between py-8'>
                  <div>
                  <p className='text-2xl font-poppins text-zinc-800 font-semibold '>{items.title}</p>
                  <p className='text-gray-400 pt-3 font-medium  text-lg font-poppins' >{items.price}</p>

                  </div>
                  <div className='flex'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                  </div>

                </div>
              </div>
              )
            }
          <AiOutlineRight className='text-lg border border-zinc-700 h-10 w-10 p-3 hidden md:flex  cursor-pointer hover:bg-zinc-700 hover:text-white'/>
        </div>
        
    </div>
  )
}

export default Section4;