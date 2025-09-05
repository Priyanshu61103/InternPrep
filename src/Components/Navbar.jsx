import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-white flex items-center justify-around">
        <img src="../intern_prep_logo.jpeg" alt="" className="h-15 w-60"/>

        <div className="w-150 flex justify-between text-xl font-semibold ">
            <div>Home</div>
            <div>Internships</div>
            <NavLink to='/carrer_resources'>
            <div>Career Resources</div>
            </NavLink>
            <div>About Us</div>
        </div>

        <div>
            <NavLink to='/userL-R'>
            <button className="h-15 w-50 bg-gray-900 text-white p-5 rounded-xl font-semibold cursor-pointer">
                Sign In/Register
            </button>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar