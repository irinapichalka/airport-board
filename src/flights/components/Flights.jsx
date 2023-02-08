import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchFlightsInput from "./SearchFlightsInput";
import SearchResult from "./SearchResult";
import {
  flightsSelector,
  dateSelector,
  codeSelector,
} from "../flights.selectors";
import * as flightsActions from "../flights.actions";
import moment from "moment";
import { Route, Redirect } from "react-router-dom";
import Arrival from "./Arrival";
import Departure from "./Departure";
import { useHistory } from "react-router-dom";

const Flights = ({
  getFlights,
  flights,
  dateForSearch,
  changeDate,
  getFlightsByCode,
  code,
  setCode,
}) => {
  useEffect(() => {
    getFlights(moment(dateForSearch).format("DD-MM-YYYY"));
  }, []);
  const history = useHistory();
  console.log(history.location.search);

  useEffect(() => {
    console.log(code);
    //getFlights(moment(dateForSearch).format("DD-MM-YYYY"));
    if (code !== "") {
      getFlightsByCode(code);
    }
  }, [code]);

  useEffect(() => {
    history.push({
      search: `?search=${code}&date=${moment(dateForSearch).format(
        "DD-MM-YYYY"
      )}`,
    });
    console.log(dateForSearch);
    console.log(code);
  }, [code, dateForSearch]);

  return (
    <>
      <SearchFlightsInput
        getFlightsByCode={getFlightsByCode}
        dateForSearch={dateForSearch}
        code={code}
        setCode={setCode}
        getFlights={getFlights}
      />
      <SearchResult
        flights={flights}
        dateForSearch={dateForSearch}
        setDateForSearch={changeDate}
        getFlights={getFlights}
        changeDate={changeDate}
        code={code}
      />
      <Route path="/departure">
        <Departure
          flights={flights.departure}
          dateForSearch={dateForSearch}
          code={code}
          changeDate={changeDate}
          getFlights={getFlights}
          setCode={setCode}
        />
      </Route>
      <Route path="/arrival">
        <Arrival
          flights={flights.arrival}
          dateForSearch={dateForSearch}
          code={code}
          changeDate={changeDate}
          getFlights={getFlights}
          setCode={setCode}
        />
      </Route>
      <Route exact path="/">
        <Redirect to="/departure" />
      </Route>
    </>
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
  setCode: flightsActions.setCode,
};

const mapState = (state) => {
  return {
    flights: flightsSelector(state),
    dateForSearch: dateSelector(state),
    code: codeSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Flights);
