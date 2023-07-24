import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col } from "react-bootstrap";
import "./placeOrder.css"; // Import the CSS file
import { Payment_card, fb, google } from "../../../assets/images";
import {
  getOrderDetails,
  updateOrderPayment,
} from "../../../services/api/api-actions";
import { waiting } from "../../../assets/svgs";
const PlaceOrderModal = ({
  show,
  setShow,
  onPlaceClick,
  orderId,
  orderDetails,
  setOrderDetails,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);
  const [loading, setLoading] = React.useState(false);
  const getDetails = async () => {
    try {
      if ((!orderId && !show) || orderDetails?.isAssigned) return;

      const res = await getOrderDetails(orderId);
      setOrderDetails(res?.data);
    } catch (error) {
      console.log("error::", error);
    }
  };
  const onPlace = async () => {
    try {
      setLoading(true);
      const payload = {
        id: orderDetails?.id,
        paymentMethod: "cash",
        totalAmount:
          orderDetails?.totalAmount * 1 + orderDetails?.deliveryFee * 1,
      };
      const res = await updateOrderPayment(payload);
      onPlaceClick();
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
  const handleArrowClick = () => {
    setIsOpen(!isOpen);
    setArrowRotation(arrowRotation === 0 ? 90 : 0);
  };

  return (
    <div>
      <Modal show={show} onHide={setShow} centered className="placeorder-wrap">
        <Modal.Header
          closeButton
          className="custom-close-header custom-close-btn d-flex flex-column align-items-start p-2"
        >
          <h2 className="custom-header_title">
            {!orderDetails?.isAssigned ? "Waiting" : "Check Out"}
          </h2>
        </Modal.Header>
        <Modal.Body className="p-0">
          {!orderDetails?.isAssigned ? (
            <div className="text-center">
              <img src={waiting} />
              <p>Please wait we are assigning your order to delivery boy</p>
            </div>
          ) : (
            <div>
              <div
                className={`dropdown mb-2 ${isOpen ? "show" : ""}`}
                style={{ borderBottom: "1px solid rgba(226, 226, 226, 0.7)" }}
              >
                <a
                  className="btn btn-secondary dropdown-toggle custom-dropdown"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded={isOpen ? "true" : "false"}
                  onClick={handleArrowClick}
                >
                  <h1 className="select-title">Payment</h1>
                  <div className="d-flex gap-2 align-items-center">
                    <img src={Payment_card} />
                    <i
                      className={`fa fa-angle-right ${isOpen ? "open" : ""}`}
                      aria-hidden="true"
                      style={{
                        fontSize: "20px",
                        transform: `rotate(${arrowRotation}deg)`,
                        transition: "transform 0.3s ease",
                      }}
                    ></i>
                  </div>
                </a>

                <ul
                  className={`dropdown-menu custom-dropdown-menu ${
                    isOpen ? "show" : ""
                  }`}
                  aria-labelledby="dropdownMenuLink"
                  style={{ transition: "transform 0.3s ease " }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className={`dropdown mb-2 ${isOpen ? "show" : ""}`}
                style={{ borderBottom: "1px solid rgba(226, 226, 226, 0.7)" }}
              >
                <a
                  className="btn btn-secondary dropdown-toggle custom-dropdown"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded={isOpen ? "true" : "false"}
                  onClick={handleArrowClick}
                >
                  <h1 className="select-title">Promo Code</h1>
                  <div className="d-flex gap-2 align-items-center">
                    <span className="select-detail-dsc">Pick discount</span>
                    <i
                      className={`fa fa-angle-right ${isOpen ? "open" : ""}`}
                      aria-hidden="true"
                      style={{
                        fontSize: "20px",
                        transform: `rotate(${arrowRotation}deg)`,
                        transition: "transform 0.3s ease",
                      }}
                    ></i>
                  </div>
                </a>

                <ul
                  className={`dropdown-menu custom-dropdown-menu ${
                    isOpen ? "show" : ""
                  }`}
                  aria-labelledby="dropdownMenuLink"
                  style={{ transition: "transform 0.3s ease " }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className={`dropdown mb-2 ${isOpen ? "show" : ""}`}
                style={{ borderBottom: "1px solid rgba(226, 226, 226, 0.7)" }}
              >
                <a
                  className="btn btn-secondary dropdown-toggle custom-dropdown"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded={isOpen ? "true" : "false"}
                  onClick={handleArrowClick}
                >
                  <h1 className="select-title">Total Cost</h1>
                  <div className="d-flex gap-2 align-items-center">
                    <span className="select-detail-dsc">
                      ${" "}
                      {orderDetails?.deliveryFee * 1 +
                        orderDetails?.totalAmount * 1}
                    </span>
                    <i
                      className={`fa fa-angle-right ${isOpen ? "open" : ""}`}
                      aria-hidden="true"
                      style={{
                        fontSize: "20px",
                        transform: `rotate(${arrowRotation}deg)`,
                        transition: "transform 0.3s ease",
                      }}
                    ></i>
                  </div>
                </a>

                <ul
                  className={`dropdown-menu custom-dropdown-menu ${
                    isOpen ? "show" : ""
                  }`}
                  aria-labelledby="dropdownMenuLink"
                  style={{ transition: "transform 0.3s ease " }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>

              <div className="termsConditon-order">
                <p>
                  By placing an order you agree to our <br />{" "}
                  <a href="#">Terms and Conditions</a>
                </p>
              </div>

              <div style={{ margin: "50px 0px" }}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    onPlace();
                  }}
                  href="#"
                  className="element-custom-btn"
                  style={{ textDecoration: "none" }}
                >
                  {loading ? "Loading" : "Place Order"}
                </a>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PlaceOrderModal;
