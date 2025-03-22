import React from "react";

import build from "../assets/build.png";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={build} alt="Build Icon" className="w-50" />
      <h1 className="text-5xl font-bold uppercase text-[var(--danger-color)]  mx-5">
        Page not Found
      </h1>
      <p className="italic text-lg w-[50%] text-center mt-5">
        This page is currently under construction. We're working hard to bring
        you something amazing! Stay tuned for updates.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="border-1 p-[0.75rem_1rem] rounded-2xl mt-5 hover:bg-[var(--danger-color)] hover:border-[var(--danger-color)] hover:text-white tracking-wider  transition-colors duration-300 font-bold"
      >
        Go Back
      </button>
    </div>
  );
}

export default NotFound;
