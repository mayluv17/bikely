import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import "./viewstation.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import bikeIconIn from "../../assets/Icons/bikeIn.png";
import bikeIconOut from "../../assets/Icons/bikeOut.png";

export default function ViewStation() {
  const [station, setStation] = useState([]);
  const { stationID } = useParams();
  let currentPage = parseInt(stationID);

  const url = `http://44.211.202.17/bikely/stations/details/${currentPage}`;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });

  function Map() {
    const location = useMemo(
      () => ({
        lat: parseInt(60.16098907),
        lng: parseInt(24.95650977),
      }),
      [station]
    );

    return (
      <GoogleMap zoom={10} center={location} mapContainerClassName="map-area">
        <Marker position={location} />
      </GoogleMap>
    );
  }

  // console.log(station);

  async function getStation() {
    const res = await fetch(url);
    const data = await res.json();
    if (data.success === 1) {
      setStation(data.data);
    } else {
    }
  }

  useEffect(() => {
    getStation();
  }, []);

  const dest_station = station.top_5_departure_stations?.map((item) => (
    <li key={crypto.randomUUID()}>
      {item.departure_station_name} {item.total_trips}
    </li>
  ));

  const return_station = station.top_5_return_stations?.map((item) => (
    <li key={crypto.randomUUID()}>
      {item.return_station_name} {item.total_trips}
    </li>
  ));

  return (
    <>
      <Header />
      <div className="map-area">{!isLoaded ? "Loading..." : <Map />}</div>
      <div className="details-wrap grid">
        <div>
          <div className="name-wrap">
            <h6>Name</h6>
            <p>{station.name}</p>
          </div>
          <div className="address">
            <h6>Address</h6>
            <p>{station.adress}</p>
          </div>
        </div>

        <div>
          <div className="journey-fro">
            <h6>Journeys from Hannasaari station</h6>
            <p>{station.departure_station_total}</p>
          </div>

          <div className="journey-to">
            <h6>Journeys to Hannasaari station</h6>
            <p>{station.return_station_total}</p>
          </div>
        </div>

        <div>
          <div className="flex top-trip-header arrival-stats">
            <img src={bikeIconIn} />
            <h6>Top 5 Return stations</h6>
          </div>
          <ol className="station-list">{dest_station}</ol>
        </div>
        <div>
          <div className="flex top-trip-header depatures-stats">
            <img src={bikeIconOut} />
            <h6>Top 5 Depature stations</h6>
          </div>
          <ol className="station-list">{return_station}</ol>
        </div>
      </div>
    </>
  );
}
