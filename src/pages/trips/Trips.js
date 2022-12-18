import React from "react";
import "./trip.css";
import Trip from "../../components/trip/Trip";
import Header from "../../components/header/Header";

export default function Trips() {
  return (
    <>
      <Header />
      <div className="trip-container">
        <h2>Trips</h2>
        <Trip />
        <Trip />
        <Trip />
        <Trip />
        <Trip />
        <Trip />
      </div>
    </>
  );
}
