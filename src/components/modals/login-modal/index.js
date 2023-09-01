import jwt_decode from "jwt-decode";
import React from "react";
import { Form, Modal, Nav, Tab } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fb, google } from "../../../assets/images";
import { onLogin } from "../../../services/api/auth-api-actions";
import GoogleLoginButton from "../../buttons/btn-google-login";
import "./login.css"; // Import the CSS file
import FacebookLogin from "react-facebook-login";
const LoginModal = ({ show, setShow, setForgetModal }) => {
  const [isPhoneTab, setIsPhoneTab] = React.useState("email");
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    email: "Mohsin@gmail.com",
    password: "Zikk@1234",
    phoneNumber: "+913425693093",
  });
  const handleGoogleLogin = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse?.credential);
    console.log("decoded::", decoded);
    dispatch(
      onLogin(
        {
          name: decoded?.name,
          email: decoded?.email,
          password: `Zikk@1234${decoded?.sub}`,
          confirmPassword: `Zikk@1234${decoded?.sub}`,
          image: decoded?.picture,
          phoneNumber: decoded?.phone || "",
        },
        (bool) => {},
        "social",
        setShow
      )
    );
  };
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
                  <div className="text-center">
                    <FacebookLogin
                      textButton=" Continue with Facebook"
                      size="small"
                      appId="1943117732727713"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={(res) => {}}
                      icon={
                        <i
                          className="fa fa-facebook"
                          style={{ cursor: "pointer" }}
                          aria-hidden="true"
                        />
                      }
                      cssClass="my-facebook-button-class"
                    />
                    <div className="my-google-btn">
                      <GoogleLoginButton onSuccess={handleGoogleLogin} />
                    </div>
                  </div>

                  <div className="continue-with-login-links">
                    <Link
                      to="#"
                      className="d-flex gap-3 align-items-center justify-content-center"
                    >
                      {" "}
                      <img src={fb} /> Continue with Facebook
                    </Link>
                  </div>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(false);
                      setForgetModal(true);
                    }}
                    className="forgot-password"
                  >
                    Forgot Password? <span>Reset it</span>{" "}
                  </Link>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="phone">
                <form>
                  <div className="modal-wrapper p-0">
                    <input
                      required
                      value={payload.phoneNumber}
                      name="phoneNumber"
                      type="tel"
                      placeholder="Phone Number"
                      className="login-input-field"
                      pattern="^\+1\d{10}$"
                      title="Please enter a valid phone number (+1 USA code)."
                      onChange={onHandleChange}
                    ></input>
                    <p className="verify-code">
                      We will send a text with a verification code. Message and
                      data rates may apply.
                    </p>
                    {/* <button onClick={onSubmit} type="submit">
                      Heloo
                    </button> */}
                    <button
                      type="submit"
                      disabled={loading}
                      onClick={onSubmit}
                      to="#"
                      className="element-custom-btn mb-3"
                    >
                      {loading ? "Loading" : "Continue"}
                    </button>
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
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
