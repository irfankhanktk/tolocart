import React, { useState } from "react";
import { useSelector } from "react-redux";
import { logo_main } from "../../assets/images";
import { getSearchProducts } from "../../services/api/api-actions";
import CheckoutModal from "../modals/checkout-modal";
import LoginModal from "../modals/login-modal";
import MainSideBar from "../modals/mainSideBar";
import SearchProductsModal from "../modals/search-products-modal";
import SignupModal from "../modals/signup-modal";
import "./topmenu.css";
import PlaceOrderModal from "../modals/placeOrder-modal";
import TrackOrderModal from "../modals/trackOrder-modal";

export function TopMenu() {
  const { cart, user } = useSelector((s) => s);
  const { userInfo } = user;
  const [showModal, setShowModal] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [showSignupModal, setSignupModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [placeOrderModal, setPlaceOrderModal] = useState(false);
  const [trackOrderModal, setTrackOrderModal] = useState(false);
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault(); // Prevents the default form submission behavior
      setShowSearchModal(true);
      setSearchLoading(true);
      const res = await getSearchProducts(searchTerm);
      setSearchResults(res?.data || []);
      // Perform any necessary actions with the search input here
      // For example, you can access the search value using event.target.elements.search.value

      // Open the search modal
    } catch (error) {
    } finally {
      setSearchLoading(false);
    }
  };

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
            // data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
            style={{ fontSize: "30px", cursor: "pointer" }}
          ></i>
          <a href="/" className="logo d-flex align-items-center">
            <img src={logo_main} alt="tolocart" />
          </a>
        </div>
        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="search"
              placeholder="Search Groceris stores"
              title="Enter search keyword"
              onChange={(e) => setSearchTerm(e?.target?.value)}
            />
            <button
              type="submit"
              title="Search"
              onClick={() => setShowSearchModal(true)}
            >
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
            {userInfo?.id ? (
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
              <>
                <li className="nav-item dropdown pe-3 showOntop">
                  <a
                    className="nav-link nav-login-btn "
                    onClick={() => setLoginModal(true)}
                  >
                    <span>Log in</span>
                  </a>
                </li>
                <li className="nav-item dropdown pe-3 showOntop">
                  <a
                    className="nav-link nav-signup-btn "
                    onClick={() => setSignupModal(true)}
                  >
                    <span>Sign up</span>
                  </a>
                </li>
              </>
            )}
            <li className="nav-item dropdown pe-3 showOntop">
              <a
                className="nav-link nav-signup-btn "
                onClick={() => setPlaceOrderModal(true)}
              >
                <span>place order</span>
              </a>
            </li>
            <li className="nav-item dropdown pe-3 showOntop">
              <a
                className="nav-link nav-signup-btn "
                onClick={() => setTrackOrderModal(true)}
              >
                <span>Track order</span>
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
                <span>{cart?.cart?.length}</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <MainSideBar showModal={showModal} handleModalClose={handleModalClose} />
      <LoginModal show={loginModal} setShow={setLoginModal} />
      <SignupModal show={showSignupModal} setShow={setSignupModal} />
      <CheckoutModal
        show={checkoutModal}
        setShow={setCheckoutModal}
        onNextClick={() => {
          setPlaceOrderModal(true);
          setCheckoutModal(false);
        }}
      />
      <SearchProductsModal
        searchResults={searchResults || []}
        show={showSearchModal}
        setShow={setShowSearchModal}
        loading={searchLoading}
      />
      <PlaceOrderModal
        show={placeOrderModal}
        setShow={setPlaceOrderModal}
        onPlaceClick={() => {
          setTrackOrderModal(true);
          setPlaceOrderModal(false);
        }}
      />
      <TrackOrderModal show={trackOrderModal} setShow={setTrackOrderModal} />
    </>
  );
}
