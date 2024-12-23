import React from 'react'
import { FaHandsHelping } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <div className=''>
      <hr className='border-1 border-black' />

      <div className='p-4'>

        <div className='flex items-center w-1/3 gap-2'>
            <FaHandsHelping />

            <p className='text-sm font-extralight font-poppins'>Thank you for visiting my website
           </p>
           
           <div className='flex items-center'><CiMail className='text-[#d62727'/><a className='text-[#d62727] font-poppins' href="">Contact</a></div>
        </div>

      </div>
    </div>
  )
}

export default Footer
