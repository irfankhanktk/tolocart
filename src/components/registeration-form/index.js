import React, { useState } from "react";
import { onLogin, onSignup } from "../../services/api/auth-api-actions";
import { UTILS } from "../../utils";
import "./style.css";
import MyToast from "../toast";
import { useDispatch } from "react-redux";
const RegistrationForm = ({ setShow = (bool) => {}, show }) => {
  const [suggestedPassword, setSuggested] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const dispatch = useDispatch();

  const [secure, setSecure] = React.useState({
    password: true,
    confirmPassword: true,
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    // role: "Customer",
  });
  React.useEffect(() => {
    if (show) {
      const interval = setInterval(() => {
        setSuggested(UTILS.generatePassword());
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [show]);
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert("Password and Confirm Password must match");
        return;
      }
      setLoading(true);
      const res = await onSignup(formData);
      console.log("ress of register::", res);
      dispatch(onLogin(formData, setLoading, true, setShow));
      setShowToast(true);
      // setShow(false);
      // Perform form submission or validation logic here
    } catch (error) {
      alert(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <MyToast
        title={"Registration"}
        body={"Register Successfully"}
        showToast={showToast}
        setShowToast={setShowToast}
      />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-container">
            <input
              type={secure?.password ? "password" : "text"}
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).+$"
              title="Passwords must have at least one non alphanumeric character one lower and uppercase letter"
            />
            <button
              type="button"
              onClick={(e) =>
                setSecure({ ...secure, password: !secure?.password })
              }
              className="decoration-none icon-container px-2"
            >
              <i
                class={secure?.password ? `fa fa-eye` : `fa fa-eye-slash`}
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
            </button>
          </div>
          <small>Suggested {suggestedPassword}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <div className="input-container">
            <input
              type={secure?.confirmPassword ? "password" : "text"}
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              onClick={(e) =>
                setSecure({
                  ...secure,
                  confirmPassword: !secure?.confirmPassword,
                })
              }
              className="decoration-none icon-container px-2"
            >
              <i
                class={
                  secure?.confirmPassword ? `fa fa-eye` : `fa fa-eye-slash`
                }
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
            </button>
          </div>
        </div>
        <div className="mb-3 text-center">
          <button disabled={loading} type="submit" className="btn btn-primary">
            {loading ? "Loading" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
