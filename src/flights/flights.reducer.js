import { FLIGHTS_RECIEVED, CHANGE_DATE } from "./flights.actions";
const initialState = {
  flights: {},
  dateForSearch: new Date(),
};
const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_RECIEVED:
      return {
        ...state,
        flights: action.payload.flights,
      };
    case CHANGE_DATE:
      return {
        ...state,
        dateForSearch: action.payload.newDate,
      };
    default:
      return state;
  }
};

export default flightsReducer;
