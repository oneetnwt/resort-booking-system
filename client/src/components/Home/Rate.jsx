import React from "react";
import EntranceRateBox from "./EntranceRateBox";

function Rate() {
  return (
    <div className="h-auto  m-[6.25rem] border-b-1">
      <div className="bg-[var(--primary-color)] h-[100%] relative items-center justify-center flex flex-col z-[-1] py-[10rem_5rem] rounded-2xl">
        <h1 className="absolute top-[-2rem] left-1/2 -translate-x-1/2 bg-[var(--background-color)] w-fit border-3 border-[var(--primary-color)] p-[0.75rem_1rem] rounded-2xl text-3xl font-bold text-[var(--primary-color)] shadow-md">
          Entrance Rate
        </h1>

        <div className="flex justify-center items-center gap-15">
          <EntranceRateBox
            price="30"
            title="Kids"
            description="12 years old and below"
          />
          <EntranceRateBox
            price="50"
            title="Adults and Teens"
            description="13 years old and above"
          />
          <EntranceRateBox
            price="200"
            title="Overnight Stay"
            description="5PM to 8AM with free cottage, minimum of 10 persons"
          />
        </div>
        <p className="mt-10 text-[var(--accent-color)]">
          Babies below 1 year old are <strong>FREE</strong> of entrance
        </p>
        <p className="text-[var(--accent-color)]">
          Price listed is <strong>PER HEAD</strong>
        </p>
        <button className="rounded-full text-[var(--background-color)] border border-white p-[0.5rem_1rem] mt-5 hover:bg-[var(--accent-color)] hover:text-white transition duration-300">
          See Other Promos
        </button>
      </div>
    </div>
  );
}

export default Rate;
