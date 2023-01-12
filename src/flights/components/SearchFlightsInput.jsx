import React from "react";
import SearchSVG from "../../svg/SearchSVG";

class SearchFlightsInput extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSearchFlights = () => {
    //this.props.onCreate(this.state.value);
    this.setState({
      value: "",
    });
  };

  render() {
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
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button
              className="search__line-button"
              type="submit"
              onClick={this.handleSearchFlights}
            >
              Знайти
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchFlightsInput;
