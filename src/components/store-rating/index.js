import React from "react";
import {
  laptop_home,
  review_img,
  review_plus,
  vegetable,
} from "../../assets/images";
import "./style.css";
import { store_heart, store_star, tick } from "../../assets/svgs";
import { Row } from "react-bootstrap";
import RatingStars from "../rating-stars/index";
const StoreRating = ({
  image = laptop_home,
  title = "GNN Mart",
  style,
  bg = "#fff",
  description = `Fresh
    FOOD every one
    Need`,
}) => {
  return (
    <div
      className="d-flex p-2 align-items-center"
      style={{ ...style, background: `${bg}` }}
    >
      <div className="col-6">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <div className="d-flex gap-1">
          <RatingStars />
        </div>
      </div>
      <div className="col-6">
        <div className="d-flex gap-2 justify-content-end">
          <img className="image-fluid" src={tick} />
          <span className="status">Delivery available</span>
        </div>
        <div className="d-flex gap-2 justify-content-end">
          <img className="image-fluid" src={tick} />
          <span className="status">Delivery available</span>
        </div>
      </div>
    </div>
  );
};
export default StoreRating;
