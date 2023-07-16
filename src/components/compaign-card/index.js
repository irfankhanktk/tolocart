import React from "react";
import { laptop_home } from "../../assets/images";
import "./style.css"; // Import the CSS file
import { returnImage } from "../../utils";
import { ShimmerCard, ShimmerThumbnail } from "react-shimmer-effects";
const CompaignCard = ({ item, loading }) => {
  const containerStyle = {
    backgroundImage: `url(${returnImage(item?.coverImage)})`,
    alt: "hel",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "200px",
  };
  return (
    <div className="col-md-12 col-sm-12 px-1">
      {loading ? (
        <ShimmerThumbnail height={200} rounded />
      ) : (
        <div style={containerStyle} className="rounded border">
          {/* <div className="row card-bg m-0">
        <div className="col-md-6">
          <h3 className="discount-offer">{title}</h3>
          <p className="product-title-name">{description}</p>
        </div>
        <div className="col-md-6">
          <img className="w-100" src={image} alt="image here" />
        </div>
      </div> */}
        </div>
      )}
    </div>
  );
};
export default CompaignCard;
