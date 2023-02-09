import React, { useEffect } from "react";
import Table from "./Table";
import NoFound from "./NoFound";
import { useHistory } from "react-router-dom";
import * as qs from "qs";
import moment from "moment";

function Arrival({ flights, dateForSearch, code, changeDate, setCode }) {
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

  const text = "Прилетів о";

  if (flights.length === 0) {
    return <NoFound />;
  }
  return <Table flights={flights} code={code} text={text} />;
}

export default Arrival;
