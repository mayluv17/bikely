import React from "react";
import pin from "../../assets/Icons/map-pin.png";
import stationIcon from "../../assets/Icons/minimize.png";
import eyeIcon from "../../assets/Icons/eye.png";
import { Link } from "react-router-dom";

export default function Station({ stationId }) {
  return (
    <div className="stations-row grid">
      <div className="station-name-wrap">
        <img src={stationIcon} alt="station-icon" />
        <h6>Hanasaari</h6>
      </div>
      <div className="location-wrap hide-sm">
        <img src={pin} alt="location icon" />
        <h6>Länsituulenkuja 3, Espoo</h6>
      </div>
      <div className="view-btn-wrap flex">
        <Link to={`/station/${stationId}`}>
          <img className="eye-icon" src={eyeIcon} alt="View icon" /> view
        </Link>
      </div>
    </div>
  );
}
