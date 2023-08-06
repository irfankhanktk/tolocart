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
              style={{ height: "130px", width: "110px" }}
            />
            <div className="d-flex flex-column ps-2 w-100 justify-content-between">
              <h6 className="line-clamp order-shop-title">{order?.shopName}</h6>
              <span className="line-clamp">{order?.shopAddress}</span>
              <span>Oder id : TYR-{order?.id}</span>
              <span>Total Amount :$ {order?.totalAmount}</span>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <p>{order.status}</p>
                {/* {order?.isAssigned && ( */}
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  href={`/track-order/${order?.id}`}
                  className={`login-btn w-50 p-0`}
                  style={{ height: "30px" }}
                >
                  {order?.isAssigned ? "Track" : "Waiting"}
                </a>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryCard;
