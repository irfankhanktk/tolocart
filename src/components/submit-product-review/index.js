import React, { useState } from "react";
import { addProductReview } from "../../services/api/api-actions";
import { useSelector } from "react-redux";

function StarRating({ rating, onRatingChange }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "filled" : ""}`}
          onClick={() => onRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function SubmitReview({ productId }) {
  const { userInfo } = useSelector((s) => s?.user);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [ratingError, setRatingError] = useState("");
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Check if the rating is zero (or any other default value you're using).
      if (rating === 0) {
        setRatingError("Please rate the product."); // Display an error message.
        return; // Prevent form submission.
      }
      setLoading(true);
      const res = await addProductReview({
        customerId: userInfo?.id,
        productId: productId,
        rating: rating,
        description: description,
      });
      console.log("res::", res);
      // Reset the form
      setRating(0);
      setDescription("");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Rating:</label>
          {/* You can replace this with your own star rating component */}
          {ratingError && <p className="text-danger">{ratingError}</p>}
          <StarRating rating={rating} onRatingChange={handleRatingChange} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="px-2 w-100"
            required
            rows="4"
            cols="50"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <button
          disabled={loading}
          className="btn btn-secondary my-2"
          type="submit"
        >
          {loading ? (
            <span>
              {" "}
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              Loading...
            </span>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default SubmitReview;
