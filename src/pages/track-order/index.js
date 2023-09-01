import { GoogleApiWrapper, Map, Marker, Polyline } from "google-maps-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader";
import { getOrderDetails } from "../../services/api/api-actions";
import { UTILS } from "../../utils";
import ErrorPage from "../error-page";
import "./style.css";
import PlaceOrderModal from "../../components/modals/placeOrder-modal";
const TrackOrder = (props) => {
  const navigate = useNavigate();
  const [directions, setDirections] = React.useState(null);
  const [orderDetails, setOrderDetails] = React.useState(null);
  const [placeOrderModal, setPlaceOrderModal] = React.useState(false);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const { id } = useParams();

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);

  // const receivedObject = {
  //   key1: queryParams.get("key1"),
  //   key2: queryParams.get("key2"),
  // };
  const getDetails = async () => {
    try {
      if (!id) return;
      setLoading(true);
      const res = await getOrderDetails(id);
      setPlaceOrderModal(!res?.data?.isAssigned);
      setOrderDetails(res?.data);
    } catch (error) {
      console.log("error::", error);
      setError(UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getDetails();
    // const intervalId = setInterval(getDetails, 30000);

    // // Clean up the interval on component unmount
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, [id]);
  const source = {
    lat: orderDetails?.shopLatitude || 31.505612225989942,
    lng: orderDetails?.shopLongitude || 74.34488664801904,
  };
  const dest = {
    lat: orderDetails?.latitude || 31.502035568265256,
    lng: orderDetails?.longitude || 74.349006520655,
  };
  React.useEffect(() => {
    window.scrollTo(0, 0); //
    const { google } = props;

    const directionsService = new google.maps.DirectionsService();

    const origin = new google.maps.LatLng(source?.lat, source?.lng);
    const destination = new google.maps.LatLng(dest?.lat, dest?.lng);

    const request = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      }
    });
  }, [props, orderDetails]);
  if (error) return <ErrorPage error={error} />;

  return (
    <div className="m-container">
      {loading ? (
        <Loader />
      ) : !orderDetails?.isAssigned ? (
        <PlaceOrderModal
          orderId={orderDetails?.id}
          show={placeOrderModal}
          setShow={() => {
            setPlaceOrderModal(false);
            navigate("/order-history");
          }}
          onPlaceClick={() => {
            // setTrackOrderModal(true);
            setPlaceOrderModal(false);
          }}
          orderDetails={orderDetails}
          setOrderDetails={setOrderDetails}
        />
      ) : (
        <>
          <div className="container-fluid">
            <h1>Track Your Bike Order</h1>
            {directions && (
              <div className="info">
                <p>
                  Estimated Distance:{" "}
                  {directions.routes[0].legs[0].distance.text}
                </p>
                <p>
                  Estimated Duration:{" "}
                  {directions.routes[0].legs[0].duration.text}
                </p>
              </div>
            )}
          </div>
          <Map google={props.google} zoom={14} initialCenter={source}>
            <Marker position={source} />
            <Marker position={dest} />
            {directions && (
              <Polyline
                path={directions.routes[0].overview_path}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={5}
              />
            )}
          </Map>
        </>
      )}
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyB5qyR8RLChy15K4wrySBgxBS-gUvq9NdY",
})(TrackOrder);
