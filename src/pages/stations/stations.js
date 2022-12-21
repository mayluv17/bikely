import React from "react";
import "./station.css";
import Header from "../../components/header/Header";
import Station from "../../components/station/station";

export default function Stations() {
  return (
    <>
      <Header />
      <div className="trip-container">
        <h2>Stations</h2>
        <Station stationId="1" />
        {/* <Station />
        <Station />
        <Station />
        <Station /> */}
      </div>
    </>
  );
}
