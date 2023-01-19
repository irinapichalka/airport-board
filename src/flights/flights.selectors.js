export const flightsSelector = (state) => {
  return state.flights.flights;
};

export const dateSelector = (state) => {
  return state.flights.dateForSearch;
};
