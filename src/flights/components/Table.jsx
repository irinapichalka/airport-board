import React from "react";

const Table = ({ flights, code, text }) => {
  let filteredFlights = flights;
  if (code !== "") {
    filteredFlights = flights.filter(
      (flight) => flight["planeTypeID.code"] === code
    );
  }

  return (
    <div className="table">
      <table className="table__shedule">
        <thead>
          <tr>
            <th className="table__title">Термінал</th>
            <th className="table__title">Розклад</th>
            <th className="table__title">Напрямок</th>
            <th className="table__title">Статус</th>
            <th className="table__title">Авіакомпанія</th>
            <th className="table__title">Рейс</th>
            <th className="table__title"></th>
          </tr>
        </thead>
        <tbody>
          {filteredFlights.map((flight) => (
            <tr key={flight.ID} className="table__flight">
              <td
                className="table__flight-terminal"
                data-terminal={flight.term}
              >
                <span
                  className="table__flight-terminal-type"
                  data-terminal={flight.term}
                >
                  {flight.term}
                </span>
              </td>
              <td className="table__flight-time-field">
                {flight.actual.slice(11, 16)}
              </td>
              <td className="table__flight-way">
                {flight["airportToID.city"] || flight["airportFromID.city"]}
              </td>
              <td className="table__flight-mob mob"></td>
              <td className="table__flight-status-field">
                {`${text} ${flight.timeToStand.slice(11, 16)}`}
              </td>
              <td className="table__flight-number-mob mob">{flight.status}</td>
              <td className="table__flight-company">
                <div className="table__flight-company-info">
                  <img
                    className="table__flight-company-logo"
                    src={`https://api.iev.aero${flight.logo}`}
                    alt="logo"
                  />
                  <span className="table__flight-company-name">
                    {flight["carrierID.code"]}
                  </span>
                </div>
              </td>
              <td className="table__flight-number">
                {flight["planeTypeID.code"]}
              </td>
              <td className="table__flight-more">
                <a
                  className="table__flight-more-link"
                  href=""
                  onClick={() => alert("Тут будуть деталі про рейс 🧐")}
                >
                  <span>Деталі рейсу</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
