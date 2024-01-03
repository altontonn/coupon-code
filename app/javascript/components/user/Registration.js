import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <form className="row g-3 w-50">
          <div className="col-md-12">
            <label for="inputEmail4" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name="name" />
          </div>
          <div className="col-md-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="col-md-12">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="col-md-12">
            <label for="inputPassword4" className="form-label">
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
        Already have an account? <Link className="text-decoration-none" to="/login">Login Here</Link>
      </p>
    </>
  );
};
export default RegisterForm;
