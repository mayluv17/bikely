import React from "react";
import { Link } from "react-router-dom";
import Logobig from "./images/logobig.png";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="grid hero-section">
        <div className="btn-wrap flex">
          <Link to="/trips" className="btn-lg">
            Bikes Trips <span></span>
          </Link>
          <Link to="/stations" className="btn-lg">
            Bike Stations <span></span>
          </Link>
        </div>
        <div>
          <img
            className="bikely-logo-big"
            src={Logobig}
            alt="bikely big logo"
          />
        </div>
      </div>
    </>
  );
}
