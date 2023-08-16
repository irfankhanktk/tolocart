import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import jwt_decode from "jwt-decode";
// import { app, auth } from "../../firebase-config";

const GoogleLoginButton = ({ onSuccess }) => {
  return (
    <GoogleLogin
      size={"large"}
      // auto_select
      onSuccess={onSuccess}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
