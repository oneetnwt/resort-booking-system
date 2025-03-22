import React from "react";

function EntranceRateBox({ price, title, description }) {
  return (
    <div className="bg-[var(--background-color)] flex flex-col items-center p-[2.5rem_1rem] w-[18rem] min-h-[18rem] rounded-md">
      <h1 className="text-7xl font-bold text-[var(--primary-color)] text-center">
        {"\u20B1"}
        {price}
      </h1>
      <p className="text-xl font-bold text-[var(--primary-color)] text-center mt-5">
        {title}
      </p>
      <p className="text-[var(--primary-color)] text-md/loose text-center mt-3">
        {description}
      </p>
    </div>
  );
}

export default EntranceRateBox;
