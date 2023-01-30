import React from "react";
import { Link } from "react-router-dom";
import Table from "./Table";
import NoFound from "./NoFound";

function Departure({ flights }) {
  if (flights.length === 0) {
    return <NoFound />;
  }
  return <Table flights={flights} />;
}

export default Departure;
