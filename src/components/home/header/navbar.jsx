import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    const links = <>
        <li className='mr-8'><Link className='' to="/">Home</Link></li>
        <li className='mr-8'><Link className='' to="/mybookings">My-bookings</Link></li>
        <li className='mr-8'><Link className='' to="/blogs">Blogs</Link></li>
        <li><Link className='' to="/contact">Contact Us</Link></li>
    </>

  return (
    <div className="navbar w-5/6 mx-auto font-main pt-4">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
            </div>
            <a className="flex items-center text-xl">
                <img className='mr-3' src="assets/logo.png" alt="" />
                <p className='text-3xl font-bold'>Phudu</p>
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
            {links}
            </ul>
        </div>
        <div className="navbar-end ">
            <a className="btn bg-blue text-white rounded-4xl px-6 text font-normal">Emergency</a>
        </div>
    </div>
  )
}

export default Navbar