import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col } from "react-bootstrap";
import "./trackOrder.css"; // Import the CSS file
import {
  Payment_card,
  PlaceOrder_img,
  fb,
  google,
} from "../../../assets/images";
import { useNavigate } from "react-router-dom";
import { waiting } from "../../../assets/svgs";
import { getOrderDetails } from "../../../services/api/api-actions";
const TrackOrderModal = ({ show, setShow, orderId }) => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  console.log("orderId::", orderId);
  const getDetails = async () => {
    try {
      if (!orderId) return;
      setLoading(true);
      const res = await getOrderDetails(orderId);
      setOrderDetails(res?.data);
    } catch (error) {
      console.log("error::", error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    const intervalId = setInterval(getDetails, 30000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [orderId]);
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
          {!orderDetails?.isAssigned ? (
            <div className="text-center">
              <img src={waiting} />
              <p>Please wait we are assigning your order to delivery boy</p>
            </div>
          ) : (
            <>
              <div className="order-placed">
                <img src={PlaceOrder_img} />
              </div>
              <h2 className="order-accept-msg">Your Order has been accepted</h2>
              <h3 className="order-proced-msg">
                Your Items has been placed and is an it's way to being processed
              </h3>
              <div style={{ margin: "20px 0px" }}>
                <a
                  onClick={(e) => {
                    // e.stopPropagation();
                  }}
                  href={`/track-order?id=${orderId}`}
                  className="element-custom-btn"
                  style={{ textDecoration: "none" }}
                >
                  Track Order{" "}
                </a>
              </div>
              <div className="text-center" style={{ margin: "10px 0px" }}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(false);

                    navigate("/");
                  }}
                  href="#"
                  className="back-home-btn"
                  style={{ textDecoration: "none" }}
                >
                  Back to home{" "}
                </a>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TrackOrderModal;
