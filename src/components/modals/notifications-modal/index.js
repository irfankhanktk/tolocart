import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getNotifications } from "../../../services/api/api-actions";
import { UTILS } from "../../../utils";
import Loader from "../../loader";

const NotificationModal = ({ show, onHide }) => {
  const { userInfo } = useSelector((s) => s?.user);
  const [notifications, setNotifications] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getAllNotifications = async () => {
    try {
      setLoading(true);
      const res = await getNotifications();
      setNotifications(res?.data || []);
    } catch (error) {
      console.log("error:::", error);
      alert(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    if (userInfo?.id && show) {
      getAllNotifications();
    } else {
      setLoading(false);
    }
  }, [show]);
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Notifications</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            height: "400px",
          }}
        >
          {loading ? (
            <Loader style={{ height: "100%" }} />
          ) : notifications?.length < 1 ? (
            <div className="h-100 d-flex flex-column text-center justify-content-center">
              <span>You have no notifications yet</span>
            </div>
          ) : (
            notifications.map((notification, index) => (
              <div key={index}>
                {/* <Image
              src={notification.profileIcon}
              roundedCircle
              style={{ width: "50px", height: "50px" }}
            /> */}
                <h5>{notification.title}</h5>
                <p>{notification.body}</p>
              </div>
            ))
          )}
        </div>
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
