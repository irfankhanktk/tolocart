import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setDecrementQtyCart,
  setIncrementQtyCart,
} from "../../store/reducers/cart-slice";
import { UTILS } from "../../utils";

const ProductCounter = ({ item }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s);
  const cartItem = cart?.cart?.find((x) => x?.id === item?.id);
  const [quantity, setQuantity] = useState(1);
  const price = 10; // Price per unit of the product

  const increment = () => {
    // setQuantity(quantity + 1);

    try {
      dispatch(setIncrementQtyCart(item));
    } catch (error) {
      alert(UTILS.returnError(error));
    }
  };

  const decrement = () => {
    try {
      dispatch(setDecrementQtyCart(item));
    } catch (error) {
      alert(UTILS.returnError(error));
    }
    // if (quantity > 1) {
    //   setQuantity(quantity - 1);
    // }
  };

  const totalPrice = price * quantity;

  return (
    <div className="d-flex gap-3 align-items-baseline">
      {/* <h2>Quantity: {quantity}</h2>
      <h2>Total Price: {totalPrice}</h2> */}
      <button className="counter-button" onClick={decrement}>
        -
      </button>
      <h2 className="quantity-pro">{cartItem?.qty || 1}</h2>
      <button className="counter-button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default ProductCounter;
