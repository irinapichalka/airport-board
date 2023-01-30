import {
  FLIGHTS_RECIEVED,
  CHANGE_DATE,
  GET_FLIGHTS_BY_CODE,
} from "./flights.actions";
const initialState = {
  flights: {
    body: {
      departure: [],
      arrival: [],
    },
  },
  dateForSearch: new Date(2020, 5, 0),
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
    case GET_FLIGHTS_BY_CODE:
      return {
        ...state,
        flights: {
          body: {
            departure: state.flights.body.departure.filter(
              (flight) => flight["planeTypeID.code"] === action.payload.code
            ),
            arrival: state.flights.body.arrival.filter(
              (flight) => flight["planeTypeID.code"] === action.payload.code
            ),
          },
        },
      };
    default:
      return state;
  }
};

export default flightsReducer;
