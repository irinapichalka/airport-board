import { FLIGHTS_RECIEVED, CHANGE_DATE, SET_CODE } from "./flights.actions";
const initialState = {
  flights: {
    body: {
      departure: [],
      arrival: [],
    },
  },
  dateForSearch: new Date(2020, 5, 0),
  code: "",
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
    case SET_CODE:
      return {
        ...state,
        code: action.payload.code,
      };
    default:
      return state;
  }
};

export default flightsReducer;
