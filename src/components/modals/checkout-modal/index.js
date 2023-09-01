import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  getSuggestedItems,
  placeOrder,
} from "../../../services/api/api-actions";
import { setIsReqLogin } from "../../../store/reducers/user-reducer";
import { UTILS } from "../../../utils";
import BestReviewedCard from "../../best-reviewed-card";
import CheckoutProduct from "../../checkout-product";
import Loader from "../../loader";
import "./checkout.css"; // Import the CSS file
import { setCart } from "../../../store/reducers/cart-slice";

const CheckoutModal = ({ show, setShow, onNextClick }) => {
  const { cart, user } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [relatedProducts, setRelatedProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [orderLoading, setOrderLoading] = React.useState(false);
  const [deliveryCharges, setDeliveryCharges] = React.useState("0");
  const [distance, setDistance] = React.useState("1");
  const onPlaceOrder = async (data) => {
    try {
      setOrderLoading(true);
      const res = await placeOrder(data);
      dispatch(setCart([]));
      onNextClick(res);
    } catch (error) {
      console.log("error=>>", error);
      if (UTILS?.returnError(error) === "Request failed with status code 401") {
        dispatch(setIsReqLogin(true));
      } else {
        alert(UTILS?.returnError(error));
      }
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
      setDistance(res);
      setDeliveryCharges((res || 1) * user?.vehicle?.perKmRate);
    } catch (error) {}
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
    <Modal className="modal-outer" show={show} onHide={setShow}>
      <Modal.Header
        closeButton
        className="custom-modal-content custom-close-header custom-close-btn d-flex flex-column align-items-start p-2"
      >
        <h2 className="custom-header_title">
          {cart?.cart[0]?.vendorShop?.name}
        </h2>
        {cart?.cart[0] && (
          <h3 className="custom-header_address">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            {` ${cart?.cart[0]?.vendorShop?.location}`}
          </h3>
        )}
      </Modal.Header>
      <Modal.Body className="p-2 custom-modal-body">
        {cart?.cart?.length ? (
          <div className="Checkout-modal-wrapper">
            <div className="card-container">
              {cart?.cart?.map((item, index) => (
                <CheckoutProduct item={item} key={index} />
              ))}
            </div>
            {/* suggestion items start */}
            {cart?.cart?.length ? (
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
                      {relatedProducts?.map((item, index) => (
                        <BestReviewedCard key={index} item={item} />
                      ))}
                    </Slider>
                  </div>
                )}
              </div>
            ) : null}
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
                  <td className="highlighted">
                    $ {total + deliveryCharges * 1}
                  </td>
                </tr>
              </table>
            </div>
            {/* table end*/}

            <div style={{ marginTop: "25px" }}>
              <Link
                disabled={orderLoading}
                onClick={() => {
                  onPlaceOrder({
                    totalAmount: total + deliveryCharges * 1,
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
                to="#"
                className="element-custom-btn"
                style={{ textDecoration: "none" }}
              >
                {orderLoading ? "Loading" : "Next"}
              </Link>
            </div>
          </div>
        ) : (
          <span>You have no item in the cart</span>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CheckoutModal;
