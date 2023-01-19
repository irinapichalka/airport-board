import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchFlightsInput from "./SearchFlightsInput";
import SearchResult from "./SearchResult";
import { flightsSelector, dateSelector } from "../flights.selectors";
import * as flightsActions from "../flights.actions";
import moment from "moment";

const Flights = ({ getFlights, flights, dateForSearch, changeDate }) => {
  useEffect(() => {
    console.log(moment(dateForSearch).format("DD-MM-YYYY"));
    getFlights(moment(dateForSearch).format("DD-MM-YYYY"));
  }, [dateForSearch]);

  console.log(flights.flights.body);
  console.log(dateForSearch);
  // console.log(typeof flights.body);
  return (
    <div className="page">
      <SearchFlightsInput />
      <SearchResult
        flights={flights}
        dateForSearch={dateForSearch}
        setDateForSearch={changeDate}
        getFlights={getFlights}
      />
    </div>
  );
};

Flights.propTypes = {
  flights: PropTypes.arrayOf(PropTypes.shape()),
  getFlights: PropTypes.func.isRequired,
};
const mapDispatch = {
  getFlights: flightsActions.getFlights,
  changeDate: flightsActions.changeDate,
};

const mapState = (state) => {
  return {
    flights: flightsSelector(state),
    dateForSearch: dateSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Flights);
