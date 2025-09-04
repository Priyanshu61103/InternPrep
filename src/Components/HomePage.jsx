import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className="h-full w-full">
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default HomePage