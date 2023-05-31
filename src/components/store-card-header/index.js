import React from "react";
import {
  laptop_home,
  review_img,
  review_plus,
  vegetable,
} from "../../assets/images";
import "./style.css";
import { store_heart } from "../../assets/svgs";
const StoreCardHeader = ({
  image = laptop_home,
  title = "GNN Mart",
  style,
  bg = "#7246EF",
  imgHeight = "233px",
  description = `Fresh
    FOOD every one
    Need`,
}) => {
  return (
    <div
      className="w-100 d-flex justify-content-between align-items-center p-2"
      style={{ ...style, background: `${bg}` }}
    >
      <p className="store-title font-size-heavy">{title}</p>
      <div className="d-flex align-items-start">
        <img src={vegetable} alt="pic here" height={imgHeight} />
        <img src={store_heart} alt="pic here" />
      </div>
    </div>
  );
};
export default StoreCardHeader;
