import React, { Component } from "react";
import styles from "../Styles/main_view.scss";
import SignIn from "../Components/SignIn";

class MainView extends Component {
  render() {
    return (
      <div className={styles.MainView}>
        <SignIn />
      </div>
    );
  }
}

export default MainView;
