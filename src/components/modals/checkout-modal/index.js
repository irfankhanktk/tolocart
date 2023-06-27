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
import {
  getSuggestedItems,
  placeOrder,
} from "../../../services/api/api-actions";
import Loader from "../../loader";

const CheckoutModal = ({ show, setShow, onNextClick }) => {
  const { cart, user } = useSelector((s) => s);
  const [relatedProducts, setRelatedProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [orderLoading, setOrderLoading] = React.useState(false);
  const [deliveryCharges, setDeliveryCharges] = React.useState("0");
  const [distance, setDistance] = React.useState("1");
  const onPlaceOrder = async (data) => {
    try {
      console.log("data::", data);
      setOrderLoading(true);
      await placeOrder(data);
      alert("Order Placed Successfully");
      onNextClick();
    } catch (error) {
      console.log("error=>>", error);
      alert(UTILS.returnError(error));
    } finally {
      setOrderLoading(false);
    }
  };
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
  const getDeliveryCharges = async () => {
    try {
      const vendorShop = cart?.cart[0]?.vendorShop;
      const res = await UTILS.getDistance(
        user?.location?.latitude,
        vendorShop?.latitude,
        user?.location?.longitude,
        vendorShop?.longitude
      );
      console.log("chargesss:::", res);
      setDistance(res);
      setDeliveryCharges((res || 1) * user?.vehicle?.perKmRate);
    } catch (error) {
      alert(UTILS.returnError(error));
    }
  };
  React.useEffect(() => {
    if (cart?.cart?.length) getDeliveryCharges();
    getRelatedItems();
  }, [cart?.cart?.length]);
  const total = cart?.cart?.reduce(
    (res, item) => (res += (item?.discountedPrice || item?.price) * item?.qty),
    0
  );
  const totalDiscount = cart?.cart?.reduce(
    (res, item) => (res += item?.discountedPrice * item?.qty),
    0
  );
  const totalWithoutDiscount = cart?.cart?.reduce(
    (res, item) => (res += item?.price * item?.qty),
    0
  );
  const data = {
    totalAmount: total + deliveryCharges,
    shopId: cart?.cart[0]?.vendorShopId,
    deliveryAddress: user?.location?.address,
    latitude: user?.location?.latitude,
    longitude: user?.location?.longitude,
    orderItems: cart?.cart?.map((item) => ({
      id: item?.id,
      qty: item?.qty,
      unitPrice: item?.discountedPrice || item?.price,
      flavor: "",
      size: "",
    })),
    paymentMethod: "Cash",
    distance: distance || "1",
    description: "",
    customerId: user?.userInfo?.id,
    isPaid: false,
    deliveryFee: 0,
    statusId: 0,
    preferenceName: "",
    preferenceId: 0,
    preferencePhone: "",
  };
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
                <td>Total without Discount</td>
                <td>$ {totalWithoutDiscount}</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>$ {totalDiscount}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>$ 0</td>
              </tr>
              <tr className="no-border">
                <td>Delivery Charges</td>
                <td>
                  <span className="EstimateCost">Estimated Cost </span> ${" "}
                  {deliveryCharges}
                </td>
              </tr>
              <tr className="no-border">
                <td>Total Cost</td>
                <td className="highlighted">$ {total + deliveryCharges}</td>
              </tr>
            </table>
          </div>
          {/* table end*/}

          <div style={{ marginTop: "25px" }}>
            <a
              disabled={orderLoading}
              onClick={() => {
                onPlaceOrder({
                  totalAmount: total + deliveryCharges,
                  shopId: cart?.cart[0]?.vendorShopId,
                  deliveryAddress: user?.location?.address,
                  latitude: user?.location?.latitude,
                  longitude: user?.location?.longitude,
                  orderItems: cart?.cart?.map((item) => ({
                    id: item?.id,
                    qty: item?.qty,
                    unitPrice: item?.discountedPrice || item?.price,
                    flavor: "",
                    size: "",
                  })),
                  paymentMethod: "Cash",
                  distance: distance || "1",
                  description: "",
                  customerId: user?.userInfo?.id,
                  isPaid: false,
                  deliveryFee: 0,
                  statusId: 0,
                  preferenceName: "",
                  preferenceId: 0,
                  preferencePhone: "",
                });
              }}
              href="#"
              className="element-custom-btn"
              style={{ textDecoration: "none" }}
            >
              {orderLoading ? "Loading" : "Place Order"}
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CheckoutModal;
