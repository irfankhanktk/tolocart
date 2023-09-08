import React from "react";
import { ShimmerPostItem } from "react-shimmer-effects";
import { review_start } from "../../assets/svgs";
import { returnImage } from "../../utils";
import CartButton from "../buttons/cart-btn/cart-button";
import "./style.css"; // Import the CSS file
const BestReviewedCard = ({ item, onClick = () => {}, loading }) => {
  return (
    // <div className='col-md-2 col-sm-10 mt-5 px-1'>
    <div onClick={onClick} className="col-md-12 w-100 position-relative">
      {loading ? (
        <div className="csm-product-card">
          <ShimmerPostItem imageHeight={121} card title cta />
        </div>
      ) : (
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
              src={returnImage(item?.imagePath)}
              alt="image here"
              style={{ height: "121px" }}
            />
          </div>
          <p className="font-size-normal product-title">{item?.name}</p>
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
                <span>{item?.discountedPrice || item?.price}$</span>
                {/* <p className="mb-2">9</p> */}
              </div>
              <h3 className="m-0">
                {item?.discountedPrice ? <del>{item?.price}$</del> : null}
              </h3>
            </div>
            <CartButton item={item} />
          </div>
        </div>
      )}
    </div>
  );
};
export default BestReviewedCard;
