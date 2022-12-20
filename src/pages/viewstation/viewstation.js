import React from "react";
import Header from "../../components/header/Header";
import "./viewstation.css";
import { GoogleMap, useLoadeScript, Marker } from "google-map-react";

// AIzaSyABZHUfZhWdj8YJ6LW48PJhzd_7f8xulUg;

export default function ViewStation() {
  console.log(process.env.REACT_APP_GOOGLE_MAP_API);
  return (
    <>
      <Header />
      <div className="map-area"></div>
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
