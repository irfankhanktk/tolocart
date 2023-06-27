import React, { useState } from "react";
import { onSignup } from "../../services/api/auth-api-actions";
import { UTILS } from "../../utils";
import "./style.css";
const RegistrationForm = () => {
  const fileInputRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = useState({
    profilePicture: null,
    fullName: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    momoNumber: "123",
    confirmPassword: "",
    role: "Customer",
  });
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, profilePicture: file });
  };

  const handleProfilePictureClick = () => {
    fileInputRef.current.click();
  };
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
        <div>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <div
            className="profile-picture-container"
            onClick={handleProfilePictureClick}
          >
            {formData.profilePicture ? (
              <img
                src={URL.createObjectURL(formData.profilePicture)}
                alt="Profile Picture"
                className="profile-picture shadow-3"
              />
            ) : (
              <i
                class="fa fa-user-circle"
                // style={{ height: "100px", width: "100px" }}
                aria-hidden="true"
              />
            )}
            <input
              type="file"
              hidden
              id="profilePicture"
              accept="image/*"
              ref={fileInputRef}
              className="profile-picture-input"
              onChange={handleProfilePictureChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
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
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
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
