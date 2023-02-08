const baseUrl = "https://api.iev.aero/api/flights";

export const fetchFlights = (date) => {
  return fetch(`${baseUrl}/${date}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};
