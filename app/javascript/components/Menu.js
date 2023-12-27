import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, userSelector } from "../Redux/userSlice";
import { getAuthorzation } from "../Redux/authorization";
const Menu = () => {
  const user = userSelector();
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

  return (
    <ul className="mb-6 flex items-center justify-center flex-wrap bg-teal-500 p-6">
      <NavLink
        to="/"
        className="mr-6 font-semibold text-teal-200 hover:text-white"
      >
        Researcher
      </NavLink>
      <NavLink
        to="/candidate"
        className="mr-6 font-semibold text-teal-200 hover:text-white"
      >
        Candidate
      </NavLink>
    </ul>
  );
};
export default Menu;
