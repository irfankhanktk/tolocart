import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { onUpdateProfile } from "../../services/api/auth-api-actions";
import { UTILS } from "../../utils";
import "./style.css";
import { setUserInfo } from "../../store/reducers/user-reducer";
const ProfileForm = ({
  formData,
  setFormData,
  loading,
  setLoading,

  setShow = (bool) => {},
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
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
      setLoading(true);
      const res = await onUpdateProfile({
        ...formData,
        profilePicture: selectedFile,
      });
      console.log("ress of onUpdateProfile::", res);
      dispatch(setUserInfo(res?.data));
      setShow(false);
    } catch (error) {
      alert(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div {...getRootProps()} style={dropzoneStyle}>
          <input {...getInputProps()} />
          {selectedFile || formData?.image ? (
            <img
              src={
                selectedFile
                  ? URL.createObjectURL(selectedFile)
                  : formData?.image
              }
              alt="Profile"
              style={imageStyle}
            />
          ) : (
            <p className="p-2 text-center">
              Drag &amp; drop a profile picture here, or click to select one.
            </p>
          )}
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
        <div className="mb-3 text-center">
          <button disabled={loading} type="submit" className="btn btn-primary">
            {loading ? "Loading" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};
const dropzoneStyle = {
  width: "200px",
  height: "200px",
  border: "2px dashed #ccc",
  borderRadius: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "100px",
};

export default ProfileForm;
