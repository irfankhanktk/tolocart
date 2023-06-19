import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./menuList.css"; // Import the CSS file
import BestReviewedCard from "../best-reviewed-card";
import { useNavigate } from "react-router-dom";
const MenuList = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="menuList container-fluid">
        <div className="menu-list-title mb-3 d-flex justify-content-between align-items-center">
          <h2>{item?.category?.title}</h2>
          <h3>
            Show all <i class="fa fa-angle-right" aria-hidden="true"></i>
          </h3>
        </div>
        <div className="row">
          {item?.data?.map((ele, index) => (
            <div className="col-md-3">
              <BestReviewedCard
                item={ele}
                onClick={() => navigate(`/product-detail/${ele?.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuList;
