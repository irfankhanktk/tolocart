import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col } from "react-bootstrap";
import "./signup.css"; // Import the CSS file
import { google } from "../../../assets/images";

const SignupModal = ({ show, setShow }) => {
  return (
    <div>
      <Modal show={show} onHide={setShow} centered>
        <Modal.Header
          closeButton
          className="custom-close-header"
        ></Modal.Header>
        <Modal.Body className="p-0">
          <div className="modal-wrapper">
            <span className="signup-title">Sign up</span>
            <p className="privacy-policy">
              By continuing you agree to our{" "}
              <a href="#">Terms of Service and Privacy Policy.</a>
            </p>
            <input
              type="email"
              placeholder="Email"
              className="input-field"
            ></input>
            <a href="#" className="social-links">
              Or connect with social media
            </a>

            <div className="continue-with-links">
              <a href="#">
                {" "}
                <img src={google} /> Continue with Google
              </a>
              <a href="#"> Continue with Facebook</a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignupModal;
