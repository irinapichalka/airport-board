import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Arrival from "./Arrival";
import Departure from "./Departure";
import DepartureSVG from "../../svg/DepartureSVG";
import ArrivalSVG from "../../svg/ArrivalSVG";

const SearchResult = () => {
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
      <div className="tabs-container">
        <div action="" className="calendar-date-wrap">
          <div className="calendar-container">
            <div className="calendar-container__text">10/01</div>
            <input type="date" name="date" />
          </div>

          <div className="dates-container">
            <div className="date yesterday">
              <div className="date__num">10/01</div>
              <div className="date__title">{` Вчора `}</div>
            </div>
            <div className="date today">
              <div className="date__num">11/01</div>
              <div className="date__title">Сьогодні</div>
            </div>
            <div className="date tomorrow">
              <div className="date__num">12/01</div>
              <div className="date__title">Завтра</div>
            </div>
          </div>
        </div>
      </div>

      <Route path="/departure" component={Departure} />
      <Route path="/arrival" component={Arrival} />
    </BrowserRouter>
  );
};

export default SearchResult;
