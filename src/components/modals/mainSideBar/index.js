import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  bell,
  credit_card,
  discount_voucher,
  info,
  location,
  profile,
  question,
  shopping_beg,
  user_profile_img,
} from "../../../assets/images";
import "./mainSidebar.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../login-modal";
import SignupModal from "../signup-modal";
import { resetUser, setUserInfo } from "../../../store/reducers/user-reducer";
import NotificationModal from "../notifications-modal";

const MainSideBar = ({ showModal, handleModalClose }) => {
  const { user } = useSelector((s) => s);
  const dispatch = useDispatch();
  const { userInfo } = user;
  const [loginModal, setLoginModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [showSignupModal, setSignupModal] = useState(false);
  const notifications = [
    {
      title: "New Notification 1",
      description: "You have a new notification 1!",
      profileIcon: "path/to/profile-icon-1.png",
    },
    {
      title: "New Notification 2",
      description: "You have a new notification 2!",
      profileIcon: "path/to/profile-icon-2.png",
    },
    // Add more notifications here as needed
  ];
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
              <img src={user_profile_img} alt="user-profile" />
            </div>
            <div className="user-detail">
              <h3 className="mb-1">
                {userInfo?.userName?.slice(0, 15) || "Guest"}
              </h3>
              <p className="m-0">{userInfo?.email}</p>
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
                  <li className="sidebar-list d-flex align-items-center justify-content-between">
                    <a href="#" className="sidebar-icon">
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
              <li className="sidebar-list d-flex align-items-center justify-content-between">
                <a href="#" className="sidebar-icon">
                  {" "}
                  <img src={location} alt="location" /> Delivery Address
                </a>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li>
              <li className="sidebar-list d-flex align-items-center justify-content-between">
                <a href="#" className="sidebar-icon">
                  {" "}
                  <img src={credit_card} alt="credit-card" /> Payment Methods
                </a>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li>
              <li className="sidebar-list d-flex align-items-center justify-content-between">
                <a href="#" className="sidebar-icon">
                  <img src={discount_voucher} alt="discount-voucher" /> Promo
                  Card
                </a>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li>
              <li
                onClick={(e) => {
                  handleModalClose(false);
                  setNotificationModal(true);
                }}
                className="sidebar-list d-flex align-items-center justify-content-between"
              >
                <p className="sidebar-icon">
                  <img src={bell} alt="bell" /> Notifications
                </p>
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
      <NotificationModal
        show={notificationModal}
        onHide={() => setNotificationModal(false)}
        notifications={notifications}
      />
    </div>
  );
};

export default MainSideBar;
