import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  getOrderDetails,
  updateOrderPayment,
} from "../../../services/api/api-actions";
import { UTILS } from "../../../utils";
import PaymentModal from "../payment";
import "./placeOrder.css"; // Import the CSS file
const PlaceOrderModal = ({
  show,
  setShow,
  onPlaceClick,
  orderId,
  orderDetails,
  setOrderDetails,
  isOrderHistory,
}) => {
  const [isCash, setCash] = useState(true); 
  const [show2,setShow2]=useState(true)
  const [loading, setLoading] = React.useState(false);   
  const [placeOnlinePayment,setPlaceOnlinePayment]=useState(false)
  const navigate=useNavigate();
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
      alert(UTILS.returnError(error));
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
    <div>    { 
       placeOnlinePayment ? <PaymentModal show2={show2} setShow2={()=>{
        navigate(isOrderHistory?'/order-history':'/');
        setShow2(false);
      }} setPlaceOnlinePayment={setPlaceOnlinePayment} amount={orderDetails?.deliveryFee * 1 +
        orderDetails?.totalAmount * 1} />:undefined
     }
      <Modal show={show} onHide={()=>{
          navigate(isOrderHistory?'/order-history':'/');
        setShow(false)
        }} centered className="placeorder-wrap">
        <Modal.Header
          closeButton
          className="custom-close-header custom-close-btn d-flex flex-column align-items-start p-2"
        >
          <h2
            className="custom-header_title"
            style={{
              fontWeight: "normal",
              fontFamily: "Roboto",
              marginLeft: "-10px",
            }}
          >
      
            Check Out
          </h2>
        </Modal.Header>
        <Modal.Body className="p-0">
        
          <div>
            <div
              className={`dropdown mb-2 `}
              style={{ borderBottom: "1px solid rgba(226, 226, 226, 0.7)" }}
            >
              <h1 className="select-title">Payment</h1>

              <ul
                id="paymentmethod"
                style={{
                  transition: "transform 0.3s ease ",
                  fontFamily: "Roboto",
                  color: "grey",
                  paddingLeft: "25px",
                }}
              >
                <li
                  style={{
                    marginTop: "3px",
                    cursor: "pointer",
                    background: `${isCash ? "#ff5a00" : "white"}`,
                    color: `${isCash ? "white" : "grey"}`,
                  }}
                  onClick={() => {
                    setCash(true);  
                    setPlaceOnlinePayment(false)
                  }}
                >
                  Cash
                </li>
                <li
                  style={{
                    marginTop: "5px",
                    cursor: "pointer",
                    background: `${isCash ? "white" : "#ff5a00"}`,
                    color: `${isCash ? "grey" : "white"}`,
                  }}
                  onClick={() => {
                    setCash(false);   
                  }}
                >
                  Card
                </li>
              </ul>
            </div>

            <div
              className={`dropdown mb-2 `}
              style={{ borderBottom: "1px solid rgba(226, 226, 226, 0.7)" }}
            >
              <Link
                className="btn btn-secondary dropdown-toggle custom-dropdown"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"

                // onClick={handleArrowClick}
              >
                <h1 className="select-title">Total Cost</h1>
                <div className="d-flex gap-2 align-items-center">
                  <span className="select-detail-dsc">
                    ${" "}
                    {orderDetails?.deliveryFee * 1 +
                      orderDetails?.totalAmount * 1}
                  </span>
                  <i
                    className={`fa fa-angle-right`}
                    aria-hidden="true"
                    style={{
                      fontSize: "20px",
                     
                    }}
                  ></i>
                </div>
              </Link>

            
            </div>

            <div
              className="termsConditon-order"
              style={{ fontFamily: "Roboto" }}
            >
              <p style={{ fontWeight: "normal", marginTop: "25px" }}>
                By placing an order you agree to our <br />{" "}
                <span style={{ paddingTop: "25px" }}>
                  <Link
                    to="#"
                    style={{
                      fontWeight: "normal",
                      fontFamily: "Roboto",
                      marginLeft: "30%",
                      textDecoration: "none",
                      transform: "translate(-20%)",
                    }}
                  >
                    Terms and Conditions
                  </Link>
                </span>
              </p>
            </div>

            <div style={{ margin: "50px 0px" }}>
              {isCash ? (
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    onPlace();
                  }}
                  to="#"
                  className="element-custom-btn"
                  style={{ textDecoration: "none", fontFamily: "Roboto" }}
                >
                  {loading ? "Loading" : "Place Order"}
                </Link>
              ) : (
                <Link
                  onClick={(e) => {
                    e.preventDefault();  
                    if(isCash){ 
                      onPlace();
                    } 
                    else{
                      setShow(false);
                      setShow2(true);
                       setPlaceOnlinePayment(true)   
                    }
                  
                  }}
                  to="#"
                  className="element-custom-btn"
                  style={{ textDecoration: "none", fontFamily: "Roboto" }}
                >
                  {loading ? "Loading" : "Proceed To Card Payment"}
                </Link>
              )}
            </div>
          </div>
          {/* )} */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PlaceOrderModal;
