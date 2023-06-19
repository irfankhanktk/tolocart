import React from "react";
import { Modal } from "react-bootstrap";
import "./styles.css"; // Import the CSS file
import BestReviewedCard from "../../best-reviewed-card";
import { useNavigate } from "react-router-dom";
import Loader from "../../loader";

const SearchProductsModal = ({
  show,
  setShow,
  searchResults = [],
  loading = true,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Modal show={show} onHide={setShow} centered>
        <Modal.Header
          closeButton
          className="search-custom-close-header"
        ></Modal.Header>
        <Modal.Body className="p-0">
          <div className="search-modal-wrapper">
            <span className="search-signup-title">Search Results</span>
            {loading ? <Loader /> : null}{" "}
            {searchResults?.map((item, index) => (
              <div className="mb-2">
                <BestReviewedCard
                  onClick={() => navigate(`/product-detail/${item?.id}`)}
                  key={index}
                  item={item}
                />
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SearchProductsModal;
