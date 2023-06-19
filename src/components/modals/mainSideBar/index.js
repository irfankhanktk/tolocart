import React from "react";
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

const MainSideBar = ({ showModal, handleModalClose }) => {
  return (
    <div className="bg-info">
      <Modal
        dialogClassName="custom-modal"
        contentClassName="custom-modal-content"
        show={showModal}
        onHide={handleModalClose}
        className="sidebar-modal m-0"
      >
        <div className="modal-body">
          <div className="user-profile d-flex align-items-center gap-3 mb-5">
            <div className="user-profile-img">
              <img src={user_profile_img} alt="user-profile" />
            </div>
            <div className="user-detail">
              <h3 className="mb-1">Mateen</h3>
              <p className="m-0">mateen@gmail.com</p>
            </div>
          </div>
          <div className="side-nav">
            <ul className="p-0">
              <li className="sidebar-list d-flex align-items-center justify-content-between">
                <a href="/stores" className="sidebar-icon">
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
              <li className="sidebar-list d-flex align-items-center justify-content-between">
                <a href="#" className="sidebar-icon">
                  <img src={bell} alt="bell" /> Notifications
                </a>
                <i
                  className="fa fa-chevron-right"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                ></i>
              </li>
              <li className="sidebar-list d-flex align-items-center justify-content-between">
                <a href="#" className="sidebar-icon">
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

            <a href="#" className="logout-btn">
              <i className="fa fa-sign-out" aria-hidden="true"></i> Log Out
            </a>
          </div>
        </div>
        {/* </div>
        </div> 
     </div> */}

        {/* </Modal.Body> */}
      </Modal>
    </div>
  );
};

export default MainSideBar;
