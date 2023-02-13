import React, { useEffect } from "react";
import Table from "./Table";
import NoFound from "./NoFound";
import { useHistory } from "react-router-dom";
import * as qs from "qs";
import moment from "moment";
import PropTypes from "prop-types";

function Departure({ flights, dateForSearch, code, changeDate, setCode }) {
  const history = useHistory();

  useEffect(() => {
    const parsed = qs.parse(history.location.search.substr(1));
    const [day, month, year] = parsed.date.split("-");
    changeDate(new Date(+year, month - 1, +day));
    setCode(parsed.search);
  }, []);

  useEffect(() => {
    history.push({
      search: `?search=${code}&date=${moment(dateForSearch).format(
        "DD-MM-YYYY"
      )}`,
    });
  }, [code, dateForSearch]);

  const text = "Вилетів о";

  if (flights.length === 0) {
    return <NoFound />;
  }
  return <Table flights={flights} code={code} text={text} />;
}

Departure.propTypes = {
  flights: PropTypes.array,
  dateForSearch: PropTypes.instanceOf(Date).isRequired,
  code: PropTypes.string,
  changeDate: PropTypes.func.isRequired,
  setCode: PropTypes.func.isRequired,
};

Departure.defaultProps = {
  flights: [],
  code: "",
};

export default Departure;
