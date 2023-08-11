import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { app, auth } from "../../firebase-config";

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
};

export default GoogleLoginButton;
