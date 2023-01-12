import React from "react";
import arrow from "../../assets/arrow-right.png";
import pin from "../../assets/Icons/map-pin.png";
import map from "../../assets/Icons/map.png";
import clock from "../../assets/Icons/clock.png";

export default function Trips({ data }) {
  const { duration, distance, departure_station_name, return_station_name } =
    data;
  // const roundDuration = Math.round(parseInt(distance.split(" ")[0]));
  return (
    <>
      <div className="trip-row grid">
        <div className="trip-location">
          <img src={pin} alt="pin" />
          <h6>{departure_station_name.split(" ")[0]}</h6>
          <img src={arrow} alt="arrow" />
          <h6>{return_station_name.split(" ")[0]}</h6>
        </div>
        <div className="trip-stats hide-sm">
          <img src={map} alt="arrow" />
          <h6>{distance}</h6>
          <img src={clock} alt="arrow" />
          <h6>{Math.round(duration / 60)} min</h6>
        </div>
      </div>
    </>
  );
}
