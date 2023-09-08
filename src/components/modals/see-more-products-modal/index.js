import React from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BestReviewedCard from "../../best-reviewed-card";
import "./styles.css"; // Import the CSS file

const SeeMoreProductsModal = ({ show, setShow, products = [] }) => {
  const navigate = useNavigate();
  return (
    <Modal show={show} onHide={setShow} className="see-more-modal">
      <Modal.Header
        closeButton
        className="search-custom-close-header"
      ></Modal.Header>
      <Modal.Body className="p-0">
        <div className="more-modal-wrapper">
          <div className="d-flex flex-row flex-wrap">
            {products?.map((item, index) => (
              <div className="col-md-6 mb-2 p-3">
                <BestReviewedCard
                  onClick={() => navigate(`/product-detail/${item?.id}`)}
                  key={index}
                  item={item}
                />
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default React.memo(SeeMoreProductsModal);
