import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StoreCardHeader from "../store-card-header";
import StoreRating from "../store-rating";
import "./style.css";
import { ShimmerPostItem } from "react-shimmer-effects";
const StoreCard = ({ item, loading }) => {
  const navigate = useNavigate();
  return (
    <div className="col-md-4 mb-3  px-3">
      {loading ? (
        <div className="main-container">
          <ShimmerPostItem imageHeight={75} title />
        </div>
      ) : (
        <div
          onClick={() => navigate(`/store-dashboard/${item?.id}`)}
          className="main-container"
        >
          <StoreCardHeader item={item} imgHeight={"75px"} />
          <StoreRating title={item?.name} description={item?.location} />
        </div>
      )}
    </div>
  );
};
export default StoreCard;
