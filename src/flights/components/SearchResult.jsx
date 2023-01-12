import React, { useState, forwardRef } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import Arrival from "./Arrival";
import Departure from "./Departure";
import DepartureSVG from "../../svg/DepartureSVG";
import ArrivalSVG from "../../svg/ArrivalSVG";

const SearchResult = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <span
      className="search-result__date-num show-calendar example-custom-input"
      type="date"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </span>
  ));
  return (
    <BrowserRouter>
      <div className="search-result">
        <div className="nav-list">
          <Link className="nav-list__item nav-left" to="/departure">
            <span className="nav-list__item-icon">
              <DepartureSVG />
            </span>
            <span>виліт</span>
          </Link>
          <Link
            className="nav-list__item nav-right nav-list__item-selected"
            to="/arrival"
          >
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
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
            />
          </div>
        </div>
        <div className="search-result__dates-conteiner">
          <div className="search-result__date yesterday active-date">
            <span className="search-result__date-num">10/01</span>
            <span className="search-result__date-name">{` Вчора `}</span>
          </div>
          <div className="search-result__date today">
            <span className="search-result__date-num">11/01</span>
            <span className="search-result__date-name">Сьогодні</span>
          </div>
          <div className="search-result__date tomorrow">
            <span className="search-result__date-num">12/01</span>
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
