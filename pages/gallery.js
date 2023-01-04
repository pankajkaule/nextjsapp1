import React from 'react'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'

const gallery = () => {
  return (
    <>
    <Navbar />

    <div className="flex justify-center items-center h-screen	">
      <span className="text-4xl ">Gallery</span>
    </div>
    <Footer/>
  </>
  )
}

export default gallery