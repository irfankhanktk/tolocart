import React from "react";

export default function Loader({ style }) {
  return (
    <div
      style={{
        height: window.innerHeight,
        ...style,
      }}
      className="d-flex flex-column justify-content-center text-center"
    >
      Loading...
    </div>
  );
}
