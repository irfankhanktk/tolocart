import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddToCart,
  setDecrementQtyCart,
  setIncrementQtyCart,
  setRemoveFromCart,
} from "../../../store/reducers/cart-slice";

const CartButton = ({ item }) => {
  const [hoveredOnce, setHoveredOnce] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((x) => x?.cart);
  const cartItem = cart?.find((x) => x?.id === item?.id);
  const incrementQuantity = (e) => {
    try {
      e.stopPropagation();
      if (!cartItem?.qty) {
        dispatch(setAddToCart(item));
      } else {
        dispatch(setIncrementQtyCart(item));
      }
    } catch (error) {
      alert(error?.message);
    }
  };
  // const incrementQuantity = () => {
  //   setQuantity(quantity + 1);
  //   setHoveredOnce(true);
  // };

  const decrementQuantity = (e) => {
    try {
      e.stopPropagation();
      if (cartItem?.qty > 1) {
        dispatch(setDecrementQtyCart(item));
      } else if (cartItem?.qty === 1) {
        resetQuantity();
      }
    } catch (error) {
      alert(error?.message);
    }
  };

  const resetQuantity = (e) => {
    dispatch(setRemoveFromCart(item));
    setHoveredOnce(false);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`cart-button ${cartItem?.qty > 0 ? "item-in-cart" : ""}`}
    >
      {!cartItem?.qty && (
        <span
          className={`px-2 icon ${
            hoveredOnce || cartItem?.qty > 0 ? "hover-show" : ""
          }`}
          onClick={incrementQuantity}
        >
          +
        </span>
      )}
      {cartItem?.qty > 0 && (
        <>
          {cartItem?.qty === 1 ? (
            <span
              className="px-2 icon delete"
              onClick={(e) => {
                e.stopPropagation();
                resetQuantity();
              }}
            >
              X
            </span>
          ) : (
            <span className="px-2 icon minus" onClick={decrementQuantity}>
              -
            </span>
          )}
          <span className="px-2 quantity">{cartItem?.qty}</span>
          <span
            className={`px-2 icon plus ${hoveredOnce ? "hover-show" : ""}`}
            onClick={incrementQuantity}
          >
            +
          </span>
        </>
      )}
    </div>
  );
};

export default CartButton;
