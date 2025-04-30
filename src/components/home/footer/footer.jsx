import React from 'react'
import { Link } from 'react-router'

function Footer() {
  const links = <>
        <li className='mr-8'><Link className='' to="/">Home</Link></li>
        <li className='mr-8'><Link className='' to="/mybookings">My-bookings</Link></li>
        <li className='mr-8'><Link className='' to="/blogs">Blogs</Link></li>
        <li><Link className='' to="/contact">Contact Us</Link></li>
    </>

  return (
    <div className='bg-white flex flex-col items-center mx-auto py-25 font-main'>
      <div className="flex flex-col items-center border-b-2 border-gray-200 w-3/4 pb-10 mb-10">
        <a className="flex items-center text-xl pb-10">
          <img className='mr-3' src="assets/logo.png" alt="" />
          <p className='text-3xl font-bold'>Phudu</p>
        </a>
        <ul className="menu menu-horizontal px-1 text-lg text-mainText/70 font-medium">
          {links}
        </ul>
      </div>

      <div className='flex'>
        <img src="/assets/facebook.png" className='w-[32px] mr-6' alt="" />
        <img src="/assets/twitter.png" className='w-[32px] mr-6' alt="" />
        <img src="/assets/linkedin.png" className='w-[32px] mr-6' alt="" />
        <img src="/assets/youtube.png" className='w-[32px]' alt="" />
      </div>
    </div>
  )
}

export default Footer