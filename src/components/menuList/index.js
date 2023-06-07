import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./menuList.css"; // Import the CSS file
import BestReviewedCard from "../best-reviewed-card";
import { useNavigate } from "react-router-dom";
const MenuList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="menuList container-fluid">
        <div className="menu-list-title mb-3 d-flex justify-content-between align-items-center">
          <h2>Fresh Fruit</h2>
          <h3>
            Show all <i class="fa fa-angle-right" aria-hidden="true"></i>
          </h3>
        </div>
        <div className="row">
          <div className="col-md-3">
            <BestReviewedCard onClick={() => navigate("/product-detail")} />
          </div>
          <div className="col-md-3">
            <BestReviewedCard />
          </div>
          <div className="col-md-3">
            <BestReviewedCard />
          </div>
          <div className="col-md-3">
            <BestReviewedCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuList;
