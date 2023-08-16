import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import jwt_decode from "jwt-decode";
// import { app, auth } from "../../firebase-config";

const GoogleLoginButton = () => {
  const handleGoogleLogin = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse?.credential);
    console.log("decoded::", decoded);
  };

  return (
    <GoogleLogin
      size={"large"}
      auto_select
      onSuccess={handleGoogleLogin}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
