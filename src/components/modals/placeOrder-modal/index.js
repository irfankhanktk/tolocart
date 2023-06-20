import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col } from "react-bootstrap";
import "./placeOrder.css"; // Import the CSS file
import { Payment_card, fb, google} from "../../../assets/images";
const  PlaceOrderModal = ({ show, setShow }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);
  const handleArrowClick = () => {
    setIsOpen(!isOpen);
    setArrowRotation(arrowRotation === 0 ? 90 : 0);
  };

  return (
    <div>
      
      <Modal show={show} onHide={setShow} centered className="placeorder-wrap">
        <Modal.Header
          closeButton
          className="custom-close-header custom-close-btn d-flex flex-column align-items-start p-2">
            <h2 className="custom-header_title">Check Out</h2>
        </Modal.Header>
        <Modal.Body className="p-0">
            <div className={`dropdown mb-2 ${isOpen ? 'show' : ''}`} style={{borderBottom: '1px solid rgba(226, 226, 226, 0.7)'}}>
              <a className="btn btn-secondary dropdown-toggle custom-dropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded={isOpen ? 'true' : 'false'} onClick={handleArrowClick}>
                <h1 className="select-title">
                  Payment
                </h1>
                <div className="d-flex gap-2 align-items-center" >
                  <img src={Payment_card}/>
                  <i className={`fa fa-angle-right ${isOpen ? 'open' : ''}`} aria-hidden="true" style={{fontSize:'20px', transform: `rotate(${arrowRotation}deg)`,transition: 'transform 0.3s ease', }}></i>
                </div>
              </a>

              <ul className={`dropdown-menu custom-dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuLink" style={{ transition: 'transform 0.3s ease ' }}>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div className={`dropdown mb-2 ${isOpen ? 'show' : ''}`} style={{borderBottom: '1px solid rgba(226, 226, 226, 0.7)'}}>
              <a className="btn btn-secondary dropdown-toggle custom-dropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded={isOpen ? 'true' : 'false'} onClick={handleArrowClick}>
                <h1 className="select-title">
                  Promo Code
                </h1>
                <div className="d-flex gap-2 align-items-center" >
                  <span className="select-detail-dsc">Pick discount</span>
                  <i className={`fa fa-angle-right ${isOpen ? 'open' : ''}`} aria-hidden="true" style={{fontSize:'20px', transform: `rotate(${arrowRotation}deg)`,transition: 'transform 0.3s ease', }}></i>
                </div>
              </a>

              <ul className={`dropdown-menu custom-dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuLink" style={{ transition: 'transform 0.3s ease ' }}>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div className={`dropdown mb-2 ${isOpen ? 'show' : ''}`} style={{borderBottom: '1px solid rgba(226, 226, 226, 0.7)'}}>
              <a className="btn btn-secondary dropdown-toggle custom-dropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded={isOpen ? 'true' : 'false'} onClick={handleArrowClick}>
                <h1 className="select-title">
                  Total Cost
                </h1>
                <div className="d-flex gap-2 align-items-center" >
                  <span className="select-detail-dsc">$ 5.50</span>
                  <i className={`fa fa-angle-right ${isOpen ? 'open' : ''}`} aria-hidden="true" style={{fontSize:'20px', transform: `rotate(${arrowRotation}deg)`,transition: 'transform 0.3s ease', }}></i>
                </div>
              </a>

              <ul className={`dropdown-menu custom-dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuLink" style={{ transition: 'transform 0.3s ease ' }}>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div className="termsConditon-order">
              <p>By placing an order you agree to our <br/> <a href="#">Terms and Conditions</a></p>
            </div>

            <div style={{margin:'50px 0px'}}>
              <a href="#" className="element-custom-btn" style={{textDecoration:'none'}}>Place Order </a>
            </div>

        </Modal.Body>
      </Modal> 
    </div>
  );
};

export default PlaceOrderModal;
