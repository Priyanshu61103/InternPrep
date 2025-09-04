import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeMode } from "../Redux/slice/slice";
const Hero = () => {

  const mode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();  
  return (
    <div>
      <div>
        <div className="h-120 z-0">
          <img src="../Hero_page_image.png" alt="" className="h-180 w-full" />
        </div>
        <div className="w-full flex justify-start text-white z-10 relative bottom-35 left-10">
          <div>
            <h1 className="text-7xl font-bold">Launch Your</h1>
            <h1 className="text-7xl font-bold">Future Career</h1>
            <button className="exploreButton h-12 w-50 bg-gray-900 font-semibold rounded-xl m-5">
              Explore Opportunities
            </button>
          </div>
        </div>
        <div
          className="h-110 w-full flex justify-center items-center z-0 mt-5 mb-5"
          style={{ backgroundColor: "rgb(95, 161, 236)" }}
        >
          <div className="flex gap-x-10">
            <div className={mode==="light"?"heroSectionDiv h-90 w-90 rounded-xl shadow-xl/30 z-10 bg-white text-gray-950":"heroSectionDiv h-90 w-90 rounded-xl shadow-xl/30 z-10 bg-gray-950 text-white"}>
              <img
                src="../degree_cap_image.png"
                alt=""
                className="h-80 w-80 z-20 ml-5"
              />
              <p className="z-10 text-center font-bold text-xl relative bottom-10">
                Internship Listings
              </p>
            </div>
            <div className={mode==="light"?"heroSectionDiv h-90 w-90 rounded-xl shadow-xl/30 z-10 bg-white text-gray-950":"heroSectionDiv h-90 w-90 rounded-xl shadow-xl/30 z-10 bg-gray-950 text-white"}>
              <img
                src="../suitcase_image.png"
                alt=""
                className="h-50 w-60 z-20 relative top-10 left-15"
              />
              <p className="z-10 text-center font-bold text-xl relative top-20">
                Career Resources
              </p>
            </div>
            <div className={mode==="light"?"heroSectionDiv h-90 w-90 rounded-xl shadow-xl/30 z-10 bg-white text-gray-950":"heroSectionDiv h-90 w-90 rounded-xl shadow-xl/30 z-10 bg-gray-950 text-white"}>
              <img
                src="../glowing_bulb_image.png"
                alt=""
                className="h-47 w-47 z-20 relative top-15 left-22"
              />
              <p className="z-10 text-center font-bold text-xl relative top-23 left-2">
                Skill Development
              </p>
            </div>
          </div>
        </div>

        <div className="h-90 w-full flex justify-around items-center bg-white">
          <div className={mode==="light"?"h-85 w-85 rounded-xl shadow-xl/30 z-10 bg-white text-gray-950 flex flex-col justify-around p-10":"h-85 w-85 rounded-xl shadow-xl/30 z-10 bg-gray-950 text-white flex flex-col justify-around p-10"}>
            <h1 className="text-xl font-bold">Go-to platform for students and freshers</h1>
            <p className="text-sm">
              I landed my first internship from InternPrep! This app has
              opportunities for every student and is a must-have for students
              looking to build their careers.
            </p>
            <div  className="flex gap-x-2">
                <img src="profile_icon_1.jpg" alt="" className="h-15 w-15 rounded-full"/>
                <div>
                    <h1 className="text-xl font-bold">Ajay Singh</h1>
                    <p className="text-sm">Intern at ABC</p>
                </div>
            </div>
          </div>
          <div className={mode==="light"?"h-85 w-85 rounded-xl shadow-xl/30 z-10 bg-white text-gray-950 flex flex-col justify-around p-10":"h-85 w-85 rounded-xl shadow-xl/30 z-10 bg-gray-950 text-white flex flex-col justify-around p-10"}>
            <h1 className="text-xl font-bold">Go-to platform for students and freshers</h1>
            <p className="text-sm">
              I landed my first internship from InternPrep! This app has
              opportunities for every student and is a must-have for students
              looking to build their careers.
            </p>
            <div  className="flex gap-x-2">
                <img src="profile_icon_2.jpg" alt="" className="h-15 w-15 rounded-full"/>
                <div>
                    <h1 className="text-xl font-bold">Rupa Sharma</h1>
                    <p className="text-sm">Intern at PQR</p>
                </div>
            </div>
          </div>
           <div className={mode==="light"?"h-85 w-85 rounded-xl shadow-xl/30 z-10 bg-white text-gray-950 flex flex-col justify-around p-10":"h-85 w-85 rounded-xl shadow-xl/30 z-10 bg-gray-950 text-white flex flex-col justify-around p-10"}>
            <h1 className="text-xl font-bold">Go-to platform for students and freshers</h1>
            <p className="text-sm">
              I landed my first internship from InternPrep! This app has
              opportunities for every student and is a must-have for students
              looking to build their careers.
            </p>
            <div  className="flex gap-x-2">
                <img src="profile_icon_3.jpg" alt="" className="h-15 w-15 rounded-full"/>
                <div>
                    <h1 className="text-xl font-bold">Yash Kapoor</h1>
                    <p className="text-sm">Intern at MNO</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
