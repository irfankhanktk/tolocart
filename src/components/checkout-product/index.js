import React from "react";
import { returnImage } from "../../utils";
import ProductCounter from "../counter";
import "./style.css";
import { useDispatch } from "react-redux";
import { setRemoveFromCart } from "../../store/reducers/cart-slice";
import { Link } from "react-router-dom";
const CheckoutProduct = ({ item }) => {
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(setRemoveFromCart(item));
  };
  return (
    <>
      <div className="card-product">
        <div className="row m-0">
          <div className="col-md-4 d-flex flex-row align-items-center">
            <img
              src={returnImage(item?.imagePath)}
              style={{ height: "64px" }}
            />
          </div>
          <div className="col-md-6">
            <div className="title_heading">
              <h2>{item?.name}</h2>
              <h3>$ 3.49 / lb</h3>
              <ProductCounter item={item} />
              <Link to="#" className="add-instruction">
                <i class="fa fa-pencil" aria-hidden="true"></i> Add Instruction
              </Link>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-end justify-content-between flex-column">
            <i onClick={onRemove} class="fa fa-times" aria-hidden="true"></i>
            <div className="checkout-price h-auto ">
              <span>${item?.price}</span>
              <p className="mb-2">49</p>
            </div>
          </div>
          <div className="col-md-12 d-flex align-items-center justify-content-between">
            <div className="gift-order">
              <h2>
                <i
                  class="fa fa-gift"
                  aria-hidden="true"
                  style={{ color: "#000" }}
                ></i>{" "}
                Make this order a gift
              </h2>
            </div>
            <div class="check-box">
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutProduct;
