import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col } from "react-bootstrap";
import "./login.css"; // Import the CSS file
import { fb, google } from "../../../assets/images";
const LoginModal = ({ show, setShow }) => {
  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton className="custom-close-header">
          {/* <Modal.Title>Login</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="modal-wrapper">
            <Tab.Container defaultActiveKey="email">
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
                      type="email"
                      placeholder="Email"
                      className="login-input-field"
                    ></input>
                    <input
                      type="password"
                      placeholder="Password"
                      className="login-input-field"
                    ></input>
                    <a href="#" className="login-btn">
                      Log In
                    </a>
                    <a href="#" className="social-login-links">
                      Or connect with social media
                    </a>
                    <div className="continue-with-login-links">
                      <a href="#" className="d-flex gap-3 align-items-center justify-content-center"> <img src={google} />  Continue with Google</a>
                      <a href="#" className="d-flex gap-3 align-items-center justify-content-center"> <img src={fb} /> Continue with Facebook</a>
                    </div>
                    <a href="#" className="forgot-password">
                      Forgot Password? <span>Reset it</span>{" "}
                    </a>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="phone">
                  <Form>
                    <div className="modal-wrapper p-0">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="login-input-field"
                      ></input>
                      <p className="verify-code">
                        We will send a text with a verification code. Message
                        and data rates may apply.
                      </p>

                      <a href="#" className="login-btn">
                        Continue
                      </a>
                      <a href="#" className="social-login-links">
                        Or connect with social media
                      </a>
                      <div className="continue-with-login-links">
                        <a href="#" className="d-flex gap-3 align-items-center justify-content-center"><img src={google} /> Continue with Google</a>
                        <a href="#" className="d-flex gap-3 align-items-center justify-content-center"><img src={fb} /> Continue with Facebook</a>
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
