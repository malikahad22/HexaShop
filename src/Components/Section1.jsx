import React from "react";
import Bannerleft from "../images/images/left-banner-image.jpg";
import Right1 from "../images/images/baner-right-image-01.jpg";
import Right2 from "../images/images/baner-right-image-02.jpg";
import Right3 from "../images/images/baner-right-image-03.jpg";
import Right4 from "../images/images/baner-right-image-04.jpg";
function Section1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full box-border px-5 h-full py-14 gap-8 border border-b-4 border-dotted ">
      <div className="relative">
        <div className=" h-full w-[100%] justify-center items-center">
          <img className="h-full w-full  object-cover"  src={Bannerleft} alt="" />
        </div>
        <div className= " absolute top-0 flex  items-center md:items-start md:text-left  md:pl-20 flex-col h-full  w-full justify-center "  >
          <p className="text-5xl font-Roboto font-semibold text-white">
            We Are Hexashop
          </p>
          <p className="italic text-gray-200 py-6 text-lg">
            Awesome, clean & creative HTML5 Template
          </p>
          <button className=" text-white w-40 h-10 border border-white  font-poppins hover:bg-white hover:text-black hover:transition-all">
            Purchase Now!
          </button>
        </div>
      </div>

     <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className=" w-full relative cursor-pointer " >
          <img className="w-full  object-cover" src={Right1} alt="/" />
          <div className="absolute top-0 flex h-full w-full flex-col justify-center items-center text-white">
            <h1 className="text-3xl md:text-xl lg:text-3xl tracking-wide pb-5 font-bold">Women</h1>
            <p className="italic text-white text-md  text-center font-poppins">Best Clothes For Women</p>
          </div>
          <div>
         <div className=" top-0 h-full absolute opacity-0 hover:opacity-100  duration-500 transition-all ease-in-out flex w-full bg-black/90  flex-col justify-center items-center px-12 ">
            <h1 className="text-white text-xl text-center font-poppins font-semibold uppercase tracking-wide">Women</h1>
            <p className="text-white text-center text-sm font-Roboto py-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, perspiciatis?</p>
            <button className="text-white border border-white w-36 h-10 hover:bg-white hover:text-black ease-in-out transition-all">Discover More</button>
          </div>
          </div>
        </div>

        <div className=" w-full relative cursor-pointer " >
          <img className="w-full  object-cover" src={Right2} alt="/" />
          <div className="absolute top-0 flex h-full w-full flex-col justify-center items-center text-white">
            <h1 className="text-white text-2xl font-poppins md:text-xl pb-5 lg:text-3xl font-semibold uppercase tracking-wide">Men</h1>
            <p className="italic text-white text-md text-center font-poppins">Best Clothes For Men</p>
          </div>
          <div className=" top-0 h-full absolute opacity-0 hover:opacity-100 duration-500 transition-all ease-in-out flex w-full bg-black/90  flex-col justify-center items-center px-12 ">
            <h1 className="text-white text-xl text-center font-poppins font-semibold uppercase tracking-wide">Men</h1>
            <p className="text-white text-center text-sm font-Roboto py-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, perspiciatis?</p>
            <button className="text-white border border-white w-36 h-10 hover:bg-white hover:text-black ease-in-out transition-all">Discover More</button>
          </div>
        </div>

        <div className=" w-full relative cursor-pointer " >
          <img className="w-full  object-cover" src={Right3} alt="/" />
          <div className="absolute top-0 flex h-full w-full flex-col justify-center items-center text-white">
            <h1 className="text-white text-2xl font-poppins font-semibold md:text-xl lg:text-3xl uppercase pb-5 tracking-wide">Kids</h1>
            <p className="italic text-white text-md font-poppins text-center">Best Clothes For Kids</p>
          </div>
          <div className=" top-0 h-full absolute opacity-0 hover:opacity-100 duration-500 transition-all ease-in-out flex w-full bg-black/90  flex-col justify-center items-center px-12 ">
            <h1 className="text-white text-xl text-center font-poppins font-semibold uppercase tracking-wide">Kids</h1>
            <p className="text-white text-center text-sm font-Roboto py-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, perspiciatis?</p>
            <button className="text-white border border-white w-36 h-10 hover:bg-white hover:text-black ease-in-out transition-all">Discover More</button>
          </div>
        </div>

        <div className=" w-full relative cursor-pointer " >
          <img className="w-full  object-cover" src={Right4} alt="/" />
          <div className="absolute top-0 flex h-full w-full flex-col justify-center items-center text-white">
            <h1 className="text-white text-2xl md:text-xl lg:text-3xl font-poppins font-semibold uppercase pb-5 tracking-wide">Accessories</h1>
            <p className="italic text-white text-md text-center font-poppins">Best Tren Accessories</p>
          </div>
          <div className=" top-0 h-full absolute opacity-0 duration-500 hover:opacity-100 transition-all ease-in-out flex w-full bg-black/90  flex-col justify-center items-center px-12 ">
            <h1 className="text-white text-xl text-center font-poppins font-semibold uppercase tracking-wide">Accessories</h1>
            <p className="text-white text-center text-sm font-Roboto py-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, perspiciatis?</p>
            <button className="text-white border border-white w-36 h-10 hover:bg-white hover:text-black ease-in-out transition-all">Discover More</button>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Section1;
