import React, {useState} from "react";
import moment from "moment";

const DatesPanel = ({ handleChange }) => {
  let today = moment();
  let tomorrow = moment().add(1, "days");
  let yesterday = moment().add(-1, "days");
  const [isClicked, setIsClicked] = useState('');
  const handleClick = (date) => {
    switch (date) {
      case 'yesterday':
        handleChange(new Date(yesterday));
        setIsClicked('yesterday');
        break;
      case 'today':
        handleChange(new Date(today));
        setIsClicked('today');
        break;
      case 'tomorrow':
        handleChange(new Date(tomorrow));
        setIsClicked('tomorrow');
        break;
  }

}

  return (
    <div className="search-result__dates-conteiner">
      <div
        className={`search-result__date yesterday ${isClicked==='yesterday'? "active-date" : ""}`}
        onClick={() => handleClick('yesterday')}
      >
        <span className="search-result__date-num">
          {yesterday.format("DD/MM")}
        </span>
        <span className="search-result__date-name">Вчора</span>
      </div>
      <div
        className={`search-result__date today ${isClicked==='today'? "active-date" : ""}`}
        onClick={() => handleClick('today')}
      >
        <span className="search-result__date-num">{today.format("DD/MM")}</span>
        <span className="search-result__date-name">Сьогодні</span>
      </div>
      <div
        className={`search-result__date tomorrow ${isClicked==='tomorrow'? "active-date" : ""}`}
        onClick={() => handleClick('tomorrow')}
      >
        <span className="search-result__date-num">
          {tomorrow.format("DD/MM")}
        </span>
        <span className="search-result__date-name">Завтра</span>
      </div>
    </div>
  );
};

export default DatesPanel;
