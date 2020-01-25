import React, { Component } from "react";
import styles from "../Styles/MobileView/mobile_view.scss";
import Login from "../Components/Login";

class MobileView extends Component {

  render() {
    return (
      <div className={styles.MobileView}>
        <Login />
      </div>
    );
  }
}

export default MobileView;
