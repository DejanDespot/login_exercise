import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../Styles/home_page.scss";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class HomePage extends Component {
  logOut = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className={styles.HomePage}>
        <p>Hello {this.props.userData.email}</p>
        <Button className={styles.Button} onClick={this.logOut}>
          Log out
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.auth.userData
  };
};

export default withRouter(connect(mapStateToProps)(HomePage));
