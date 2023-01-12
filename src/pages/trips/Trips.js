import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./trip.css";
import leftIcon from "../../assets/Icons/chevron-left.png";
import rightIcon from "../../assets/Icons/chevron-right.png";
import Trip from "../../components/trip/Trip";
import Header from "../../components/header/Header";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const { pageNumber } = useParams();
  let currentPage = parseInt(pageNumber) || 1;
  let nextPage = 0;
  let prevPage = 0;

  const url = `http://44.211.202.17/bikely/trips/${currentPage}`;

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

  async function getTrips() {
    const res = await fetch(url);
    const data = await res.json();
    setTrips(data.data);
    setTotalPages(data.number_of_page);
  }
  const tripComponents = trips.map((trip) => (
    <Trip key={crypto.randomUUID()} data={trip} />
  ));

  useEffect(() => {
    getTrips();
  }, [pageNumber]);

  return (
    <>
      <Header />
      <div className="trip-container">
        <h2>Trips</h2>
        {tripComponents}
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
