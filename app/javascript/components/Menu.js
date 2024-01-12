import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, userSelector } from "../Redux/userSlice";
import { getAuthorzation } from "../Redux/authorization";
const Menu = () => {
  const user = useSelector(userSelector);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAuthorzation());
    if(user.success) {
      setShowSuccessMessage(true)
      const timeoutId = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000)
      return ()=> clearTimeout(timeoutId)
    }
  }, [dispatch, user]);

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
    <>
      { user.success && showSuccessMessage && (
        <p className="text-success text-center">Welcome {user.name}</p>
      )}
      <ul className="mb-6 flex items-center justify-center flex-wrap bg-teal-500 p-6">
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
            Register
          </NavLink>
        )}
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
        {user.success && (
          <NavLink
            to="/login"
            className="mr-6 font-semibold text-teal-200 hover:text-white text-decoration-none"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        )}
      </ul>
    </>
  );
};
export default Menu;
