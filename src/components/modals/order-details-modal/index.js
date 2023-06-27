import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getOrderDetails } from "../../../services/api/api-actions";
import { UTILS } from "../../../utils";
import CheckoutProduct from "../../checkout-product";
import "./style.css"; // Import the CSS file
import Loader from "../../loader";

const OrderDetailsModal = ({ show, setShow, order_id }) => {
  const { cart, user } = useSelector((s) => s);
  const [orderDetails, setOrderDetails] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getDetails = async () => {
    try {
      setLoading(true);
      const res = await getOrderDetails(order_id);
      setOrderDetails(res?.data);
    } catch (error) {
      console.log("error=>>", error);
      alert(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getDetails();
  }, [order_id]);

  return (
    <Modal show={show} onHide={setShow} centered className="">
      <Modal.Header
        closeButton
        className="custom-close-header custom-close-btn d-flex flex-column align-items-start p-2"
      ></Modal.Header>
      <Modal.Body className="p-1">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="text-center">
              <h2 className="custom-header_title">Order Details</h2>
            </div>
            <div className="Checkout-modal-wrapper">
              <img
                src={orderDetails?.shopImage}
                className="rounded"
                style={{
                  width: "100%",
                  height: "150px",
                }}
              />
              <h5>{orderDetails?.shopName}</h5>
              {/* <p>{orderDetails?.shopAddress}</p> */}
              <p>Order Id : TYR-{orderDetails?.id}</p>
              <p>Order from : {orderDetails?.shopAddress}</p>
              <p> Delivery Address :{orderDetails?.deliveryAddress}</p>
              <div className="card-container">
                {orderDetails?.orderItems?.map((item, index) => (
                  <div
                    key={index}
                    className="mb-2 d-flex flex-row justify-content-between border-top border-bottom py-1"
                  >
                    <span>
                      {item?.qty} x {item?.name}
                    </span>
                    <span>{item?.qty * item?.unitPrice}</span>
                  </div>
                ))}
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span>Sub Total</span>
                <span>${orderDetails?.totalAmount}</span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <span>Delivery Charges</span>
                <span>${orderDetails?.deliveryFee}</span>
              </div>
              <div className="d-flex flex-row justify-content-between border-top border-bottom py-1">
                <span>Grand Total (Incl. GST)</span>
                <span>
                  ${orderDetails?.deliveryFee + orderDetails?.totalAmount}
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default OrderDetailsModal;
