import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchFlightsInput from "./SearchFlightsInput";
import SearchResult from "./SearchResult";

class Flights extends React.Component {
  render() {
    return (
      <div className="page">
        <SearchFlightsInput />
        <SearchResult />
      </div>
    );
  }
}
/*
TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
};*/

export default Flights;
