import {
  FLIGHTS_RECIEVED,
  CHANGE_DATE,
  SET_CODE,
  SHOW_SPINNER,
} from "./flights.actions";

const initialState = {
  flights: {
    body: {
      departure: [],
      arrival: [],
    },
  },
  dateForSearch: new Date(2020, 5, 0),
  code: "",
  isFetching: false,
};
const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FLIGHTS_RECIEVED:
      return {
        ...state,
        flights: action.payload.flights,
        isFetching: false,
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
