import React from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CateryCard from "../../category-card";
import "./styles.css"; // Import the CSS file

const SeeMoreCategoriesModal = ({ show, setShow, categories = [] }) => {
  const navigate = useNavigate();
  return (
    <Modal show={show} onHide={setShow} className="see-more-modal">
      <Modal.Header
        closeButton
        className="search-custom-close-header"
      ></Modal.Header>
      <Modal.Body className="p-0">
        <div className="more-modal-wrapper">
          <div className="d-flex row flex-wrap">
            {categories?.map((item, index) => (
              <CateryCard
                key={index}
                onClick={() => navigate(`/stores`)}
                item={item}
              />
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default React.memo(SeeMoreCategoriesModal);
