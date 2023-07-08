import React from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";
import { useLocation, useParams } from "react-router-dom";
import { getOrderDetails } from "../../services/api/api-actions";
import Loader from "../../components/loader";

const TrackOrder = (props) => {
  const [directions, setDirections] = React.useState(null);
  const [orderDetails, setOrderDetails] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

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
      setOrderDetails(res?.data);
    } catch (error) {
      console.log("error::", error);
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
      console.log("result::", result);
      console.log("status:::", status);
      if (status === google.maps.DirectionsStatus.OK) {
        setDirections(result);
      }
    });
  }, [props, orderDetails]);
  if (loading) return <Loader />;
  return (
    <div>
      <div className="container-fluid">
        <h1>Track Your Bike Order</h1>
        {directions && (
          <div className="info">
            <p>
              Estimated Distance: {directions.routes[0].legs[0].distance.text}
            </p>
            <p>
              Estimated Duration: {directions.routes[0].legs[0].duration.text}
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
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyDH7Afsb0W4BTLHKELRLf_hg1UPiTvwc7k",
})(TrackOrder);
