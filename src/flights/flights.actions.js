import * as flightsGateway from "./fllightsGateway";
export const FLIGHTS_RECIEVED = "FLIGHTS_RECIEVED";
export const CHANGE_DATE = "CHANGE_DATE";

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

export const getFlights = (date) => {
  const thunkAction = function (dispatch) {
    flightsGateway
      .fetchFlights(date)
      .then((flights) => dispatch(flightsRecieved(flights)));
  };

  return thunkAction;
};

/*export const createTask = (text) => {
  const thunkAction = function (dispatch) {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };
    tasksGateway.createTask(taskData).then(() => dispatch(getTaskList()));
  };

  return thunkAction;
};*/
