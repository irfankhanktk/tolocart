import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setInstructions } from "../../store/reducers/cart-slice";
function AddInstruction({ item, index }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s);
  const cartItem = cart?.cart?.find((x) => x?.id === item?.id);
  return (
    <div className="add-instruction-container">
      <div className={`input-container editing`}>
        <input
          className="border-0 ps-1"
          type="text"
          placeholder="Add Instruction"
          value={cartItem?.instructions || ""}
          onChange={(e) => {
            dispatch(setInstructions({ value: e.target.value, index }));
          }}
        />
        <div className="edit-button">
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default AddInstruction;
