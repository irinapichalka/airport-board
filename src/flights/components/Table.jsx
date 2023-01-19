import React from "react";

const Table = ({ flights }) => {
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
          {flights.map((flight) => (
            <tr className="table__flight">
              <td className="table__flight-terminal" dataTerminal={flight.term}>
                <span
                  className="table__flight-terminal-type"
                  dataTerminal={flight.term}
                >
                  {flight.term}
                </span>
              </td>
              <td className="table__flight-time-field">
                {flight.timeDepShedule}
              </td>
              <td className="table__flight-way">
                {flight.airportToID.name_en}
              </td>
              <td className="table__flight-mob mob"></td>
              <td className="table__flight-status-field">{`Вилетів ${flight.timeTakeofFact}`}</td>
              <td className="table__flight-number-mob mob">
                {flight.codeShare}
              </td>
              <td className="table__flight-company">
                <div className="table__flight-company-info">
                  <img
                    className="table__flight-company-logo"
                    src={flight.logoName}
                    alt=""
                  />
                  <span className="table__flight-company-name">
                    {flight.icao}
                  </span>
                </div>
              </td>
              <td className="table__flight-number">{flight.codeShare}</td>
              <td className="table__flight-more">
                <a className="table__flight-more-link" href="">
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
