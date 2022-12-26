import React from "react";
import { Link } from "react-router-dom";
import "./trip.css";
import leftIcon from "../../assets/Icons/chevron-left.png";
import rightIcon from "../../assets/Icons/chevron-right.png";
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
