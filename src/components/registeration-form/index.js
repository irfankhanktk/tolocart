import React, { useState } from "react";
import { onSignup } from "../../services/api/auth-api-actions";
import { UTILS } from "../../utils";
import "./style.css";
const RegistrationForm = ({ setShow = (bool) => {} }) => {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    // role: "Customer",
  });

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
      setShow(false);
      // Perform form submission or validation logic here
    } catch (error) {
      alert(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
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
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
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
