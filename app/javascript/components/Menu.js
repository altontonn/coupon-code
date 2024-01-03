import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, userSelector } from "../Redux/userSlice";
import { getAuthorzation } from "../Redux/authorization";
const Menu = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { abilities } = useSelector((state) => state.authorization);
  useEffect(() => {
    dispatch(getAuthorzation());
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await fetch("/logout", { method: "DELETE" });
      dispatch(logout());
      navigate("/login");
      window.location.reload();
    } catch (error) {
      throw error;
    }
  };

  const isAuthorized = (resource_name, perfom_action) => {
    if (Object.keys(abilities).length !== 0) {
      const rules = abilities["rules"];
      const rules_index = abilities["rules_index"];
      const resource_index = rules_index[resource_name][0];
      const actions = rules[resource_index]["actions"];
      return actions.includes(perfom_action);
    } else {
      return false;
    }
  };
  return (
    <ul className="mb-6 flex items-center justify-center flex-wrap bg-teal-500 p-6">
      {user.success && <p className="text nav-text">Welcome {user.name}</p>}
      {user.success && (
        <NavLink
          to="/researcher"
          className="mr-6 font-semibold text-teal-200 hover:text-white text-decoration-none"
        >
          Researcher
        </NavLink>
      )}
      <NavLink
        to="/"
        className="mr-6 font-semibold text-teal-200 hover:text-white text-decoration-none"
      >
        Candidate
      </NavLink>
      {!user.success && (
        <NavLink
          to="/login"
          className="mr-6 font-semibold text-teal-200 hover:text-white text-decoration-none"
        >
          Login
        </NavLink>
      )}
      {!user.success && (
        <NavLink
          to="/register"
          className="mr-6 font-semibold text-teal-200 hover:text-white text-decoration-none"
        >
          Login
        </NavLink>
      )}
    </ul>
  );
};
export default Menu;
