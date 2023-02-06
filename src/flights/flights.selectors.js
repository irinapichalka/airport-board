export const flightsSelector = (state) => {
  return state.flights.flights.body;
};

export const dateSelector = (state) => {
  return state.flights.dateForSearch;
};

export const codeSelector = (state) => {
  return state.flights.code;
};
