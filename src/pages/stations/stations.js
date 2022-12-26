import React from "react";
import "./station.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Station from "../../components/station/station";
import leftIcon from "../../assets/Icons/chevron-left.png";
import rightIcon from "../../assets/Icons/chevron-right.png";

export default function Stations() {
  return (
    <>
      <Header />
      <div className="trip-container">
        <h2>Stations</h2>
        <Station stationId="1" />
      </div>
      <div className="flex pagination-wrap">
        <Link>
          <img src={leftIcon} /> Previous
        </Link>
        <Link>
          Next
          <img src={rightIcon} />
        </Link>
      </div>
    </>
  );
}
