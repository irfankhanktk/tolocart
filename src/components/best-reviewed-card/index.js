import React from "react";
import { laptop_home, review_img, review_plus } from "../../assets/images";
import { review_start } from "../../assets/svgs";
import "./style.css"; // Import the CSS file
const BestReviewedCard = ({
  image = laptop_home,
  title = "Groceries",
  style,
  bg = "#53B175B2",
  description = `Fresh
    FOOD every one
    Need`,
  onClick = () => {},
}) => {
  return (
    // <div className='col-md-2 col-sm-10 mt-5 px-1'>
    <div onClick={onClick} className="col-md-12 position-relative">
      <div className="csm-product-card ">
        <div className="d-flex align-items-center gap-2 rating-title">
          <img src={review_start} alt="image here" />
          <span className="rating-number"> 0.0</span>
        </div>
        <div className="arrow-label">
          <span>9% off</span>
          {/* <span className="arrow"></span> */}
        </div>
        <div className="text-center">
          <img
            className="img-fluid mx-auto"
            src={review_img}
            alt="image here"
          />
        </div>
        <p className="font-size-normal product-title">{title}</p>
        <p className="font-size-small color-white-50 product-weight">
          {3.5} oz
        </p>
        <p
          className="font-size-small stock-product"
          style={{ color: "#1F9F0C" }}
        >
          In stock
        </p>
        <div className="position-relative  d-flex justify-content-between align-items-center">
          <div className="discount-price d-flex gap-3 align-items-end">
            <div className="product-price h-auto ">
              <span>23$</span>
              <p className="mb-2">34</p>
            </div>
            <h3 className="m-0">
              <del>$12.67</del>
            </h3>
          </div>
          <a href="#" className="add-to-cart-img">
            <img className="img-fluid" src={review_plus} alt="image here" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default BestReviewedCard;
