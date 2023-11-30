import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <NavLink to="/researcher">Researcher</NavLink>
      <NavLink to="/candidate">Candidate</NavLink>
    </div>
  );
};
export default Menu