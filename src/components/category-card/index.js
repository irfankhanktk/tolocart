import React from "react";
import { laptop_home } from "../../assets/images";
import { returnImage } from "../../utils";

const CateryCard = ({
  item,
  image = laptop_home,
  title = "Groceries",
  style,
  bg = "#53B175B2",
  border = "#F8A44C1A",
  onClick = () => {},
}) => {
  return (
    <div className="col-md-2 mt-5 px-md-2" style={{ ...style }}>
      <div
        onClick={onClick}
        className="rounded justify-content-center"
        style={{
          background: `${bg}`,
          border: "1px",
          borderColor: `${border}`,
        }}
      >
        <img
          className="w-100"
          src={returnImage(item?.image)}
          style={{ height: "137px" }}
          alt="image here"
        />
      </div>
      <p className="text-center category-title">{item?.title}</p>
    </div>
  );
};
export default CateryCard;
