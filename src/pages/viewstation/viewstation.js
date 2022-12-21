import React, { useMemo } from "react";
import Header from "../../components/header/Header";
import "./viewstation.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// AIzaSyABZHUfZhWdj8YJ6LW48PJhzd_7f8xulUg;

export default function ViewStation() {
  //   console.log(process.env.REACT_APP_GOOGLE_MAP_API);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });

  return (
    <>
      <Header />
      <div className="map-area">{!isLoaded ? "Loading..." : <Map />}</div>
      <div className="details-wrap grid">
        <div className="name-wrap">
          <h6>Name</h6>
          <p>Hannasaari</p>
        </div>
        <div className="address">
          <h6>Address</h6>
          <p>Hannasaari 2, Espoo</p>
        </div>
        <div className="journey-fro">
          <h6>Journeys from Hannasaari station</h6>
          <p>62</p>
        </div>
        <div className="journey-to">
          <h6>Journeys to Hannasaari station</h6>
          <p>72</p>
        </div>
      </div>
    </>
  );
}
function Map() {
  const location = useMemo(() => ({ lat: 60.184312, lng: 24.826671 }), []);
  return (
    <GoogleMap zoom={10} center={location} mapContainerClassName="map-area">
      <Marker position={location} />
    </GoogleMap>
  );
}
