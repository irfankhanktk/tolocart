import React from "react";
import { useNavigate } from "react-router-dom";
import StoreCardHeader from "../store-card-header";
import StoreRating from "../store-rating";
import "./style.css";
const StoreCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="col-md-4 mt-3  px-3">
      <div
        onClick={() => navigate(`/store-dashboard/${item?.id}`)}
        className="main-container"
      >
        <StoreCardHeader item={item} imgHeight={"75px"} />
        <StoreRating title={item?.name} description={item?.location} />
      </div>
    </div>
  );
};
export default StoreCard;
