import React from "react";
import "./style.css";
//
import { useDispatch, useSelector } from "react-redux";
import { toggleFavouriteStore } from "../../services/api/api-actions";
import { returnImage } from "../../utils";
const StoreCardHeader = ({ item, imgHeight }) => {
  const { fav_store_ids } = useSelector((x) => x?.user);
  console.log("fav_store_ids:::", fav_store_ids);
  const dispatch = useDispatch();
  const isFavourite = fav_store_ids?.some((x) => x == item?.id);
  const postFavourite = async (ele) => {
    dispatch(
      toggleFavouriteStore({
        shopId: ele?.id,
      })
    );
  };

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
        <div>
          <i
            onClick={(e) => {
              e?.stopPropagation();
              e?.preventDefault();
              postFavourite(item);
            }}
            class={`fa fa-heart${isFavourite ? "" : "-o"}`}
            aria-hidden="true"
            style={{ fontSize: "20px" }}
          ></i>
        </div>
      </div>
    </div>
  );
};
export default StoreCardHeader;
