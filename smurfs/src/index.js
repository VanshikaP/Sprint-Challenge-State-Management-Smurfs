import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import { reducer } from "./reducers";
import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
