import React from "react";
import { NavLink } from "react-router-dom";

function NavbarLink({ name, link }) {
  return (
    <NavLink
      to={link}
      className="mx-3 hover:text-[var(--hover-color)] transition-ease-in-out duration-300"
    >
      {name}
    </NavLink>
  );
}

export default NavbarLink;
