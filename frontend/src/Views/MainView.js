import React, { Component } from "react";
import styles from "../Styles/main_view.scss";
import Login from "../Components/Login";
import * as actions from "../Store/actions/auth";
import { connect } from "react-redux";

class MainView extends Component {
  render() {
    return (
      <div className={styles.MainView}>
        <Login login={this.props.logIn} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: loginData => {
      dispatch(actions.logIn(loginData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
