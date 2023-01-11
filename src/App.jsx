import React from "react";
import Flights from "./flights/components/Flights";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Flights />
    </Provider>
  );
};

export default App;
