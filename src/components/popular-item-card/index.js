import React from "react";
import { popular_img, review_plus } from "../../assets/images";
import RatingStars from "../rating-stars";
import "./style.css";
import { returnImage } from "../../utils";
const PopularItemCard = ({ item, onClick = () => {} }) => {
  return (
    <div className="col-md-12 mt-3 px-3">
      <div onClick={onClick} className="popularItemCard">
        <div className="row">
          <div className="col-md-4 text-center position-relative">
            <img
              src={returnImage(item?.imagePath)}
              style={{ margin: "0 auto", height: "97px", width: "66px" }}
            />
            <div className="arrow-label-off">
              <span>9% off</span>
            </div>
          </div>
          <div className="col-md-5">
            <h2 className="popularItem-title">{item?.name}</h2>
            <RatingStars />
            <div className="popularItem-price d-flex align-items-center gap-3">
              <h2>${item?.discountedPrice || item?.price}</h2>
              <h4>
                {item?.discountedPrice ? <del>${item?.price}</del> : null}
              </h4>
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-end align-items-end">
            <a href="#">
              <img src={review_plus} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularItemCard;
