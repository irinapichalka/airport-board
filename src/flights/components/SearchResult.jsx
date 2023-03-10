import React, { forwardRef } from "react";
import { useLocation, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import DepartureSVG from "../../svg/DepartureSVG";
import ArrivalSVG from "../../svg/ArrivalSVG";
import moment from "moment";
import DatesPanel from "./DatesPanel";
import PropTypes from "prop-types";

const SearchResult = ({
  dateForSearch,
  setDateForSearch,
  getFlights,
  code,
}) => {
  const handleChange = (date) => {
    setDateForSearch(date);
    getFlights(moment(date).format("DD-MM-YYYY"));
  };

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

  if (location.pathname === "/departure" || location.pathname === "/") {
    isDeparture = true;
  }
  if (location.pathname === "/arrival") {
    isArrival = true;
  }
  return (
    <div className="search-result">
      <div className="nav-list">
        <Link
          className={`nav-list__item nav-left ${
            isDeparture ? "nav-list__item-selected" : ""
          }`}
          to={`/departure?search=${code}&date=${moment(dateForSearch).format(
            "DD-MM-YYYY"
          )}`}
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
          to={`/arrival?search=${code}&date=${moment(dateForSearch).format(
            "DD-MM-YYYY"
          )}`}
        >
          <span className="nav-list__item-icon">
            <ArrivalSVG />
          </span>
          <span>приліт</span>
        </Link>
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
        <DatesPanel handleChange={handleChange} />
      </div>
    </div>
  );
};
SearchResult.propTypes = {
  dateForSearch: PropTypes.instanceOf(Date).isRequired,
  code: PropTypes.string,
  getFlights: PropTypes.func.isRequired,
  setDateForSearch: PropTypes.func.isRequired,
};

SearchResult.defaultProps = {
  code: "",
};
export default SearchResult;
