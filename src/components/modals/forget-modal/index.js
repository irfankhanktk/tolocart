import React from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  onEmailSend,
  onLogin,
  onPasswordsSend,
} from "../../../services/api/auth-api-actions";
import "./login.css"; // Import the CSS file
import OTPInput from "react-otp-input";
import { UTILS } from "../../../utils";
const ForgetModal = ({ show, setShow }) => {
  const [otp, setOTP] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [saveLoading, setSaveLoading] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [isVerifyOtp, setIsVerifyOtp] = React.useState(false);
  const [data, setData] = React.useState();
  const [payload, setPayload] = React.useState({
    email: "Mohsin@gmail.com",
    password: "",
    confirmPassword: "",
  });

  const [count, setCount] = React.useState(30);

  React.useEffect(() => {
    let interval = null;

    if (isActive && count > 0) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (!isActive && count === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, count]);

  const onHandleChange = (e) =>
    setPayload((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  const onSubmitEmail = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await onEmailSend({ email: payload?.email });
      setData(res?.data);
      setIsActive(true);
      console.log("resssss:::", res);
    } catch (error) {
      console.log("error:::", error);
      alert(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
    // const data = { ...payload };
  };
  const onSubmit = async () => {
    try {
      setSaveLoading(true);
      const res = await onPasswordsSend({ ...payload, otp });
      console.log("resssss:::", res);
      setShow(false);
    } catch (error) {
      console.log("error:::", error);
      alert(UTILS.returnError(error));
    } finally {
      setSaveLoading(false);
    }
  };
  console.log(data);
  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton className="custom-close-header">
        <Modal.Title>Forget Password</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="modal-wrapper">
          {!isActive ? (
            <Form>
              <input
                value={payload.email}
                name="email"
                type="email"
                placeholder="Email"
                className="login-input-field"
                onChange={onHandleChange}
                required
              />
              <button
                disabled={loading}
                className="element-custom-btn mb-3"
                onClick={onSubmitEmail}
                type="submit"
              >
                {" "}
                {loading ? "Loading" : "Forgot"}
              </button>
            </Form>
          ) : isActive && !isVerifyOtp ? (
            <>
              {/* <h5>Verification Code</h5> */}
              <p className="text-center">
                {`${count < 10 ? "0" : ""}${count}`} seconds
              </p>
              <div className="d-flex flex-row justify-content-center">
                <OTPInput
                  inputStyle={{ height: 50, width: 50 }}
                  value={otp}
                  onChange={(t) => {
                    setOTP(t);
                    if (t == data) {
                      setIsVerifyOtp(true);
                    }
                  }}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
            </>
          ) : (
            <Form>
              <input
                value={payload.password}
                name="password"
                type="password"
                placeholder="Password"
                className="login-input-field"
                onChange={onHandleChange}
              />
              <input
                value={payload.confirmPassword}
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                className="login-input-field"
                onChange={onHandleChange}
              />
              <button
                disabled={saveLoading}
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
                className="element-custom-btn mb-3"
                type="submit"
              >
                {saveLoading ? "Loading" : "Save"}
              </button>
            </Form>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ForgetModal;
