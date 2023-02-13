import React from "react";
import SearchSVG from "../../svg/SearchSVG";
import moment from "moment";
import PropTypes from "prop-types";

const SearchFlightsInput = ({ dateForSearch, code, setCode, getFlights }) => {
  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSearchFlights = (event) => {
    event.preventDefault();
    getFlights(moment(dateForSearch).format("DD-MM-YYYY"));
  };

  return (
    <div className="search">
      <h2 className="search__title title">ПОШУК РЕЙСУ</h2>
      <div className="search__line">
        <SearchSVG />
        <form name="searchFlightsForm" action="">
          <input
            className="search__line-input"
            type="text"
            placeholder="Номер рейсу"
            value={code}
            onChange={(event) => handleChange(event)}
          />
          <button
            className="search__line-button"
            type="submit"
            onClick={(event) => handleSearchFlights(event)}
          >
            Знайти
          </button>
        </form>
      </div>
    </div>
  );
};

SearchFlightsInput.propTypes = {
  dateForSearch: PropTypes.instanceOf(Date).isRequired,
  code: PropTypes.string,
  getFlights: PropTypes.func.isRequired,
  setCode: PropTypes.func.isRequired,
};

SearchFlightsInput.defaultProps = {
  code: "",
};

export default SearchFlightsInput;
