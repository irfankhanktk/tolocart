import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  bell,
  info,
  location,
  profile,
  question,
  shopping_beg,
  user_profile_img,
} from "../../../assets/images";
import MapModal from "../map-modal";

import {
  resetUser,
  setLocation,
  setUserInfo,
} from "../../../store/reducers/user-reducer";
import LoginModal from "../login-modal";
import NotificationModal from "../notifications-modal";
import SignupModal from "../signup-modal";
import "./mainSidebar.css"; // Import the CSS file
import ProfileModal from "../profile-modal";
import { UTILS } from "../../../utils";
import { resetCart } from "../../../store/reducers/cart-slice";
import { Link } from "react-router-dom";

const MainSideBar = ({ showModal, handleModalClose }) => {
  const { user } = useSelector((s) => s);
  const dispatch = useDispatch();
  const { userInfo } = user;
  const [loginModal, setLoginModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [showSignupModal, setSignupModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  return (
    <div className="bg-info">
      <Modal
        dialogClassName="custom-modal"
        contentClassName="custom-modal-content"
        show={showModal}
        onHide={handleModalClose}
        className="sidebar-modal m-0"
      >
        <div className="modal-body bg-white">
          <div className="user-profile d-flex align-items-center gap-3 mb-5">
            <div className="user-profile-img">
              <img
                className="rounded-circle"
                style={{ height: "50px", width: "50px" }}
                src={userInfo?.image || user_profile_img}
                alt="user-profile"
              />
            </div>
            <div className="user-detail">
              <h3 className="mb-1">
                {userInfo?.fullName ||
                  userInfo?.userName?.slice(0, 15) ||
                  "Guest"}
              </h3>
              <p className="text-ellipsis">{userInfo?.email}</p>
            </div>
          </div>
          {/* login button start*/}
          <div className="content-button d-flex justify-content-center align-items-center mb-3 d-lg-none d-md-none d-sm-flex">
            <li className="nav-item dropdown pe-3">
              <div
                className="nav-link nav-login-btn "
                onClick={() => setLoginModal(true)}
              >
                <span>Log in</span>
              </div>
            </li>
            <li className="nav-item dropdown pe-3">
              <Link
                className="nav-link nav-signup-btn "
                onClick={() => setSignupModal(true)}
              >
                <span>Sign up</span>
              </Link>
            </li>
          </div>
          {/* login button end*/}
          <div className="side-nav">
            <ul className="p-0">
              {userInfo && (
                <>
                  <li className="sidebar-list d-flex align-items-center justify-content-between">
                    <Link
                      onClick={(e) => {
                        handleModalClose(false);
                      }}
                      to="/order-history"
                      className="sidebar-icon"
                    >
                      <img src={shopping_beg} alt="shopping-bag" /> Orders
                    </Link>
                    <i
                      className="fa fa-chevron-right"
                      style={{ cursor: "pointer" }}
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li
                    onClick={(e) => {
                      setShowProfileModal(true);
                    }}
                    className="sidebar-list d-flex align-items-center justify-content-between"
                  >
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        handleModalClose(false);
                        setShowProfileModal(true);
                      }}
                      to="#"
                      className="sidebar-icon"
                    >
                      {" "}
                      <img src={profile} alt="profile" /> My Details
                    </Link>
                    <i
                      className="fa fa-chevron-right"
                      style={{ cursor: "pointer" }}
                      aria-hidden="true"
                    ></i>
                  </li>
                </>
              )}
              {userInfo?.id ? (
                <li
                  onClick={() => {
                    handleModalClose(false);
                    setShowMapModal(true);
                  }}
                  className="sidebar-list d-flex align-items-center justify-content-between"
                >
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="sidebar-icon"
                  >
                    {" "}
                    <img src={location} alt="location" /> Delivery Address
                  </Link>
                  <i
                    className="fa fa-chevron-right"
                    style={{ cursor: "pointer" }}
                    aria-hidden="true"
                  ></i>
                </li>
              ) : null}
              {/* <li className="sidebar-list d-flex align-items-center justify-content-between">
                <Link to="#" className="sidebar-icon">
                  {" "}
                  <img src={credit_card} alt="credit-card" /> Payment Methods
                </Link>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li> */}
              {/* <li className="sidebar-list d-flex align-items-center justify-content-between">
                <Link to="#" className="sidebar-icon">
                  <img src={discount_voucher} alt="discount-voucher" /> Promo
                  Card
                </Link>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li> */}
              {userInfo?.id ? (
                <li
                  onClick={(e) => {
                    handleModalClose(false);
                    setNotificationModal(true);
                  }}
                  className="sidebar-list d-flex align-items-center justify-content-between"
                >
                  <Link
                    onClick={(e) => e.preventDefault()}
                    className="sidebar-icon"
                  >
                    <img src={bell} alt="bell" /> Notifications
                  </Link>
                  <i
                    className="fa fa-chevron-right"
                    style={{ cursor: "pointer" }}
                    aria-hidden="true"
                  ></i>
                </li>
              ) : null}
              <li className="sidebar-list d-flex align-items-center justify-content-between">
                <Link
                  onClick={(e) => {
                    handleModalClose(false);
                  }}
                  to="/help"
                  className="sidebar-icon"
                >
                  <img src={question} alt="question" /> Help
                </Link>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li>
              <li className="sidebar-list d-flex align-items-center justify-content-between">
                <Link
                  to="/about"
                  onClick={(e) => {
                    handleModalClose(false);
                  }}
                  className="sidebar-icon"
                >
                  {" "}
                  <img src={info} alt="info" /> About
                </Link>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li>
            </ul>

            {userInfo && (
              <Link
                onClick={(e) => {
                  dispatch(resetUser());
                  dispatch(resetCart());
                  handleModalClose(false);
                }}
                to="/"
                className="logout-btn"
              >
                <i className="fa fa-sign-out" aria-hidden="true"></i> Log Out
              </Link>
            )}
          </div>
        </div>
        {/* </div>
        </div> 
     </div> */}

        {/* </Modal.Body> */}
      </Modal>
      <LoginModal show={loginModal} setShow={setLoginModal} />
      <SignupModal
        show={showSignupModal}
        setShow={setSignupModal}
        onSuccessRegister={() => {
          setSignupModal(false);
          setLoginModal(true);
        }}
      />
      <ProfileModal
        show={showProfileModal}
        setShow={setShowProfileModal}
        onSuccessRegister={() => {
          setShowProfileModal(false);
        }}
      />
      <NotificationModal
        show={notificationModal}
        onHide={() => setNotificationModal(false)}
      />
      <MapModal
        show={showMapModal}
        latlng={[user?.location?.latitude, user?.location?.longitude]}
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
    </div>
  );
};

export default MainSideBar;
