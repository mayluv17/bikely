import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />

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
              <Link to="/trips">Trips</Link>{" "}
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
