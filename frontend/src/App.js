import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import MainView from "./Views/MainView";
import styles from "./Styles/main.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <MainView />
      </div>
    );
  }
}

export default hot(App);
