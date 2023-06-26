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
import { UTILS } from "../../../utils";
import { getSuggestedItems } from "../../../services/api/api-actions";
import Loader from "../../loader";

const CheckoutModal = ({ show, setShow }) => {
  const { cart } = useSelector((s) => s);
  const [relatedProducts, setRelatedProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getRelatedItems = async () => {
    try {
      setLoading(true);
      if (cart?.cart?.length) {
        const res = await getSuggestedItems(
          cart?.cart?.map((x) => x?.id).join()
        );
        setRelatedProducts(
          res?.data?.map((item) => item?.vendorShop?.products || [])?.flat()
        );
      }
    } catch (error) {
      console.log("error=>>", error);
      alert(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getRelatedItems();
  }, [cart?.length]);
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
            {loading ? (
              <Loader style={{ height: "200px" }} />
            ) : (
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
                  {relatedProducts?.map((item, index) => (
                    <BestReviewedCard key={index} item={item} />
                  ))}
                </Slider>
              </div>
            )}
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
              className="element-custom-btn"
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
