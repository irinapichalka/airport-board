import React from "react";

const Table = () => {
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
          <tr className="table__flight">
            <td className="table__flight-terminal" dataTerminal="A">
              <span className="table__flight-terminal-type" dataTerminal="A">
                A
              </span>
            </td>
            <td className="table__flight-time-field">4:00</td>
            <td className="table__flight-way">Шарм-Елб-Шейх</td>
            <td className="table__flight-mob mob"></td>
            <td className="table__flight-status-field">Вилетів о 402</td>
            <td className="table__flight-number-mob mob">7B2021</td>
            <td className="table__flight-company">
              <div className="table__flight-company-info">
                <img className="table__flight-company-logo" src="" alt="" />
                <span className="table__flight-company-name">UBE</span>
              </div>
            </td>
            <td className="table__flight-number">7B2021</td>
            <td className="table__flight-more">
              <a className="table__flight-more-link" href="">
                <span>Деталі рейсу</span>
              </a>
            </td>
          </tr>
          <tr className="table__flight">
            <td className="table__flight-terminal" dataTerminal="A">
              <span className="table__flight-terminal-type" dataTerminal="A">
                A
              </span>
            </td>
            <td className="table__flight-time-field">4:00</td>
            <td className="table__flight-way">Шарм-Елб-Шейх</td>
            <td className="table__flight-mob mob"></td>
            <td className="table__flight-status-field">Вилетів о 402</td>
            <td className="table__flight-number-mob mob">7B2021</td>
            <td className="table__flight-company">
              <div className="table__flight-company-info">
                <img className="table__flight-company-logo" src="" alt="" />
                <span className="table__flight-company-name">UBE</span>
              </div>
            </td>
            <td className="table__flight-number">7B2021</td>
            <td className="table__flight-more">
              <a className="table__flight-more-link" href="">
                <span>Деталі рейсу</span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
