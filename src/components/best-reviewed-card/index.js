import React from "react";
import { laptop_home, review_img, review_plus } from "../../assets/images";
import { review_start } from "../../assets/svgs";
import "./style.css"; // Import the CSS file
import { UTILS, returnImage } from "../../utils";
import { useDispatch } from "react-redux";
import {
  setAddToCart,
  setIncrementQtyCart,
} from "../../store/reducers/cart-slice";
const BestReviewedCard = ({ item, onClick = () => {} }) => {
  const dispatch = useDispatch();
  const onPlusClick = () => {
    try {
      dispatch(setAddToCart(item));
      alert("Item is added successfully in your cart");
    } catch (error) {
      alert(UTILS.returnError(error));
    }
  };
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
              <p className="mb-2">9</p>
            </div>
            <h3 className="m-0">
              {item?.discountedPrice ? <del>{item?.price}$</del> : null}
            </h3>
          </div>
          <a href="#" onClick={onPlusClick} className="add-to-cart-img">
            <img className="img-fluid" src={review_plus} alt="image here" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default BestReviewedCard;
