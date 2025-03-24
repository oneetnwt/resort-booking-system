import React, { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";
import kalogo from "../../assets/K&A.png";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className={`fixed top-0 w-full p-4 h-[4rem] transition-all duration-300 ${
        scroll ? "bg-[var(--primary-color)] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="h-[2rem] flex justify-between items-center px-[6.25rem] text-white w-full">
        <div>
          <img src={kalogo} alt="K&A Logo" className="h-10 w-auto" />
        </div>

        <div className="flex items-center gap-4">
          <NavbarLink name="Home" link="/" />
          <NavbarLink name="Accommodation" link="/accommodation" />
          <NavbarLink name="Amenities" link="/amenities" />
          <NavbarLink name="FAQs" link="/faq" />
          <NavbarLink name="Contact" link="/contact" />

          <button className="ml-10 p-[0.5rem_1.75rem] border border-white hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] duration-300 rounded-[1.5rem] cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
