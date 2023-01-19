const baseUrl = "https://api.iev.aero/api/flights";

/*export const createTask = (taskData) => {
  console.log(taskData);
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};*/

export const fetchFlights = (date) => {
  return fetch(`${baseUrl}/${date}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};
