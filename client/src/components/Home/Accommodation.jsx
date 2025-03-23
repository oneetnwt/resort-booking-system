import React from "react";
import AccommodationBox from "./AccommodationBox";

import cabin from "../../assets/aboutUs.png";
import cabin1 from "../../assets/cabin1.jpg";
import cottage from "../../assets/cottage.jpg";

function Accommodation() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 m-[6.25rem]">
      <div className="space-y-5">
        <h1 className="text-3xl font-bold text-center text-[var(--primary-color)]">
          Accommodation
        </h1>
        <p className="text-center text-[var(--primary-color)]">
          The quick brown fox jumps over the lazy dog, anyway here’s some
          accommodation. Perfect for staycation and leisure. It is also
          comfortable and warm that compliments the cold ambiance.{" "}
        </p>
      </div>
      <div className="flex justify-center gap-10">
        <AccommodationBox
          image={cabin}
          title="A-House"
          description="Good for 3-5 persons with 1 queen-size bed."
          price="3,500"
        />
        <AccommodationBox
          image={cabin1}
          title="A-House"
          description="Good for 3-5 persons with 1 queen-size bed."
          price="3,500"
        />
        <AccommodationBox
          image={cottage}
          title="A-House"
          description="Good for 3-5 persons with 1 queen-size bed."
          price="3,500"
        />
      </div>
    </div>
  );
}

export default Accommodation;
