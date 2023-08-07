import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col } from "react-bootstrap";
import "./login.css"; // Import the CSS file
import { fb, google } from "../../../assets/images";
import { onLogin } from "../../../services/api/auth-api-actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const LoginModal = ({ show, setShow }) => {
  const [isPhoneTab, setIsPhoneTab] = React.useState("email");
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    email: "Mohsin@gmail.com",
    password: "Zikk@1234",
    phoneNumber: "+913425693093",
  });
  const onHandleChange = (e) =>
    setPayload((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  const onSubmit = () => {
    const data = { ...payload };
    if (isPhoneTab === "email") {
      delete data.phoneNumber;
      dispatch(onLogin(data, setLoading, false, setShow));
    } else {
      delete data.email;
      delete data.password;
      dispatch(onLogin(data, setLoading, true, setShow));
    }
  };
  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton className="custom-close-header">
          {/* <Modal.Title>Login</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="modal-wrapper">
            <Tab.Container
              onSelect={(eventKey) => setIsPhoneTab(eventKey)}
              defaultActiveKey="email"
            >
              <span className="signup-title">Log in</span>
              <Nav
                variant="tabs"
                className="mb-3 mt-3 d-flex justify-content-between border-0"
              >
                <Nav.Item>
                  <Nav.Link eventKey="email">Email</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="phone">Phone Number</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="email">
                  <Form>
                    <input
                      value={payload.email}
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="login-input-field"
                      onChange={onHandleChange}
                    ></input>
                    <input
                      value={payload.password}
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="login-input-field"
                      onChange={onHandleChange}
                    ></input>
                    <Link
                      disabled={loading}
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        onSubmit();
                      }}
                      className="element-custom-btn mb-3"
                    >
                      {loading ? "Loading" : "Log In"}
                    </Link>
                    <Link to="#" className="social-login-links">
                      Or connect with social media
                    </Link>
                    <div className="continue-with-login-links">
                      <Link
                        to="#"
                        className="d-flex gap-3 align-items-center justify-content-center"
                      >
                        {" "}
                        <img src={google} /> Continue with Google
                      </Link>
                      <Link
                        to="#"
                        className="d-flex gap-3 align-items-center justify-content-center"
                      >
                        {" "}
                        <img src={fb} /> Continue with Facebook
                      </Link>
                    </div>
                    <Link to="#" className="forgot-password">
                      Forgot Password? <span>Reset it</span>{" "}
                    </Link>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="phone">
                  <Form>
                    <div className="modal-wrapper p-0">
                      <input
                        value={payload.phoneNumber}
                        name="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                        className="login-input-field"
                        onChange={onHandleChange}
                      ></input>
                      <p className="verify-code">
                        We will send a text with a verification code. Message
                        and data rates may apply.
                      </p>

                      <Link
                        disabled={loading}
                        onClick={(e) => {
                          onSubmit();
                        }}
                        to="#"
                        className="element-custom-btn mb-3"
                      >
                        {loading ? "Loading" : "Continue"}
                      </Link>
                      <Link to="#" className="social-login-links">
                        Or connect with social media
                      </Link>
                      <div className="continue-with-login-links">
                        <Link
                          to="#"
                          className="d-flex gap-3 align-items-center justify-content-center"
                        >
                          <img src={google} /> Continue with Google
                        </Link>
                        <Link
                          to="#"
                          className="d-flex gap-3 align-items-center justify-content-center"
                        >
                          <img src={fb} /> Continue with Facebook
                        </Link>
                      </div>
                    </div>
                  </Form>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginModal;
