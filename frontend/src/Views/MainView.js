import React, { Component } from "react";
import styles from "../Styles/main_view.scss";
import Login from "../Components/SignIn";

class MainView extends Component {
  render() {
    return (
      <div className={styles.MainView}>
        <Login />
      </div>
    );
  }
}

export default MainView;
