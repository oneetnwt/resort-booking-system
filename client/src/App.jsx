import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <div className="h-[10rem] flex justify-center items-center italic text-xl text-[var(--secondary-color)]">
        “Discover the joy of slowing down and soaking in the beauty around you.”
      </div>
      <AboutUs />
    </>
  );
}

export default App;
