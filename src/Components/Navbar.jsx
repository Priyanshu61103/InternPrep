import React from 'react'

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-white flex items-center justify-around">
        <img src="../intern_prep_logo.jpeg" alt="" className="h-15 w-60"/>

        <div className="w-150 flex justify-between text-xl font-semibold ">
            <div>Home</div>
            <div>Internships</div>
            <div>Career Resources</div>
            <div>About Us</div>
        </div>

        <div>
            <button className="h-15 w-50 bg-gray-900 text-white p-5 rounded-xl font-semibold">
                Sign In/Register
            </button>
        </div>
    </div>
  )
}

export default Navbar