import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counters from "./components/CounterContainer";
import Grid from "./components/Grid";

import logo from "./logo.svg";
import "./App.css";

const initialState = {
  rows: 10,
  columns: 10
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        [action.name]: state[action.name] + 1
      };
    case "DECREASE":
      return {
        ...state,
        [action.name]: state[action.name] - 1 > 1 ? state[action.name] - 1 : 1
      };
    case "RESET":
      return {
        ...state,
        [action.name]: 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counters />
          <Grid />
        </main>
      </div>
    </Provider>
  );
}

export default App;
