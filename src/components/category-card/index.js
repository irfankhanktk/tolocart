import React from "react";
import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";
import { returnImage } from "../../utils";
const CateryCard = ({
  item,
  style,
  bg = "#53B175B2",
  border = "#F8A44C1A",
  onClick = () => {},
  loading = false,
}) => {
  if (loading)
    return (
      <div className="col-lg-6 col-md-6 mt-5 px-md-2" style={{ ...style }}>
        <ShimmerThumbnail height={137} rounded />
        <ShimmerTitle line={1} />
      </div>
    );
  return (
    <div className="col-lg-2 col-md-6 col-sm-6 mt-5 px-md-2">
      <div
        onClick={onClick}
        className="rounded justify-content-center"
        style={{
          background: `${bg}`,
          border: "1px",
          height: "137px",
          borderColor: `${border}`,
        }}
      >
        <img
          // className="w-100"
          src={returnImage(item?.image)}
          style={{ height: "137px", width: "100%" }}
          alt="image here"
        />
      </div>
      <p className="text-center category-title">{item?.title}</p>
    </div>
  );
};
export default CateryCard;
