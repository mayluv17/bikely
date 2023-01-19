import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./station.css";
import Header from "../../components/header/Header";
import Station from "../../components/station/station";
import leftIcon from "../../assets/Icons/chevron-left.png";
import rightIcon from "../../assets/Icons/chevron-right.png";

export default function Stations() {
  const [stations, setStations] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const { pageNumber } = useParams();
  const perPage = 10;
  const totalPages = totalRecords / perPage;
  let currentPage = parseInt(pageNumber) || 1;
  let nextPage = 0;
  let prevPage = 0;
  const url = `http://44.211.202.17/bikely/stations/`;
  let stationComponents = "";

  async function getStation() {
    const res = await fetch(url);
    const data = await res.json();

    if (data.success === 1) {
      setStations(data.data);
      setTotalRecords(data.total_record);
    } else {
    }
  }

  if (pageNumber <= totalRecords) {
    const toPage = currentPage * perPage;
    const fromPage = toPage - perPage;

    stationComponents = stations
      .slice(fromPage, toPage)
      .map((station) => <Station key={crypto.randomUUID()} data={station} />);
  }
  function paginateNext() {
    if (currentPage < totalPages) {
      return (nextPage = parseInt(currentPage) + 1);
    }
  }
  function paginatePrev() {
    if (currentPage > 1) {
      return (prevPage = parseInt(currentPage) - 1);
    } else {
      return 1;
    }
  }
  useEffect(() => {
    getStation();
  }, [pageNumber]);

  return (
    <>
      <Header />
      <div className="trip-container">
        <h2>Stations</h2>
        {stationComponents}
      </div>
      <div className="flex pagination-wrap">
        <Link
          to={`/stations/${paginatePrev()}`}
          style={{ pointerEvents: currentPage === 1 ? "none" : "" }}
        >
          <img alt="left-icon" src={leftIcon} /> Previous
        </Link>
        <Link
          to={`/stations/${paginateNext()}`}
          style={{ pointerEvents: currentPage >= totalPages ? "none" : "" }}
        >
          Next
          <img alt="right-icon" src={rightIcon} />
        </Link>
      </div>
    </>
  );
}
