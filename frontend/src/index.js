import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import authReducer from "./Store/reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer
});

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

// define redux provider store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const wrapper = document.getElementById("myApp");
wrapper ? ReactDOM.render(app, wrapper) : false;
