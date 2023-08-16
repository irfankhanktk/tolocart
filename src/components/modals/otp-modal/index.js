import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import OTPInput from "react-otp-input";

function OTPModal({ show, onHide }) {
  const [otp, setOTP] = useState("");

  const handleVerify = () => {
    // Handle OTP verification logic here
    console.log("Verifying OTP:", otp);
    // Add your logic to verify the OTP code
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enter OTP Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-row justify-content-center">
          <OTPInput
            inputStyle={{ height: 50, width: 50 }}
            value={otp}
            onChange={setOTP}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleVerify}>
          Verify
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OTPModal;
