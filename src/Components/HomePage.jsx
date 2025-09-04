import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import { useSelector,useDispatch } from 'react-redux';
import { changeMode } from '../Redux/slice/slice';
const HomePage = () => {
  const mode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch(); 
  return (
    <div className={mode === "light"?"h-full w-full bg-white":"h-full w-full bg-gray-950"}>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default HomePage