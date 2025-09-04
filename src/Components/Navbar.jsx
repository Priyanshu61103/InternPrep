import React from 'react'

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-white flex items-center justify-around fixed top-0 left-0 right-0 z-30">
        <img src="../intern_prep_logo.jpeg" alt="" className="h-15 w-60"/>

        <div className="w-150 flex text-xl font-semibold gap-x-7">
            <button className="navbarOption h-12 w-17 p-2 rounded-full">Home</button>
            <button className="navbarOption h-12 w-30 p-2 rounded-full">Internships</button>
            <button className="navbarOption h-12 w-44 p-2 rounded-full">Career Resources</button>
            <button className="navbarOption h-12 w-27 p-2 rounded-full">About Us</button>
        </div>
        <div>
            <input type="text" placeholder="Search..." className="h-10 w-50 p-4 border-2 border-gray-400 outline-0 rounded-full"/>
        </div>
        <div>
            <button className="signInButton h-15 w-40 bg-blue-950 text-white p-5 rounded-2xl font-semibold">
                Sign In/Register
            </button>
        </div>
    </div>
  )
}

export default Navbar