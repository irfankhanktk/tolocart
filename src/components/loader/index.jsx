import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        height: window.innerHeight,
      }}
      className="d-flex flex-column justify-content-center text-center"
    >
      Loading...
    </div>
  );
}
