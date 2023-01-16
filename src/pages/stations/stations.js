import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./station.css";
import Header from "../../components/header/Header";
import Station from "../../components/station/station";
import leftIcon from "../../assets/Icons/chevron-left.png";
import rightIcon from "../../assets/Icons/chevron-right.png";

export default function Stations() {
  const [stations, setStations] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const { pageNumber } = useParams();
  let currentPage = parseInt(pageNumber) || 1;
  let nextPage = 0;
  let prevPage = 0;

  const url = `http://44.211.202.17/bikely/stations/${currentPage}`;

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
  async function getStation() {
    const res = await fetch(url);
    const data = await res.json();

    if (data.success === 1) {
      setStations(data.data);
      setTotalPages(data.number_of_page);
    } else {
    }
  }
  const stationComponents = stations.map((station) => (
    <Station key={crypto.randomUUID()} data={station} />
  ));

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
          to={`/trips/${paginatePrev()}`}
          style={{ pointerEvents: currentPage === 1 ? "none" : "" }}
        >
          <img alt="left-icon" src={leftIcon} /> Previous
        </Link>
        <Link
          to={`/trips/${paginateNext()}`}
          style={{ pointerEvents: currentPage >= totalPages ? "none" : "" }}
        >
          Next
          <img alt="right-icon" src={rightIcon} />
        </Link>
      </div>
    </>
  );
}
