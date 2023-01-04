import React from 'react'
import Footer from './Component/Footer';
import Navbar from "./Component/Navbar";

const contacts = () => {
  return (
    <>
    <Navbar />

    <div className="flex justify-center items-center h-screen	">
      <span className="text-4xl ">Contacts</span>
    </div>
    <Footer/>
  </>
  )
}

export default contacts