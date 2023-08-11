import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logo_main } from "../../assets/images";
import {
  getCurrentLocation,
  getSearchProducts,
} from "../../services/api/api-actions";
import CheckoutModal from "../modals/checkout-modal";
import LoginModal from "../modals/login-modal";
import MainSideBar from "../modals/mainSideBar";
import SearchProductsModal from "../modals/search-products-modal";
import SignupModal from "../modals/signup-modal";
import "./topmenu.css";
import PlaceOrderModal from "../modals/placeOrder-modal";
import TrackOrderModal from "../modals/trackOrder-modal";
import { setIsReqLogin, setLocation } from "../../store/reducers/user-reducer";
import MapModal from "../modals/map-modal";
import { UTILS } from "../../utils";
import { Link } from "react-router-dom";

export function TopMenu() {
  const { cart, user } = useSelector((s) => s);
  const dispatch = useDispatch();
  const { userInfo, location } = user;
  const [showMapModal, setShowMapModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [orderDetails, setOrderDetails] = React.useState({});
  const [showModal, setShowModal] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);
  const [showSignupModal, setSignupModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [placeOrderModal, setPlaceOrderModal] = useState(false);
  const [trackOrderModal, setTrackOrderModal] = useState(false);
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  // React.useEffect(() => {
  //   // dispatch(setIsReqLogin(user?.isRequiredLogin));
  //   setLoginModal(user?.isRequiredLogin);
  // }, [user?.isRequiredLogin]);
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
  React.useEffect(() => {
    window.scrollTo(0, 0); //
  }, []);
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-header"
      >
        <div className="d-flex align-items-center justify-content-between">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={handleModalOpen}
            // data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
            style={{ fontSize: "30px", cursor: "pointer" }}
          ></i>
          <Link to="/" className="logo d-flex align-items-center">
            <img src={logo_main} alt="tolocart" />
          </Link>
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
              <Link className="nav-link nav-icon search-bar-toggle " to="#">
                <i className="bi bi-search"></i>
              </Link>
            </li>
            {userInfo?.id ? (
              <>
                {/* <li className="nav-item dropdown d-flex flex-column">
                  <Link className="takeaway active" to="#">
                    Pickup
                  </Link>
                  <Link className="takeaway" to="#">
                    Delivery
                  </Link>
                </li> */}
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMapModal(true);
                  }}
                  className="nav-item dropdown"
                >
                  <button className="btn btn-link nav-link nav-icon nav-address">
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span> {user?.location?.address?.slice(0, 20)}</span>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown pe-3 showOntop">
                  <Link
                    className="nav-link nav-login-btn "
                    onClick={() => dispatch(setIsReqLogin(true))}
                  >
                    <span>Log in</span>
                  </Link>
                </li>
                <li className="nav-item dropdown pe-3 showOntop">
                  <Link
                    className="nav-link nav-signup-btn "
                    onClick={() => setSignupModal(true)}
                  >
                    <span>Sign up</span>
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item dropdown pe-3">
              <Link
                onClick={() => setCheckoutModal(true)}
                className=" nav-cart-btn d-flex gap-2"
                to="#"
              >
                <span>
                  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </span>
                <span>{cart?.cart?.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <MainSideBar showModal={showModal} handleModalClose={handleModalClose} />
      <LoginModal
        show={user?.isRequiredLogin}
        setShow={(bool) => dispatch(setIsReqLogin(bool))}
      />
      <SignupModal
        show={showSignupModal}
        setShow={setSignupModal}
        onSuccessRegister={() => {
          setSignupModal(false);
          // setLoginModal(true);
          dispatch(setIsReqLogin(true));
        }}
      />
      <SearchProductsModal
        searchResults={searchResults || []}
        show={showSearchModal}
        setShow={setShowSearchModal}
        loading={searchLoading}
      />
      <CheckoutModal
        show={checkoutModal}
        setShow={setCheckoutModal}
        onNextClick={(res) => {
          setCheckoutModal(false);
          // setTrackOrderModal(true);
          setCurrentOrderId(res?.data);
          setPlaceOrderModal(true);
        }}
      />
      <PlaceOrderModal
        orderId={currentOrderId}
        show={placeOrderModal}
        setShow={setPlaceOrderModal}
        onPlaceClick={() => {
          setTrackOrderModal(true);
          setPlaceOrderModal(false);
        }}
        orderDetails={orderDetails}
        setOrderDetails={setOrderDetails}
      />
      <TrackOrderModal
        orderDetails={orderDetails}
        orderId={currentOrderId}
        show={trackOrderModal}
        setShow={setTrackOrderModal}
      />
      <MapModal
        show={showMapModal}
        latlng={
          location?.latitude
            ? [location?.latitude, location?.longitude]
            : [30.14512718337613, 115.1367187500002]
        }
        onHide={setShowMapModal}
        onConfirmLocation={async (data) => {
          const lat = data[0],
            lng = data[1];
          const res = await UTILS?._returnAddress(lat, lng);
          dispatch(
            setLocation({
              latitude: lat,
              longitude: lng,
              address: res?.fulladdress,
            })
          );
        }}
      />
    </>
  );
}
