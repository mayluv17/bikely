import React from "react";
import arrow from "../../assets/arrow-right.png";
import pin from "../../assets/Icons/map-pin.png";
import map from "../../assets/Icons/map.png";
import clock from "../../assets/Icons/clock.png";

export default function Trips() {
  return (
    <>
      <div className="trip-row grid">
        <div className="trip-location">
          <img src={pin} alt="pin" />
          <h6>Espoo</h6>
          <img src={arrow} alt="arrow" />
          <h6>Pasila</h6>
        </div>
        <div className="trip-stats hide-sm">
          <img src={map} alt="arrow" />
          <h6>13km</h6>
          <img src={clock} alt="arrow" />
          <h6>20 minutes</h6>
        </div>
      </div>
    </>
  );
}
