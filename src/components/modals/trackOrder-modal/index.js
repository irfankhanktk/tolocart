import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col } from "react-bootstrap";
import "./trackOrder.css"; // Import the CSS file
import {
  Payment_card,
  PlaceOrder_img,
  fb,
  google,
} from "../../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import { waiting } from "../../../assets/svgs";
const TrackOrderModal = ({ show, setShow, orderId, orderDetails }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Modal show={show} onHide={setShow} centered className="placeorder-wrap">
        {/* <Modal.Header
          closeButton
          className="custom-close-header custom-close-btn d-flex flex-column align-items-start p-2"
        >
          <h2 className="custom-header_title">Check Out</h2>
        </Modal.Header> */}
        <Modal.Body className="p-0">
          <>
            <div className="order-placed">
              <img src={PlaceOrder_img} />
            </div>
            <h2 className="order-accept-msg">Your Order has been accepted</h2>
            <h3 className="order-proced-msg">
              Your Items has been placed and is an it's way to being processed
            </h3>
            <div style={{ margin: "20px 0px" }}>
              <Link
                to={`/track-order?id=${orderId}`}
                className="element-custom-btn"
                style={{ textDecoration: "none" }}
              >
                Track Order{" "}
              </Link>
            </div>
            <div className="text-center" style={{ margin: "10px 0px" }}>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setShow(false);
                  navigate("/");
                }}
                to="#"
                className="back-home-btn"
                style={{ textDecoration: "none" }}
              >
                Back to home{" "}
              </Link>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TrackOrderModal;
