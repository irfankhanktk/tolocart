import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
function LocationMarker({ position, setPosition }) {
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      console.log("position:::", e.latlng);
      setPosition(e.latlng);
      // map.flyTo(e.latlng, map.getZoom());
    },
  });
  return position === null ? null : (
    <Marker position={[position.lat, position.lng]}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [mapCenter, setMapCenter] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    // Get the user's current location using the geolocation API
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          setMapCenter({ latitude, longitude });
        },
        (error) => console.error(error),
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <MapContainer
      scrollWheelZoom={false}
      center={[mapCenter.latitude, mapCenter.longitude]}
      zoom={13}
      style={{ height: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* <Marker position={[currentLocation.latitude, currentLocation.longitude]}>
        <Popup>Your Current Location</Popup>
      </Marker> */}

      <LocationMarker position={position} setPosition={setPosition} />
    </MapContainer>
  );
};

export default MapComponent;
