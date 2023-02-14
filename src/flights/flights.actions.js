import * as flightsGateway from "./fllightsGateway";

export const FLIGHTS_RECIEVED = "FLIGHTS_RECIEVED";
export const CHANGE_DATE = "CHANGE_DATE";
export const SET_CODE = "SET_CODE";
export const SHOW_SPINNER = "SHOW_SPINNER";

export const flightsRecieved = (flights) => {
  const action = {
    type: FLIGHTS_RECIEVED,
    payload: {
      flights,
    },
  };
  return action;
};

export const changeDate = (newDate) => {
  const action = {
    type: CHANGE_DATE,
    payload: {
      newDate,
    },
  };
  return action;
};

export const setCode = (code) => {
  const action = {
    type: SET_CODE,
    payload: {
      code,
    },
  };
  return action;
};

export const showSpinner = () => ({
  type: SHOW_SPINNER,
});

export const getFlights = (date) => {
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    flightsGateway
      .fetchFlights(date)
      .then((flights) => dispatch(flightsRecieved(flights)));
  };

  return thunkAction;
};
