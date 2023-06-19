import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col } from "react-bootstrap";
import "./checkout.css"; // Import the CSS file
import { fb, google } from "../../../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BestReviewedCard from "../../best-reviewed-card";
import CheckoutProduct from "../../checkout-product";
import { useSelector } from "react-redux";

const CheckoutModal = ({ show, setShow }) => {
  const { cart } = useSelector((s) => s);
  return (
    <Modal show={show} onHide={setShow} centered>
      <Modal.Header
        closeButton
        className="custom-close-header custom-close-btn d-flex flex-column align-items-start p-2"
      >
        <h2 className="custom-header_title">GNN Mart Shopping</h2>
        <h3 className="custom-header_address">
          <i class="fa fa-map-marker" aria-hidden="true"></i> Ygnacio, CA
        </h3>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="Checkout-modal-wrapper">
          <div className="card-container">
            <Slider
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              className="card-slider"
              responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {/* className='card-slider'> */}
              {cart?.cart?.map((item, index) => (
                <CheckoutProduct item={item} key={index} />
              ))}
            </Slider>
          </div>
          {/* <CheckoutProduct/> */}
          {/* suggestion items start */}
          <div className="mb-0 ms-0 me-0" style={{ marginTop: "11px" }}>
            <h2 className="suggestion-title">Suggested items</h2>
            <h3 className="suggestion-line">
              Add these top picks to your order
            </h3>
            <div className="card-container">
              <Slider
                dots={false}
                infinite={false}
                speed={500}
                slidesToShow={2}
                slidesToScroll={1}
                className="card-slider"
                responsive={[
                  {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ]}
              >
                {/* className='card-slider'> */}
                {[
                  { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
                  { title: "Retail", bg: "#53B1751A", border: "#53B175B2" },
                  {
                    title: "Electronic",
                    bg: "#D3B0E01A",
                    border: "##D3B0E01A",
                  },
                  { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
                  { title: "Groceries", bg: "#F8A44C1A", border: "#F8A44CB2" },
                ].map((item, index) => (
                  <BestReviewedCard
                    key={index}
                    title={item?.title}
                    bg={item?.bg}
                  />
                ))}
              </Slider>
            </div>
          </div>
          {/* suggestion items end */}

          {/* table start*/}
          <div
            className="biling-detail position-relative"
            style={{ marginTop: "25px" }}
          >
            <table style={{ width: "100%" }}>
              <tr className="no-border">
                <h2 className="billing-title">Billing Detail</h2>
              </tr>
              <tr>
                <td>Item Price</td>
                <td>$ 3.49</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>$ 1.0</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>$ 0.51</td>
              </tr>
              <tr className="no-border">
                <td>Delivery Charges</td>
                <td>
                  <span className="EstimateCost">Estimated Cost </span> $ 2.0
                </td>
              </tr>
              <tr className="no-border">
                <td>Total Cost</td>
                <td className="highlighted">$ 5.0</td>
              </tr>
            </table>
          </div>
          {/* table end*/}

          <div style={{ marginTop: "25px" }}>
            <a
              href="#"
              className="login-btn"
              style={{ textDecoration: "none" }}
            >
              Next{" "}
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CheckoutModal;
