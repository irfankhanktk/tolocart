import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./style.css";

const MyMap = ({ onConfirmLocation, show, onHide, latlng }) => {
  const [markerPosition, setMarkerPosition] = useState(latlng);
  const [address, setAddress] = useState("");
  const [map, setMap] = useState(null);
  // Access the map instance

  const updateMarkerPosition = async (latLng) => {
    setMarkerPosition([latLng.lat, latLng.lng]);
    if (map) map.setView([latLng.lat, latLng.lng]); // Navigate the map to the new marker position
  };

  const handleSelect = async (selectedAddress) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      if (map) {
        updateMarkerPosition(latLng);
        map.setView([latLng.lat, latLng.lng]);
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Click on Map to set Your Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ position: "relative" }}>
          <MapContainer
            center={latlng}
            zoom={8}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />
            <Marker position={markerPosition}>
              <Popup>A marker here!</Popup>
            </Marker>
            <MapClickHandler
              onMapClick={updateMarkerPosition}
              setMap={setMap}
            />
          </MapContainer>
          <div className="autocomplete-container search-container text-center">
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Search Places...",
                      className: "location-search-input",
                    })}
                  />
                  {suggestions.length > 0 && (
                    <div className="autocomplete-dropdown-container">
                      {suggestions.map((suggestion, index) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                            })}
                            key={index}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </PlacesAutocomplete>
          </div>
          <div className="text-end">
            <button
              onClick={() => onConfirmLocation(markerPosition)}
              className="btn btn-block btn-info m-2"
            >
              Confirm Location
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const MapClickHandler = ({ onMapClick, setMap }) => {
  const map = useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
      map.setView(e.latlng); // Navigate the map to the clicked position
    },
  });
  React.useEffect(() => {
    if (map) setMap(map);
  }, [map]);

  return null;
};

export default MyMap;
