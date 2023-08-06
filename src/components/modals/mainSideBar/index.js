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

import { setLocation, setUserInfo } from "../../../store/reducers/user-reducer";
import LoginModal from "../login-modal";
import NotificationModal from "../notifications-modal";
import SignupModal from "../signup-modal";
import "./mainSidebar.css"; // Import the CSS file
import ProfileModal from "../profile-modal";
import { UTILS } from "../../../utils";

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
              <a
                className="nav-link nav-signup-btn "
                onClick={() => setSignupModal(true)}
              >
                <span>Sign up</span>
              </a>
            </li>
          </div>
          {/* login button end*/}
          <div className="side-nav">
            <ul className="p-0">
              {userInfo && (
                <>
                  <li className="sidebar-list d-flex align-items-center justify-content-between">
                    <a href="/order-history" className="sidebar-icon">
                      <img src={shopping_beg} alt="shopping-bag" /> Orders
                    </a>
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
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        setShowProfileModal(true);
                      }}
                      href="#"
                      className="sidebar-icon"
                    >
                      {" "}
                      <img src={profile} alt="profile" /> My Details
                    </a>
                    <i
                      className="fa fa-chevron-right"
                      style={{ cursor: "pointer" }}
                      aria-hidden="true"
                    ></i>
                  </li>
                </>
              )}
              <li
                onClick={() => setShowMapModal(true)}
                className="sidebar-list d-flex align-items-center justify-content-between"
              >
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="sidebar-icon"
                >
                  {" "}
                  <img src={location} alt="location" /> Delivery Address
                </a>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li>
              {/* <li className="sidebar-list d-flex align-items-center justify-content-between">
                <a href="#" className="sidebar-icon">
                  {" "}
                  <img src={credit_card} alt="credit-card" /> Payment Methods
                </a>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li> */}
              {/* <li className="sidebar-list d-flex align-items-center justify-content-between">
                <a href="#" className="sidebar-icon">
                  <img src={discount_voucher} alt="discount-voucher" /> Promo
                  Card
                </a>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li> */}
              <li
                onClick={(e) => {
                  handleModalClose(false);
                  setNotificationModal(true);
                }}
                className="sidebar-list d-flex align-items-center justify-content-between"
              >
                <a onClick={(e) => e.preventDefault()} className="sidebar-icon">
                  <img src={bell} alt="bell" /> Notifications
                </a>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li>
              <li className="sidebar-list d-flex align-items-center justify-content-between">
                <a href="/help" className="sidebar-icon">
                  <img src={question} alt="question" /> Help
                </a>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li>
              <li className="sidebar-list d-flex align-items-center justify-content-between">
                <a href="/about" className="sidebar-icon">
                  {" "}
                  <img src={info} alt="info" /> About
                </a>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li>
            </ul>

            {userInfo && (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setUserInfo());
                }}
                href="#"
                className="logout-btn"
              >
                <i className="fa fa-sign-out" aria-hidden="true"></i> Log Out
              </a>
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
