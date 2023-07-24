import React from "react";
import { ShimmerCategoryItem } from "react-shimmer-effects";
import "./style.css";
const OrderHistoryCard = ({ order, onClick = () => {}, loading }) => {
  return (
    <div onClick={onClick} className="col-md-4 px-md-3 mb-3">
      {loading ? (
        <ShimmerCategoryItem
          hasImage
          // imageType="circular"
          imageWidth={100}
          imageHeight={130}
          text
          // cta
        />
      ) : (
        <div className="card">
          {/* <div className="card-header">Order ID: TYR-{order?.id}</div> */}
          <div className="card-body d-flex flex-row">
            <img
              src={order?.shopImage}
              className="rounded"
              style={{ height: "120px", width: "100px" }}
            />
            <div className="d-flex flex-column ps-2 w-100 justify-content-between">
              <span className="line-clamp">{order?.shopName}</span>
              <span className="line-clamp">{order?.shopAddress}</span>
              <span>TYR-{order?.id}</span>
              <p className="card-text">{order.totalPrice}</p>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <p>{order.status}</p>
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  href={`/track-order/${order?.id}`}
                  className="login-btn w-50 p-0"
                  style={{ height: "30px" }}
                >
                  Track
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryCard;
