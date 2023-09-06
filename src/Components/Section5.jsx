import React from 'react'
import img1 from '../images/images/explore-image-01.jpg'; 
import img2 from '../images/images/explore-image-02.jpg'; 
function Section5() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 py-24 gap-10  h-full w-full justify-center items-center px-24 border-b-4  border-dotted'>

        <div className='flex flex-col space-y-3 '>
                <h1 className='text-4xl font-Roboto text-zinc-700 font-semibold tracking-wide'>Explore Our Products</h1>
                <p className='text-zinc-400 font-poppins py-5'>You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</p>
                <p className='italic text-zinc-700 font-medium text-lg pb-5'>You are not allowed to redistribute this template ZIP file on any other website.</p>
                <p className='text-zinc-400 font-poppins pb-5'>There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.</p>
                <p className='text-zinc-400 font-poppins pb-5'>If this template is beneficial for your website or business, please kindly support us a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
                <button className=' w-32 h-10 font-poppins hover:bg-zinc-700 hover:text-white transition-all ease-linear border border-zinc-700'>
                    Discover Me
                </button>
        </div>

        <div className='grid grid-cols-2 h-full gap-5'>

            <div className='bg-gray-100  flex flex-col justify-center items-center'>
                <p className='text-2xl font-Roboto text-zinc-600 font-semibold tracking-wide'>Leather Bags</p>
                <p className='italic text-zinc-400 font-semibold'>Latest Collection</p>
            </div>

            <div>
                <img className='h-full w-full object-cover' src={img1} alt="" />
            </div>

            <div>
                <img className='h-full w-full object-cover' src={img2} alt="" />
            </div>

            <div className='bg-gray-100  flex flex-col justify-center items-center'>
                <p className='text-2xl font-Roboto text-zinc-600 font-semibold tracking-wide'>Different Types</p>
                <p className='italic text-zinc-400 font-semibold'>Over 304 Products</p>
            </div>


        </div>
    </div>
  )
}

export default Section5;