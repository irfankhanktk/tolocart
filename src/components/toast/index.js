import React, { useEffect } from "react";
import Toast from "react-bootstrap/Toast";

function MyToast({ showToast, setShowToast, title, body }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
    }, 5000);

    return () => clearTimeout(timer);
  }, [showToast]);

  const hideToast = () => {
    setShowToast(false);
  };

  return (
    <Toast
      show={showToast}
      className="d-inline-block m-1"
      id="myToast"
      bg="primary"
    >
      <Toast.Header>
        {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
        <strong className="me-auto">{title}</strong>
        {/* <small>11 mins ago</small> */}
      </Toast.Header>
      <Toast.Body className="text-white">{body}</Toast.Body>
    </Toast>
  );
}

export default MyToast;
