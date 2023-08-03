import React from "react";
import { store_star } from "../../assets/svgs";
const RatingStars = () => {
  return (
    <div className="d-flex gap-1">
      {[1, 2, 3, 4, 5]?.map((item, index) => (
        <img key={index} className="image-fluid" src={store_star} />
      ))}
      <span className="rating">(0)</span>
    </div>
  );
};
export default RatingStars;
