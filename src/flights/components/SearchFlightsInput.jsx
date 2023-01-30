import React, { useState } from "react";
import SearchSVG from "../../svg/SearchSVG";

const SearchFlightsInput = ({ getFlightsByCode }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearchFlights = (event) => {
    event.preventDefault();
    getFlightsByCode(value);
    console.log(value);
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
            value={value}
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
