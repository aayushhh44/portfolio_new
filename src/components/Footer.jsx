import React from 'react'
import { FaHandsHelping } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";



const Footer = () => {
  return (
    <div className=''>
      <hr className='border-1 border-black' />

      <div className='p-4 flex justify-between items-center'>

        <div className='flex items-center w-1/3 gap-2'>
            <FaHandsHelping />

            <p className='text-sm font-extralight font-poppins'>Thank you for visiting my website
           </p>
           
           <div className='flex items-center'><CiMail color='#d62727' className='text-[#d62727'/><a className='text-[#d62727] text-sm font-poppins' href="">Contact</a></div>
        </div>


        <div className='flex items-center gap-1 cursor-pointer'>
          <FiGithub />
          <a className='text-[#d62727] text-sm font-poppins' href="">git me</a>.


        </div>

      </div>
    </div>
  )
}

export default Footer
