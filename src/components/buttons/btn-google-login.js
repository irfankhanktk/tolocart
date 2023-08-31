import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import React from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";
// import { app, auth } from "../../firebase-config";

const GoogleLoginButton = ({ onSuccess }) => {
  const exchangeCodeForToken = async (authorizationCode) => {
    const response = await axios.post("https://oauth2.googleapis.com/token", {
      code: authorizationCode,
      client_id:
        "738995038411-v2e4begndc2621k8l4db1o6a9jv5mkaa.apps.googleusercontent.com",
      client_secret: "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",
      redirect_uri: "http://localhost:3000/",
      grant_type: "authorization_code",
    });

    return response.data.access_token;
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      exchangeCodeForToken(codeResponse?.code);
    },
    flow: "auth-code",
  });
  return (
    // <GoogleLogin
    //   size={"large"}
    //   // auto_select
    //   onSuccess={onSuccess}
    //   onError={() => {
    //     console.log("Login Failed");
    //   }}
    // />
    <Link onClick={login}>Google login</Link>
  );
};

export default GoogleLoginButton;
