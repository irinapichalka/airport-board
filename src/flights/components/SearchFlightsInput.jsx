import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchSVG from "../../svg/SearchSVG";
import moment from "moment";
import qs from "qs";

const SearchFlightsInput = ({
  getFlightsByCode,
  dateForSearch,
  code,
  setCode,
  getFlights,
}) => {
  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSearchFlights = (event) => {
    event.preventDefault();
    // getFlights(moment(dateForSearch).format("DD-MM-YYYY"));
    if (code !== "") getFlightsByCode(code);
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
            placeholder="Номер рейсу або місто"
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

export default SearchFlightsInput;
