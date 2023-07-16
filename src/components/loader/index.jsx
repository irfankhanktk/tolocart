import React from "react";
import "./style.css";
export default function Loader({ style }) {
  return (
    <div
      style={{
        height: window.innerHeight,
        ...style,
      }}
      className="d-flex flex-column justify-content-center text-center"
    >
      <Shimmer />
    </div>
  );
}

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-content"></div>
    </div>
  );
};
