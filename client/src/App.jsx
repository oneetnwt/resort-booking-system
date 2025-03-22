import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <div className="py-[5rem] flex justify-center items-center ">
        <q className="italic text-xl font-[300] text-[var(--primary-color)] text-center">
          Experience the unforgettable happiness with your family and
          <br />
          friends at K&A Natural Spring Resort
        </q>
      </div>
      <AboutUs />
    </>
  );
}

export default App;
