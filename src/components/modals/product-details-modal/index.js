import React, { useState } from "react";
import { Button, Modal, Nav, Tab, Form, Row, Col, accordion } from "react-bootstrap";
import { cross_icon, gray_heart, share } from "../../../assets/svgs";
import { apple } from "../../../assets/images";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./style.css";
import CompaignCard from "../../compaign-card";
import BestReviewedCard from "../../best-reviewed-card";
import ProductCounter from "../../counter";

const ProductDetailsModal = () => {
  // const [showModal, setShowModal] = useState(false);

  // const handleModalOpen = () => {
  //   setShowModal(true);
  // };

  // const handleModalClose = () => {
  //   setShowModal(false);
  // };

  return (
    // <div>
    //   <Button variant="primary" onClick={handleModalOpen}>
    //     Product Details
    //   </Button>

    //   <Modal
    //     show={showModal}
    //     className="custom-modal"
    //     onHide={handleModalClose}
    //   >
       
    //     <Modal.Body>
    //       <img
    //         src={cross_icon}
    //         alt="cross"
    //         className="position-absolute"
    //         style={{ height: "45px", width: "45px" }}
    //       />
    //       <div className="px-3 d-flex flex-row">
    //         <div className="col-md-4 px-md-3">
    //           <img
    //             src={apple}
    //             alt="apple"
    //             className="product-img"
    //             style={{ height: "300px", width: "400px" }}
    //           />
    //         </div>
    //         <div className="col-md-4 px-md-5 d-flex justify-content-between flex-row">
    //           <p className="product-details-title">Red Apple</p>
    //           <div className="d-flex flex-row gap-3">
    //             <img src={share} style={{ height: "25px", width: "25px" }} />
    //             <img
    //               src={gray_heart}
    //               style={{ height: "25px", width: "25px" }}
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-4 px-md-3"></div>
    //       </div>
    //     </Modal.Body>
    //   </Modal>
    // </div>
    <>
      <div className="container">
        <div className="row" style={{marginTop:'50px'}}> 
          <div className="col-md-4 d-flex align-items-center justify-content-end">
          <img src={apple} style={{ width: '100%' }} />
          </div>
          <div className="col-md-4">
            <div className="singleproduct-wrap"> 
              <div className="singleproduct-title d-flex align-items-center justify-content-between mb-2"> 
                <h2>Red Apple</h2>
                <div className="icon-list d-flex align-items-center gap-3">
                  <i class="fa fa-share-alt" aria-hidden="true" style={{fontSize:'20px'}}></i>
                  <i class="fa fa-heart-o" aria-hidden="true" style={{fontSize:'20px'}}></i>
                </div>
              </div>

              <p className="lb-price">$3.49/lb</p>
              <h6 className="stock-product">In stock</h6>
                <div className="add-product-counter d-flex align-items-center justify-content-between">
                  <ProductCounter/>
                  <div className="product-price h-auto ">
                    <span>$2</span>
                    <p className="mb-2">49</p>
                  </div>
                </div>
              <div className="satisfaction-gurantee d-flex align-items-center gap-2 mb-2 mt-2">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <a href="#" style={{color: '#5468FF'}}> 100% satisfaction guarantee </a>
                <i class="fa fa-question-circle" aria-hidden="true" style={{color:'#ccc'}}></i>
              </div>
              
             
              {/* accordian strt */}
              <div class="accordion" id="accordionExample">
                <div class="accordion-item custom-accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Product Detail
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.
                    </div>
                  </div>
                </div>
                <div class="accordion-item custom-accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Ingredients
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                    </div>
                  </div>
                </div>
                <div class="accordion-item custom-accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Nutritions
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="dropdown mb-2">
              <a class="btn btn-secondary dropdown-toggle custom-dropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <div>
                  <i class="fa fa-refresh" aria-hidden="true" style={{marginRight:'10px'}}></i>
                  Set order as a shecdule
                </div>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </a>

              <ul class="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown mb-2">
              <a class="btn btn-secondary dropdown-toggle custom-dropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <div>
                  <i class="fa fa-list" aria-hidden="true" style={{marginRight:'10px'}}></i> Add to List
                </div>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </a>
              <ul class="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown mb-2">
              <a class="btn btn-secondary dropdown-toggle custom-dropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Reviews
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </a>

              <ul class="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <a href="#" className="login-btn">
              Add To Basket
            </a>
          </div>
        </div>

        <div className="row" style={{marginTop:'50px'}}>
          <div className="col-md-12">
            <div className="item-title d-flex justify-content-between align-items-center mb-4">
              <h2>Related Items</h2>
              <a href="#">See all</a>
            </div>
          </div>
          <div className="col-md-2">
            <BestReviewedCard/>
          </div>
          <div className="col-md-2">
            <BestReviewedCard/>
          </div>
          <div className="col-md-2">
            <BestReviewedCard/>
          </div>
          <div className="col-md-2">
            <BestReviewedCard/>
          </div>
          <div className="col-md-2">
            <BestReviewedCard/>
          </div>
          <div className="col-md-2">
            <BestReviewedCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsModal;
