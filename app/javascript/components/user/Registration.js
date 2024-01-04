import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Redux/userSlice";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, password_confirmation } = state;
    dispatch(
      registerUser({ name, email, password, password_confirmation })
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          const err = "Registration failed with error";
          setErrorMessage(err);
        })
    );
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <form className="row g-3 w-50" onSubmit={handleSubmit}>
          <div className="col-md-12">
            <label for="Name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name="name" />
          </div>
          <div className="col-md-12">
            <label for="Email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="col-md-12">
            <label for="Password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="col-md-12">
            <label for="Password Confirmation" className="form-label">
              Re-Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <Link className="text-decoration-none" to="/login">
          Login Here
        </Link>
      </p>
    </>
  );
};
export default RegisterForm;
