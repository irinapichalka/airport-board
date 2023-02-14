export const flightsSelector = (state) => state.flights.flights.body;

export const dateSelector = (state) => state.flights.dateForSearch;

export const codeSelector = (state) => state.flights.code;

export const isFetchingSelector = (state) => state.flights.isFetching;
