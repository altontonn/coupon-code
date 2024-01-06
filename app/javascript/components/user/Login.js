import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Redux/userSlice";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Alert } from "react-bootstrap";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formData?.email;
    const password = formData?.password;

    dispatch(
      loginUser({
        email,
        password,
      })
    )
      .then(() => {
        navigate("/researcher");
        window.location.reload();
      })
      .catch((error) => {
        const err = "Email or Password not correct";
        setErrorMessage(err);
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit} className="w-50">
        {errorMessage && (
          <p style={{ color: "red", fontSize: "0.8em" }}>{errorMessage}</p>
        )}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
};
export default LoginForm;
