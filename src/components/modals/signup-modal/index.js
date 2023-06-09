import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col } from "react-bootstrap";
import "./signup.css"; // Import the CSS file
import { fb, google } from "../../../assets/images";
import RegistrationForm from "../../registeration-form";

const SignupModal = ({ show, setShow, onSuccessRegister = (bool) => {} }) => {
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
            <RegistrationForm setShow={onSuccessRegister} />
            <a href="#" className="social-links">
              Or connect with social media
            </a>

            <div className="continue-with-links">
              <a
                href="#"
                className="d-flex gap-3 align-items-center justify-content-center"
              >
                {" "}
                <img src={google} /> Continue with Google
              </a>
              <a
                href="#"
                className="d-flex gap-3 align-items-center justify-content-center"
              >
                <img src={fb} /> Continue with Facebook
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignupModal;
