import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchFlightsInput from "./SearchFlightsInput";
import SearchResult from "./SearchResult";
import {
  flightsSelector,
  dateSelector,
  codeSelector,
  isFetchingSelector,
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
  code,
  setCode,
  isFetching,
}) => {
  useEffect(() => {
    getFlights(moment(dateForSearch).format("DD-MM-YYYY"));
  }, []);

  const history = useHistory();
  useEffect(() => {
    history.push({
      search: `?search=${code}&date=${moment(dateForSearch).format(
        "DD-MM-YYYY"
      )}`,
    });
  }, []);

  return (
    <>
      <SearchFlightsInput
        dateForSearch={dateForSearch}
        code={code}
        setCode={setCode}
        getFlights={getFlights}
      />
      <SearchResult
        dateForSearch={dateForSearch}
        setDateForSearch={changeDate}
        getFlights={getFlights}
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
          isFetching={isFetching}
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
          isFetching={isFetching}
        />
      </Route>
      <Route exact path="/">
        <Redirect to="/departure" />
      </Route>
    </>
  );
};

Flights.propTypes = {
  flights: PropTypes.shape().isRequired,
  getFlights: PropTypes.func.isRequired,
  dateForSearch: PropTypes.instanceOf(Date).isRequired,
  changeDate: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
const mapDispatch = {
  getFlights: flightsActions.getFlights,
  changeDate: flightsActions.changeDate,
  setCode: flightsActions.setCode,
};

const mapState = (state) => {
  return {
    flights: flightsSelector(state),
    dateForSearch: dateSelector(state),
    code: codeSelector(state),
    isFetching: isFetchingSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Flights);
