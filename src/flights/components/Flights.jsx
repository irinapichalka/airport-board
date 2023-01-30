import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchFlightsInput from "./SearchFlightsInput";
import SearchResult from "./SearchResult";
import { flightsSelector, dateSelector } from "../flights.selectors";
import * as flightsActions from "../flights.actions";
import moment from "moment";
import { BrowserRouter, Route, useLocation, Link } from "react-router-dom";
import Arrival from "./Arrival";
import Departure from "./Departure";

const Flights = ({
  getFlights,
  flights,
  dateForSearch,
  changeDate,
  getFlightsByCode,
}) => {
  useEffect(() => {
    console.log(moment(dateForSearch).format("DD-MM-YYYY"));
    getFlights(moment(dateForSearch).format("DD-MM-YYYY"));
    //window.location.href = "http://departure";
  }, []);
  console.log(flights);
  console.log(flights.departure);
  console.log(flights.arrival);
  return (
    <div className="page">
      <BrowserRouter>
        <SearchFlightsInput getFlightsByCode={getFlightsByCode} />
        <SearchResult
          flights={flights}
          dateForSearch={dateForSearch}
          setDateForSearch={changeDate}
          getFlights={getFlights}
          changeDate={changeDate}
        />
        <Route path="/departure">
          <Departure flights={flights.departure} />
        </Route>
        <Route path="/arrival">
          <Arrival flights={flights.arrival} />
        </Route>
      </BrowserRouter>
    </div>
  );
};

Flights.propTypes = {
  flights: PropTypes.shape(),
  getFlights: PropTypes.func.isRequired,
};
const mapDispatch = {
  getFlights: flightsActions.getFlights,
  changeDate: flightsActions.changeDate,
  getFlightsByCode: flightsActions.getFlightsByCode,
};

const mapState = (state) => {
  return {
    flights: flightsSelector(state),
    dateForSearch: dateSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Flights);
