import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col } from "react-bootstrap";
import { cross_icon, gray_heart, share } from "../../../assets/svgs";
import { apple } from "../../../assets/images";
import "./style.css";
const ProductDetailsModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleModalOpen}>
        Product Details
      </Button>

      <Modal
        show={showModal}
        className="custom-modal"
        onHide={handleModalClose}
      >
        {/* <Modal {...props} dialogClassName="custom-modal"> */}
        <Modal.Body>
          <img
            src={cross_icon}
            alt="cross"
            className="position-absolute"
            style={{ height: "45px", width: "45px" }}
          />
          <div className="px-3 d-flex flex-row">
            <div className="col-md-4 px-md-3">
              <img
                src={apple}
                alt="apple"
                className="product-img"
                style={{ height: "300px", width: "400px" }}
              />
            </div>
            <div className="col-md-4 px-md-5 d-flex justify-content-between flex-row">
              <p className="product-details-title">Red Apple</p>
              <div className="d-flex flex-row gap-3">
                <img src={share} style={{ height: "25px", width: "25px" }} />
                <img
                  src={gray_heart}
                  style={{ height: "25px", width: "25px" }}
                />
              </div>
            </div>
            <div className="col-md-4 px-md-3"></div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductDetailsModal;
