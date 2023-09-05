// Review.js

import React from "react";
import "./style.css";
const ReviewCard = ({ user, image, rating, description }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const starClassName = i < rating ? "star filled" : "star empty";
    stars.push(
      <span key={i} className={starClassName}>
        &#9733;
      </span>
    );
  }

  return (
    <div className="review">
      <img src={image} alt={`${user}'s avatar`} className="user-avatar" />
      <div className="user-info">
        <h5>{user}</h5>
        <small>{description}</small>
        <div className="rating">{stars}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
