import React from "react";
import Logo from "../images/images/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full h-full bg-zinc-900 p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-10 justify-center w-full text-gray-300 border-b pb-10 ">
        <div>
          <div className="space-y-3 font-medium font-Roboto">
            <img src={Logo} alt="" />
            <p className="pt-5 hover:text-red-700 transition-all ease-in-out cursor-pointer">16501 Ave, Sunny Beac</p>
            <p className=" hover:text-red-700 transition-all ease-in-out cursor-pointer">hexashop@gmail.com</p>
            <p className=" hover:text-red-700 transition-all ease-in-out cursor-pointer">123-456-789</p>
          </div>
        </div>

        <div className="space-y-3 font-medium font-Roboto">
          <p className="text-lg font-semibold tracking-wide">Shopping Categories</p>
          <p className="pt-5 hover:text-red-700 transition-all ease-in-out cursor-pointer">Men's Shopping</p>
          <p className=" hover:text-red-700 transition-all ease-in-out cursor-pointer">Women's Shopping</p>
          <p className=" hover:text-red-700 transition-all ease-in-out cursor-pointer">Kid's Shopping</p>
        </div>

        <div className="space-y-3 font-medium font-Roboto">
          <p className="text-lg font-semibold tracking-wide">Usefull Links</p>
          <p className="pt-5 hover:text-red-700 transition-all ease-in-out cursor-pointer" >HomePage</p>
          <p className=" hover:text-red-700 transition-all ease-in-out cursor-pointer">About Us</p>
          <p className=" hover:text-red-700 transition-all ease-in-out cursor-pointer">Help</p>
          <p className=" hover:text-red-700 transition-all ease-in-out cursor-pointer">Contact Us</p>
        </div>

        <div className="space-y-3 font-medium font-Roboto">
          <p className="text-lg font-semibold tracking-wide">Help&Information</p>
          <p className="pt-5 hover:text-red-700 transition-all ease-in-out cursor-pointer">Help</p>
          <p className=" hover:text-red-700 transition-all ease-in-out cursor-pointer">FAQ's</p>
          <p className=" hover:text-red-700 transition-all ease-in-out cursor-pointer">Shipping</p>
          <p className=" hover:text-red-700 transition-all ease-in-out cursor-pointer">Tracking ID</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-20 space-y-2 ">
        <p className="text-gray-300 font-poppins text-lg">Copyright 2022 HexaShop Co Limited</p>
        <p className="text-gray-300 font-poppins text-sm">Design by: <span className="text-red-500 cursor-pointer">TemplateMo</span></p>
        <p className="text-gray-300 font-poppins text-sm">Distributed by: <span className="text-red-500 cursor-pointer">ThemeWagon</span></p>
        <div className="flex text-sky-200 text-3xl pt-5 gap-5">
            <FaFacebook  className="hover:text-red-700 cursor-pointer transistion-all ease-in-out duration-500" />
            <FaTwitter  className="hover:text-red-700 cursor-pointer transistion-all ease-in-out duration-500"/>
            <FaLinkedin  className="hover:text-red-700 cursor-pointer transistion-all ease-in-out duration-500"/>
            <FaInstagram  className="hover:text-red-700 cursor-pointer transistion-all ease-in-out duration-500"/>
            </div>
      </div>
    </div>
  );
}

export default Footer;
