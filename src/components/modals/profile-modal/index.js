import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ProfileForm from "../../profile-form";
import "./signup.css"; // Import the CSS file
import { useSelector } from "react-redux";

const ProfileModal = ({ show, setShow, onSuccessRegister = (bool) => {} }) => {
  const [loading, setLoading] = React.useState(false);
  const { userInfo } = useSelector((s) => s?.user);
  const [formData, setFormData] = useState({
    ...userInfo,
  });
  React.useEffect(() => {
    setFormData({
      ...userInfo,
      role: "Customer",
    });
  }, [userInfo]);
  return (
    <div>
      <Modal show={show} onHide={setShow} centered>
        <Modal.Header
          closeButton
          className="custom-close-header"
        ></Modal.Header>
        <Modal.Body className="p-0">
          <div className="modal-wrapper">
            <span className="signup-title decoration-none">Profile info</span>
            <ProfileForm
              formData={formData}
              setFormData={setFormData}
              loading={loading}
              setLoading={setLoading}
              setShow={onSuccessRegister}
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProfileModal;
