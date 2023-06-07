import React, { useState } from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { PrimaryButton } from "../buttons";
import "./topmenu.css";
import { logo_main } from "../../assets/images";
import MainSideBar from "../modals/mainSideBar";
import LoginModal from "../modals/login-modal";
import SignupModal from "../modals/signup-modal";
import CheckoutModal from "../modals/checkout-modal";

export function TopMenu() {
  const [showModal, setShowModal] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [showSignupModal, setSignupModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={handleModalOpen}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ fontSize: "30px", cursor: "pointer" }}
          ></i>
          <a href="/" className="logo d-flex align-items-center">
            <img src={logo_main} alt="tolocart" />
          </a>
        </div>
        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="get"
            action=""
          >
            <input
              type="text"
              name="input"
              placeholder="Search Groceris stores"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>
            {false ? (
              <>
                <li className="nav-item dropdown d-flex flex-column">
                  <a className="takeaway active" href="#">
                    Pickup
                  </a>
                  <a className="takeaway" href="#">
                    Delivery
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link nav-icon nav-address" href="#">
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span>Ygnacio, CA</span>
                  </a>
                </li>
              </>
            ) : (
              <li className="nav-item dropdown pe-3">
                <a
                  className="nav-link nav-login-btn "
                  onClick={() => setSignupModal(true)}
                >
                  <span>Sign up</span>
                </a>
              </li>
            )}
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-login-btn "
                onClick={() => setLoginModal(true)}
              >
                <span>Log in</span>
              </a>
            </li>
            <li className="nav-item dropdown pe-3">
              <a
                onClick={() => setCheckoutModal(true)}
                className=" nav-cart-btn d-flex gap-2"
                href="#"
              >
                <span>
                  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </span>
                <span>0</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <MainSideBar showModal={showModal} handleModalClose={handleModalClose} />
      <LoginModal show={loginModal} setShow={setLoginModal} />
      <SignupModal show={showSignupModal} setShow={setSignupModal} />
      <CheckoutModal show={checkoutModal} setShow={setCheckoutModal} />
    </>
  );
}
