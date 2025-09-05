import React, {useState} from 'react'
import ResumeChecker from "./Components/ResumeChecker.jsx";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const [selected, setSelected] = useState('ResumeChecker');
    const navigate = useNavigate();
    const handleClick = (value) => {
        setSelected(value);
    }
    const handleBackHome = ()=>{
        navigate('/');
    }
    return (
        <div className='min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-6 pl-2'>
            <button onClick={handleBackHome} className='text-white border-2 pt-1 pb-1 pl-2.5 pr-2.5 absolute left-6 top-7 rounded-2xl  hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105'  >back to home</button>
            <div
                className='group max-w-3/4 w-full min-w-3/5  bg-white rounded-2xl shadow-2xl p-4 backdrop-blur-sm bg-opacity-95  flex justify-evenly text-xl mx-auto pt-2'>

                <div onClick={() => handleClick('ResumeChecker')} className={`cursor-pointer transition-colors duration-200 ${
                    selected === 'ResumeChecker' ? ' text-red-600 underline underline-offset-4 font-medium' : null
                }`}
                >Resume Checker
                </div>
                <div onClick={() => handleClick('AI')}
                     className={`cursor-pointer transition-colors duration-200 ${
                         selected === 'AI' ? ' text-red-600 underline underline-offset-4 font-medium' : null
                     }`}
                >AI mock Interview
                </div>
                <div onClick={() => handleClick('jobs')}
                     className={`cursor-pointer transition-colors duration-200 ${
                         selected === 'jobs' ? ' text-red-600 underline underline-offset-4 font-medium' : null
                     }`}
                >Jobs
                </div>
            </div>
            <div>
                {selected === 'ResumeChecker' &&<div className='min-w-3/4'>
                    <ResumeChecker/>
                </div>}
                {selected === 'AI' && <div>AI mock Interview</div>}
                {selected === 'jobs' && <div>Jobs</div>}
            </div>
            <div>

            </div>
        </div>
    )
}
export default Main
