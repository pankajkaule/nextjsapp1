import { useState } from "react";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

export default function About() {
  const [first, setFirst] = useState("second");

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-screen	">
        <span className="text-4xl ">About us</span>
      </div>
      <Footer/>
    </>
  );
}
