import React from "react";
import "./style.css"; // Import custom CSS file for styling
import { error_img } from "../../assets/images";

const ErrorPage = ({ error }) => {
  return (
    <div
      className="error-page"
      style={{
        backgroundImage: `url(${error_img})`,
      }}
    >
      <div className="error-content">
        <h2>Oops! Something went wrong.</h2>
        <p>We apologize for the inconvenience.</p>
        <p>Please reload the page or try again later.</p>
        <p>{error}</p>
        <button
          className="reload-button"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
