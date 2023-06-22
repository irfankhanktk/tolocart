import React from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";

const TrackOrder = (props) => {
  const [directions, setDirections] = React.useState(null);
  const source = {
    lat: 31.505612225989942,
    lng: 74.34488664801904,
  };
  const dest = {
    lat: 31.502035568265256,
    lng: 74.349006520655,
  };
  React.useEffect(() => {
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
  }, [props]);
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
  apiKey: "AIzaSyCbFQqjZgQOWRMuQ_RpXU0kGAUIfJhDw98",
})(TrackOrder);
