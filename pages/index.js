import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center ">
        <div class="container">
          <img height={"400px"} width="100%" src="/assets/images/laptops.jpg" />
          <div class="bottom-left lineLeft">
          <p class="lineLeft text-4xl font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
      <br/>
      <p class="lineLeft text-4xl font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
