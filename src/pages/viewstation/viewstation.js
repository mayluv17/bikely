import React, { useMemo } from "react";
import Header from "../../components/header/Header";
import "./viewstation.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import bikeIconIn from "../../assets/Icons/bikeIn.png";
import bikeIconOut from "../../assets/Icons/bikeOut.png";

export default function ViewStation() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });

  function Map() {
    const location = useMemo(() => ({ lat: 44, lng: -80 }), []);
    return (
      <GoogleMap zoom={10} center={location} mapContainerClassName="map-area">
        <Marker position={location} />
      </GoogleMap>
    );
  }

  return (
    <>
      <Header />
      <div className="map-area">{!isLoaded ? "Loading..." : <Map />}</div>
      <div className="details-wrap grid">
        <div>
          <div className="name-wrap">
            <h6>Name</h6>
            <p>Hannasaari</p>
          </div>
          <div className="address">
            <h6>Address</h6>
            <p>Hannasaari 2, Espoo</p>
          </div>
        </div>

        <div>
          <div className="journey-fro">
            <h6>Journeys from Hannasaari station</h6>
            <p>62</p>
          </div>

          <div className="journey-to">
            <h6>Journeys to Hannasaari station</h6>
            <p>72</p>
          </div>
        </div>

        <div>
          <div className="flex top-trip-header arrival-stats">
            <img src={bikeIconIn} />
            <h6>Top 5 Return stations</h6>
          </div>
          <ol className="station-list">
            <li>Hannasaari</li>
            <li>Ympyrätalo</li>
            <li>Unioninkatu</li>
            <li>Kanavaranta</li>
            <li>Erottajan</li>
            <li>aukio</li>
          </ol>
        </div>
        <div>
          <div className="flex top-trip-header depatures-stats">
            <img src={bikeIconOut} />
            <h6>Top 5 Depature stations</h6>
          </div>
          <ol className="station-list">
            <li>Hannasaari</li>
            <li>Ympyrätalo</li>
            <li>Unioninkatu</li>
            <li>Kanavaranta</li>
            <li>Erottajan</li>
            <li>aukio</li>
          </ol>
        </div>
      </div>
    </>
  );
}
