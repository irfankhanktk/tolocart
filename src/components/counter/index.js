
import React, { useState } from 'react';
import './style.css'

const ProductCounter = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 10; // Price per unit of the product

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = price * quantity;

  return (
    <div className='d-flex gap-3 align-items-baseline'>
      {/* <h2>Quantity: {quantity}</h2>
      <h2>Total Price: {totalPrice}</h2> */}
      <button className='counter-button' onClick={decrement}>-</button>
      <h2 className='quantity-pro'>{quantity}</h2>
      <button className='counter-button' onClick={increment}>+</button>
      
    </div>
  );
};

export default ProductCounter;
