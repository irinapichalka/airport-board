import React from "react";
import { Link } from "react-router-dom";
import ArrivalSVG from "../../svg/ArrivalSVG";
import Table from "./Table";
import NoFound from "./NoFound";

function Arrival({ flights }) {
  if (flights.length === 0) {
    return <NoFound />;
  }
  return <Table flights={flights} />;
}

export default Arrival;
