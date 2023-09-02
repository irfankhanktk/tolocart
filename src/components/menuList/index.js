import React from "react";
import { useNavigate } from "react-router-dom";
import { ShimmerTitle } from "react-shimmer-effects";
import BestReviewedCard from "../best-reviewed-card";
import "./menuList.css"; // Import the CSS file
const MenuList = ({ item, loading }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="menuList container-fluid">
        <div className="menu-list-title mb-3 d-flex justify-content-between align-items-center">
          {loading ? (
            <div className="mt-3" style={{ width: "25%" }}>
              <ShimmerTitle line={1} />
            </div>
          ) : (
            <>
              <h2>{item?.category?.title}</h2>
              <h3>
                Show all <i class="fa fa-angle-right" aria-hidden="true"></i>
              </h3>
            </>
          )}
        </div>
        <div className="row mb-3">
          {loading
            ? new Array(4).fill({})?.map((ele, index) => (
                <div className="col-md-3">
                  <BestReviewedCard
                    key={index}
                    loading
                    item={ele}
                    onClick={() => {}}
                  />
                </div>
              ))
            : item?.data?.map((ele, index) => (
                <div className="col-md-3">
                  <BestReviewedCard
                    key={index}
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
