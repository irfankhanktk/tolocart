import React from "react";
import OrderHistoryCard from "../../components/order-history-card";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader";
import { getUserOrders } from "../../services/api/api-actions";
import OrderDetailsModal from "../../components/modals/order-details-modal";
import ErrorPage from "../error-page";
const OrderHistory = () => {
  const { order } = useSelector((state) => state);
  const { active_orders, past_orders } = order;
  const [loading, setLoading] = React.useState(true);
  const [orderDetails, setOrderDetails] = React.useState(null);
  const [orderModal, setOrderModal] = React.useState(false);
  const [error, setError] = React.useState("");

  const dispatch = useDispatch();

  const getOrders = async () => {
    dispatch(getUserOrders(setLoading, setError));
  };
  React.useEffect(() => {
    getOrders();
  }, []);
  if (loading) {
    return <Loader />;
  }
  if (error) return <ErrorPage error={error} />;

  return (
    <div className="container-fluid">
      <div className="d-md-flex flex-md-wrap pt-3">
        {active_orders?.map((item, index) => (
          <OrderHistoryCard
            order={item}
            key={index}
            onClick={() => {
              setOrderDetails(item);
              setOrderModal(true);
            }}
          />
        ))}
      </div>
      <OrderDetailsModal
        order_id={orderDetails?.id}
        show={orderModal}
        setShow={setOrderModal}
      />
    </div>
  );
};
export default OrderHistory;
