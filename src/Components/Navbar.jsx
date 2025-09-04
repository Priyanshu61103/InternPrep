import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { changeMode } from "../Redux/slice/slice";
const Navbar = () => {
  const mode = useSelector((state) => state.mode.value);  
  const dispatch = useDispatch();

  return (
    <div className={mode==="light" ? "h-20 w-full bg-white flex items-center justify-around fixed top-0 left-0 right-0 z-30":"h-20 w-full bg-gray-950 flex items-center justify-around fixed top-0 left-0 right-0 z-30"}>
      <img src="../intern_prep_logo.png" alt="" className="h-15 w-60" />

      <div className={mode==="light"?"w-150 flex text-xl font-semibold gap-x-7 text-gray-950":"w-150 flex text-xl font-semibold gap-x-7 text-white"}>
        <button className="navbarOption h-12 w-17 p-2 rounded-full">
          Home
        </button>
        <button className="navbarOption h-12 w-30 p-2 rounded-full">
          Internships
        </button>
        <button className="navbarOption h-12 w-44 p-2 rounded-full">
          Career Resources
        </button>
        <button className="navbarOption h-12 w-27 p-2 rounded-full">
          About Us
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className={mode==="light"?"h-10 w-50 p-4 border-2 bg-gray-200 border-gray-400 outline-0 rounded-full placeholder:text-gray-950":"h-10 w-50 p-4 border-2 bg-gray-800 border-gray-400 outline-0 rounded-full placeholder:text-white"}
        />
      </div>

      <div>
          <button className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center shadow-xl/10"><img src="light-mode.png" alt="" className="h-5 w-5" onClick={()=>dispatch(changeMode())}/></button>
      </div>
      <div>
        <NavLink to="/userL-R">
          <button className="signInButton h-15 w-50 bg-blue-950 text-white p-5 rounded-2xl font-semibold cursor-pointer">
            Sign In/Register
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
