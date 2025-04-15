import React from "react";

import KA from "../../assets/K&A_Dark.png";
import picture from "../../assets/aboutUs.png";

function AboutUs() {
  return (
    <div className="h-screen mx-[6.25rem] grid grid-cols-2 border-b-1">
      <div className="flex flex-col justify-center gap-10 mx-[6.25rem]">
        <img
          src={KA}
          alt="K&A Natural Spring Resort word in navy blue color"
          className="h-15 w-fit"
        />
        <p className="text-[var(--primary-color)] text-base/loose">
          Leave your worries behind and find tranquility at{" "}
          <strong>K&A Natural Spring Resort</strong>, a beautiful escape into
          nature. Stroll through our green grounds, unwind by the sparkling
          pool, and enjoy friendly service in our comfortable rooms. A relaxing
          getaway is waiting for you.
        </p>
        <button className="flex items-center gap-2 bg-[var(--primary-color)] text-white px-4 py-2 rounded-r-full rounded-l-none w-fit hover:bg-[#2155a3] ease-in-out transition-all duration-300 cursor-pointer">
          Learn More
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative max-w-lg shadow-lg z-[-1]">
          <p className="absolute top-0 left-0 bg-[var(--background-color)] p-[0.75rem_2rem] text-2xl font-bold text-[var(--primary-color)] rounded-[0_0_1rem_0] shadow-mdrelative max-w-lg text-left tag">
            About Us
          </p>
          <img
            src={picture}
            alt="Room Picture"
            className="h-[30rem] w-[28rem] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
