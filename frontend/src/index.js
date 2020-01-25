import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import styles from "./Styles/main.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import screenReducer from "./Store/reducers/screen";
import playerReducer from "./Store/reducers/player";

const rootReducer = combineReducers({
  screen: screenReducer,
  player: playerReducer
});

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const wrapper = document.getElementById("myApp");
wrapper ? ReactDOM.render(app, wrapper) : false;
