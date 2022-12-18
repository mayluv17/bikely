import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import menu from "../../assets/Icons/menu.png";
import logo from "../../assets/logo.png";

let menuClass = "topnav";
function menuToggler() {
  var x = document.getElementById("topMenu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} className="logo" />

        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb" htmlFor="side-menu">
          <span className="hamb-line"></span>
        </label>
        <nav className="nav">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="trips">Trips</Link>{" "}
            </li>
            <li>
              <Link to="/stations">Stations</Link>
            </li>
            <li>
              <Link to="">GitHub</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
