import React from "react";

function HeroBanner() {
  return (
    <div className="bg-[url(./assets/banner.png)] bg-cover bg-center h-screen flex flex-col justify-center px-[6.25rem] text-white">
      <h1 className="text-[3rem] w-[45%] font-bold">
        Escape the Ordinary, Discover Paradise. Book Your Stay Today!
      </h1>
      <p className="w-[45%]">
        Discover a Haven of Peace, Where Every Moment is an Adventure. Unwind,
        Refresh, and Reconnect with Nature’s Beauty.
      </p>
      <button className="p-[0.625rem_2.25rem] font-bold text-[var(-)] bg-[var(--accent-color)] hover:bg-[var(--hover-color)] transition-ease-in-out duration-300 w-fit rounded-[1.5rem] my-[1.5rem]">
        Book Now!
      </button>
    </div>
  );
}

export default HeroBanner;
