import React from "react";
import { home_bg, vegetable } from "../../assets/images";
import { useNavigate } from "react-router-dom";
const HomeServices = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row m-0">
        <div
          onClick={() => navigate("/market-place")}
          className="col-md-5 col-sm-12 mb-4"
        >
          <div className="market-place">
            <p className="market-place-text">Marketplace</p>
            <img src={vegetable} alt="img here" className="vegetable-img" />
          </div>
          
        </div>
        <div className="col-md-7 col-sm-12 mb-4 d-flex">
          <div className="services w-100">
            <p className="service-text">Parcel Delivery</p>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div
          className="col-md-5 mb-4">
          <div className="services d-flex" style={{ height: "100%" }}>
            <p className="service-text">Pharmacy</p>
          </div>
          
        </div>
        <div
          className="col-md-7 mb-4">
          {/* <div style={{ display: 'flex', flexDirection: 'column', height: '300px' }}> */}
          <div className="d-flex flex-column justify-content-between" style={{gap: '1.5rem'}}>
            <div className="services d-flex" style={{ height: "170px" }}>
              <p className="service-text">Restaurant</p>
            </div>
            <div className="services d-flex" style={{ height: "170px" }}>
              <p className="service-text">Doctor Consultant </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default HomeServices;
