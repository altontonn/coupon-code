import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <ul className="mb-6 flex items-center justify-center flex-wrap bg-teal-500 p-6">
      <NavLink to="/" className="mr-6 font-semibold text-teal-200 hover:text-white">Researcher</NavLink>
      <NavLink to="/candidate" className="mr-6 font-semibold text-teal-200 hover:text-white">Candidate</NavLink>
    </ul>
  );
};
export default Menu