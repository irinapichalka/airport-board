import React from "react";
import { Link } from "react-router-dom";
import SearchSVG from "./svg/SearchSVG";

function Home() {
  return (
    <div className="search">
      <h2 className="search__title">ПОШУК РЕЙСУ</h2>
      <div className="search__line">
        <SearchSVG />
        <form name="searchFlightsForm" action="">
          <input
            className="search__line-input"
            type="text"
            placeholder="Номер рейсу або місто"
          />
          <button className="search__line-button" type="submit">
            Знайти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
