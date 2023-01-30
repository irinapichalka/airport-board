export const flightsSelector = (state) => {
  return state.flights.flights.body;
};

export const dateSelector = (state) => {
  return state.flights.dateForSearch;
};
