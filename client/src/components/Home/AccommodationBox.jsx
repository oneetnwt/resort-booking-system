import React from "react";
import { useNavigate } from "react-router-dom";

function AccommodationBox({ image, title, description, price }) {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-[18rem] h-[30rem]"
      onClick={() => navigate("/accommodation")}
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white rounded-lg hover:bg-black/50 transition-all duration-300 cursor-pointer">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex flex-col space-y-5">
          <p className="text-sm italic font-extralight">{description}</p>
          <p className="text-xl font-medium">
            {"\u20B1"}
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccommodationBox;
