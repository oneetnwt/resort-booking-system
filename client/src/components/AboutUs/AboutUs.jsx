import React from "react";

function AboutUs() {
  return (
    <div className="h-screen mx-[6.25rem]">
      <button class="flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-r-full rounded-l-none">
        Learn More
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default AboutUs;
