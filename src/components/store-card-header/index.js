import React from "react";
import { vegetable } from "../../assets/images";
import "./style.css";
//
import { store_heart } from "../../assets/svgs";
import { returnImage } from "../../utils";
const StoreCardHeader = ({ item, imgHeight }) => {
  console.log("item::", item);
  const containerStyle = {
    backgroundImage: `url(${returnImage(item?.image)})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: imgHeight,
  };
  return (
    <div style={containerStyle} className="w-100">
      <div className="d-flex h-100 px-2 align-items-center flex-row justify-content-between">
        <p className="store-title font-size-heading">{item?.name}</p>
        <img src={store_heart} alt="pic here" />
      </div>
    </div>
  );
};
export default StoreCardHeader;
