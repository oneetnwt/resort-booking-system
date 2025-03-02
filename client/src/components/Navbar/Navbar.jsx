import React from "react";
import { NavLink } from "react-router-dom";
import NavbarLink from "./NavbarLink";

import kalogo from "../../assets/K&A.png";

function Navbar() {
  return (
    <div>
      <div className="h-[5rem] flex justify-between items-center px-[6.25rem] text-white fixed w-screen">
        <div>
          <img src={kalogo} alt="K&A Logo" className="h-10 w-auto" />
        </div>
        <div>
          <NavbarLink name="Home" link="/" />
          <NavbarLink name="Accomodation" link="/accomodation" />
          <NavbarLink name="Amenities" link="/amenities" />
          <NavbarLink name="FAQs" link="/faq" />
          <NavbarLink name="Contact" link="/contact" />
          <button className="p-[0.625rem_2.25rem] border-1 hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] duration-300 w-fit rounded-[1.5rem] ml-[1.5rem] cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
