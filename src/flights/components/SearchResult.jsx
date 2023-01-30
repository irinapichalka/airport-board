import React, { forwardRef } from "react";
import { BrowserRouter, Route, useLocation, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

import DepartureSVG from "../../svg/DepartureSVG";
import ArrivalSVG from "../../svg/ArrivalSVG";
import moment from "moment";

const SearchResult = ({
  dateForSearch,
  setDateForSearch,
  flights,
  getFlights,
  changeDate,
}) => {
  const handleChange = (date) => {
    setDateForSearch(date);
    getFlights(moment(date).format("DD-MM-YYYY"));
  };

  console.log(flights);

  let today = moment();
  let tomorrow = moment().add(1, "days");
  let yesterday = moment().add(-1, "days");

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <span
      className="search-result__date-num show-calendar example-custom-input"
      type="date"
      onClick={onClick}
      ref={ref}
    >
      {moment(value).format("DD/MM")}
    </span>
  ));

  let location = useLocation();
  let isDeparture = false;
  let isArrival = false;
  console.log(location.pathname);
  if (location.pathname === "/departure" || location.pathname === "/") {
    isDeparture = true;
  }
  if (location.pathname === "/arrival") {
    isArrival = true;
  }
  return (
    <>
      <div className="search-result">
        <div className="nav-list">
          <Link
            className={`nav-list__item nav-left ${
              isDeparture ? "nav-list__item-selected" : ""
            }`}
            to="/departure"
          >
            <span className="nav-list__item-icon">
              <DepartureSVG />
            </span>
            <span>виліт</span>
          </Link>
          <Link
            className={`nav-list__item nav-right ${
              isArrival ? "nav-list__item-selected" : ""
            }`}
            to="/arrival"
          >
            <span className="nav-list__item-icon">
              <ArrivalSVG />
            </span>
            <span>приліт</span>
          </Link>
        </div>
      </div>
      <div className="search-result__dates">
        <div className="search-result__dates-calendar">
          <div>
            <DatePicker
              selected={dateForSearch}
              onChange={handleChange}
              customInput={<ExampleCustomInput />}
            />
          </div>
        </div>
        <div className="search-result__dates-conteiner">
          <div
            className="search-result__date yesterday"
            onClick={changeDate(yesterday)}
          >
            <span className="search-result__date-num">
              {yesterday.format("DD/MM")}
            </span>
            <span className="search-result__date-name">Вчора</span>
          </div>
          <div
            className="search-result__date today active-date"
            onClick={changeDate(today)}
          >
            <span className="search-result__date-num">
              {today.format("DD/MM")}
            </span>
            <span className="search-result__date-name">Сьогодні</span>
          </div>
          <div
            className="search-result__date tomorrow"
            onClick={changeDate(tomorrow)}
          >
            <span className="search-result__date-num">
              {tomorrow.format("DD/MM")}
            </span>
            <span className="search-result__date-name">Завтра</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
