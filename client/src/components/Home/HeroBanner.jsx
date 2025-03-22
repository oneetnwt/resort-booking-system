import React from "react";

function HeroBanner() {
  return (
    <div className="bg-[url(./assets/banner.png)] bg-cover bg-center h-screen flex flex-col justify-center px-[6.25rem] text-white gap-3">
      <h1 className="text-[3rem] font-bold">
        Escape the Ordinary,
        <br />
        Discover Paradise.
        <br />
        Book Your Stay Today!
      </h1>
      <p className="italic font-[300] text-base/relaxed  tracking-widest">
        Discover a Haven of Peace, Where Every Moment is an
        <br />
        Adventure. Unwind, Refresh, and Reconnect with
        <br />
        Nature’s Beauty.
      </p>
      <button className="p-[0.625rem_2.25rem] font-bold text-[var(--primary-color)] bg-[var(--accent-color)] hover:bg-[var(--hover-color)] transition-ease-in-out duration-300 w-fit rounded-[1.5rem] my-[1.5rem]">
        Book Now!
      </button>
    </div>
  );
}

export default HeroBanner;
