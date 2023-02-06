import React from "react";
import Flights from "./flights/components/Flights";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Flights />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
