import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

const NotificationModal = ({ show, onHide, notifications }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Notifications</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {notifications.map((notification, index) => (
          <div key={index}>
            {/* <Image
              src={notification.profileIcon}
              roundedCircle
              style={{ width: "50px", height: "50px" }}
            /> */}
            <h5>{notification.title}</h5>
            <p>{notification.description}</p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotificationModal;
