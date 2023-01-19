import React, { useState, forwardRef } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import Arrival from "./Arrival";
import Departure from "./Departure";
import DepartureSVG from "../../svg/DepartureSVG";
import ArrivalSVG from "../../svg/ArrivalSVG";
import moment from "moment";
import { getFlights } from "../flights.actions";

const SearchResult = ({
  dateForSearch,
  setDateForSearch,
  flights,
  getFlights,
}) => {
  const handleChange = (date) => {
    setDateForSearch(date);
    console.log(moment(dateForSearch).format("DD-MM-YYYY"));
    getFlights(moment(dateForSearch).format("DD-MM-YYYY"));
  };

  console.log(flights.body);

  let today = moment().format("DD/MM");
  let tomorrow = moment().add(1, "days").format("DD/MM");
  let yesterday = moment().add(-1, "days").format("DD/MM");

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
  return (
    <BrowserRouter>
      <div className="search-result">
        <div className="nav-list">
          <Link
            className="nav-list__item nav-left nav-list__item-selected"
            to="/departure"
          >
            <span className="nav-list__item-icon">
              <DepartureSVG />
            </span>
            <span>виліт</span>
          </Link>
          <Link className="nav-list__item nav-right" to="/arrival">
            <span className="nav-list__item-icon selected-svg">
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
          <div className="search-result__date yesterday active-date">
            <span className="search-result__date-num">{yesterday}</span>
            <span className="search-result__date-name">Вчора</span>
          </div>
          <div className="search-result__date today">
            <span className="search-result__date-num">{today}</span>
            <span className="search-result__date-name">Сьогодні</span>
          </div>
          <div className="search-result__date tomorrow">
            <span className="search-result__date-num">{tomorrow}</span>
            <span className="search-result__date-name">Завтра</span>
          </div>
        </div>
      </div>

      <Route path="/departure" component={Departure} />
      <Route path="/arrival" component={Arrival} />
    </BrowserRouter>
  );
};

export default SearchResult;
