import React, { useState } from 'react';
import { Button, Modal, Nav, Tab, Form, Row, Col } from 'react-bootstrap';
import './mainSidebar.css'; // Import the CSS file
import { google } from '../../../assets/images';


const MainSideBar = ({
    showModal,
     handleModalClose
}) => {
   

    return (
        <div className='bg-info'>

            <Modal 
            dialogClassName="custom-modal"
            contentClassName="custom-modal-content"
            show={showModal} onHide={handleModalClose} className='sidebar-modal m-0' >
                {/* <Modal.Header closeButton className="custom-close-header">
                </Modal.Header> */}
                {/* <Modal.Body className='vh-100'> */}
                {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog sidebar-modal m-0">
                    <div className="modal-content vh-100"> */}
                    
                <div className="modal-body">
                    <div className="user-profile d-flex align-items-center gap-3 mb-5">
                        <div className="user-profile-img">
                            <img src="user-profile-img.png" alt="user-profile"/>
                        </div>
                        <div className="user-detail">
                            <h3 className="mb-1">Mateen</h3>
                            <p className="m-0">mateen@gmail.com</p>
                        </div>
                    </div>
                    <div className="side-nav">
                        <ul className="p-0">
                            <li className="sidebar-list d-flex align-items-center justify-content-between">
                                <a href="#" className="sidebar-icon">
                                    <img src="shopping-bag.png" alt="shopping-bag"/> Orders
                                </a>  
                                <i className="fa fa-chevron-right" style={{cursor: 'pointer'}} aria-hidden="true"></i>
                            </li>
                            <li className="sidebar-list d-flex align-items-center justify-content-between"><a href="#" className="sidebar-icon"> <img src="profile.png" alt="profile"/> My Details</a><i className="fa fa-chevron-right" style={{cursor: 'pointer'}} aria-hidden="true"></i></li>
                            <li className="sidebar-list d-flex align-items-center justify-content-between"><a href="#" className="sidebar-icon"> <img src="location.png" alt="location"/> Delivery Address</a><i className="fa fa-chevron-right" style={{cursor: 'pointer'}} aria-hidden="true"></i></li>
                            <li className="sidebar-list d-flex align-items-center justify-content-between"><a href="#" className="sidebar-icon"> <img src="credit-card.png" alt="credit-card"/> Payment Methods</a><i className="fa fa-chevron-right" style={{cursor: 'pointer'}} aria-hidden="true"></i></li>
                            <li className="sidebar-list d-flex align-items-center justify-content-between"><a href="#" className="sidebar-icon"><img src="discount-voucher.png" alt="discount-voucher"/> Promo Card</a><i className="fa fa-chevron-right" style={{cursor: 'pointer'}} aria-hidden="true"></i></li>
                            <li className="sidebar-list d-flex align-items-center justify-content-between"><a href="#" className="sidebar-icon"><img src="bell.png" alt="bell"/> Notifications</a><i className="fa fa-chevron-right" style={{cursor: 'pointer'}} aria-hidden="true"></i></li>
                            <li className="sidebar-list d-flex align-items-center justify-content-between"><a href="#" className="sidebar-icon"><img src="question.png" alt="question"/> Help</a><i className="fa fa-chevron-right" style={{cursor: 'pointer'}} aria-hidden="true"></i></li>
                            <li className="sidebar-list d-flex align-items-center justify-content-between"><a href="#" className="sidebar-icon"> <img src="info.png" alt="info"/> About</a><i className="fa fa-chevron-right" style={{cursor: 'pointer'}} aria-hidden="true"></i></li>
                        </ul>

                        <a href="#" className="logout-btn"><i className="fa fa-sign-out" aria-hidden="true"></i> Log Out</a>
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
