import React from "react";
import StoreCardHeader from "../store-card-header";
import StoreRating from "../store-rating";
import "./style.css";
import RatingStars from "../rating-stars";
import { popular_img, review_plus } from "../../assets/images";
const PopularItemCard = ({ item, onClick = () => {} }) => {
  return (
    // <div className='col-md-4 mt-3  px-3'>
    //     <div className='main-container'>
    //         <StoreCardHeader bg={item?.bg} title={item?.title} style={{ height: '75px' }} imgHeight={'66px'} />
    //         <StoreRating />
    //     </div>
    // </div>

    <div className="col-md-12 mt-3 px-3">
      <div onClick={onClick} className="popularItemCard">
        <div className="row">
          <div className="col-md-4 text-center position-relative">
            <img src={popular_img} style={{ margin: "0 auto" }} />
            <div className="arrow-label-off">
              <span>9% off</span>
            </div>
          </div>
          <div className="col-md-5">
            <h2 className="popularItem-title">Coca Cola</h2>
            <RatingStars />
            <div className="popularItem-price d-flex align-items-center gap-3">
              <h2>$0.49</h2>
              <h4>
                <del>$0.49</del>
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
